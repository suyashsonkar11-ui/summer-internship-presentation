import Foundation
import PDFKit
import AppKit

let arguments = CommandLine.arguments
if arguments.count < 3 {
    print("Usage: render_pdf <pdfPath> <outputDir>")
    exit(1)
}

let pdfPath = arguments[1]
let outputDir = arguments[2]

guard let pdfDocument = PDFDocument(url: URL(fileURLWithPath: pdfPath)) else {
    print("Failed to load PDF: \(pdfPath)")
    exit(1)
}

let pageCount = pdfDocument.pageCount
print("Total pages: \(pageCount)")

for i in 0..<pageCount {
    guard let page = pdfDocument.page(at: i) else { continue }
    let pageRect = page.bounds(for: .mediaBox)
    let renderer = NSImage(size: NSSize(width: 1920, height: 1080))
    renderer.lockFocus()
    
    guard let context = NSGraphicsContext.current?.cgContext else {
        renderer.unlockFocus()
        continue
    }
    
    context.setFillColor(NSColor.black.cgColor)
    context.fill(CGRect(x: 0, y: 0, width: 1920, height: 1080))
    
    // Scale context to fit 1920x1080
    let scaleX = 1920.0 / pageRect.width
    let scaleY = 1080.0 / pageRect.height
    context.scaleBy(x: scaleX, y: scaleY)
    
    page.draw(with: .mediaBox, to: context)
    renderer.unlockFocus()
    
    if let tiffData = renderer.tiffRepresentation,
       let bitmapImage = NSBitmapImageRep(data: tiffData),
       let pngData = bitmapImage.representation(using: .png, properties: [:]) {
        let outPath = (outputDir as NSString).appendingPathComponent("pdf_page_\(i + 1).png")
        try? pngData.write(to: URL(fileURLWithPath: outPath))
        print("Wrote page \(i + 1) to \(outPath)")
    }
}
