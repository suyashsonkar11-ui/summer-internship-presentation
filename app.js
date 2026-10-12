/**
 * PRESENTATION ENGINE & CONTROLLER WITH SCROLL ANIMATIONS
 * A Detailed Study on Recruitment and Selection Practices at SECL Bilaspur
 * Author: Suyash Sonkar
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // SPEAKER NOTES DATABASE (Exact user speech scripts & key contexts)
  // =========================================================================
  const speakerNotesData = {
    1: {
      heading: "Slide 1: Title Slide & Introduction",
      speech: "“Good morning everyone. Today I am going to present my summer training report on recruitment and selection practices at SECL, Bilaspur. Meri training ke dauran mujhe different HR departments ko closely observe karne aur understand karne ka opportunity mila, especially Employee Administration, Manpower, Industrial Relations, aur HRD. Is presentation mein main recruitment and selection process, manpower planning ka role, aur apni practical learning explain karunga.”",
      points: [
        "Confidently introduce your name: Suyash Sonkar, Roll No. 25016273.",
        "Mention your department: Department of Management Studies, Guru Ghasidas Vishwavidyalaya, Bilaspur.",
        "Highlight the organisation: South Eastern Coalfields Limited (SECL), a major CIL subsidiary headquartered at Bilaspur."
      ],
      estTime: "35s"
    },
    2: {
      heading: "Slide 2: Executive Summary — Overview of the Study",
      speech: "“Is slide mein meri complete summer training ka overview hai. Basically, report ka central focus recruitment and selection par hai. Lekin internship ke dauran maine realise kiya ki recruitment ko hum baaki HR functions se alag karke nahi samajh sakte. Manpower planning vacancy create karti hai, recruitment candidates ka pool attract karta hai, aur selection best person ko choose karta hai. Joining ke baad EE, IR aur HRD ka role start hota hai. Meri 30-day training 4 departments mein divide thi: 7 days Executive Establishment, 7 days Manpower, 7 days Industrial Relations, aur 9 days HRD.”",
      points: [
        "State training duration: 25 June – 24 July 2026 (30 days total).",
        "Detail rotation breakdown: 7 days EE (23.3%), 7 days Manpower (23.3%), 7 days IR (23.3%), 9 days HRD (30.1%).",
        "Core takeaway: Recruitment is part of a complete, connected HR system."
      ],
      estTime: "50s"
    },
    3: {
      heading: "Slide 3: Introduction — HR Lifecycle & Study Objectives",
      speech: "“Now coming to the theoretical foundation. HR mein hum complete employee lifecycle padhte hain—Acquisition se lekar Maintenance tak. Recruitment aur selection is lifecycle ka entry gate hain. Problem statement ye hai ki textbooks mein recruitment ko aksar ek routine administrative activity samjha jata hai. Lekin SECL jaise large public sector organisation mein recruitment strictly government rules, safety norms aur union agreements se juda hota hai. Agar recruitment manpower planning ke sath match na ho, toh workforce shortage ya extra cost ho sakti hai. Is study ka main purpose isi practical process ko samajhna aur document karna hai.”",
      points: [
        "Explain the 5 HRM lifecycle stages: Acquisition, Development, Utilisation, Engagement, Maintenance.",
        "Highlight problem statement: Why recruitment cannot be treated as an isolated administrative task.",
        "State study objectives: Connecting classroom concepts with real PSU practices."
      ],
      estTime: "50s"
    },
    4: {
      heading: "Slide 4: Organisation Profile — SECL",
      speech: "“Is slide mein SECL ka updated organisational profile aur operational scale explain kiya gaya hai. SECL 1985 mein establish hui thi aur Coal India Limited ki premier Miniratna Category-I subsidiary hai, jiska corporate headquarters Bilaspur mein hai. FY 2025–26 mein SECL ka raw coal production 176.28 Million Tonnes raha, aur 31 March 2025 tak total 57 operating mines hain jisme 38 underground aur 19 opencast mines shamil hain across 13 operating areas. Iske alawa 1 April 2024 ke anusar SECL ke paas 92,240.65 Million Tonnes ka massive coal reserve base hai, jisme Gevra aur Dipka jaise Asia ke mega opencast pits aate hain. HR perspective se, large-scale mining safety ke liye technical employees ki DGMS competency certifications aur executive cadres ki structured public sector governance ek crucial analytical balance demand karti hai.”",
      points: [
        "Corporate milestones: Established 1985, Bilaspur headquarters, Miniratna Category-I, Coal India Limited subsidiary.",
        "Operational scale: 176.28 MT coal production (FY 2025–26), 57 operating mines (38 UG / 19 OC) as of 31 March 2025 across 13 areas.",
        "Coal reserves & assets: 92,240.65 MT coal reserves (as of 1 April 2024), featuring Gevra & Dipka mega opencast pits.",
        "HR analytical observation: Dual governance balancing technical DGMS safety certifications with public sector service rules."
      ],
      estTime: "45s"
    },
    5: {
      heading: "Slide 5: HR Department & Internship Rotation",
      speech: "“During my internship, mujhe SECL Headquarters ke 4 major HR wings mein rotational training mili. First was Executive Establishment, yaani EE, jahan executive officers ke service books, transfers aur promotions handle hote hain. Second was Manpower Planning, jahan future workforce requirements forecast hoti hain aur land-loser aur compassionate appointment cases process kiye jate hain. Third was Industrial Relations ya IR, jahan trade unions ke sath coordination aur NCWA wage agreements implement hote hain. And fourth was HRD, jahan MDI Bilaspur mein training aur induction programs chalte hain. Is rotation se mujhe samajh aaya ki sabhi HR wings ek dusre ke sath milkar kaam karti hain.”",
      points: [
        "Walk through the 4 functional areas: EE (Records), Manpower (Workforce Planning), IR (Employee Relations), HRD (Training at MDI).",
        "Explain rotation value: Bridging classroom HR theory with real PSU public sector practices.",
        "Emphasize the 30-day immersion across departments."
      ],
      estTime: "55s"
    },
    6: {
      heading: "Slide 6: Recruitment & Selection Process — Step-by-Step Flow",
      speech: "“Now let us look at the recruitment and selection process. SECL mein ye process 9 systematic stages mein complete hoti hai. Sabse pehle Manpower Requisition se vacancy identify hoti hai. Uske baad Job Analysis aur Job Specification banti hai, jisme duties aur qualifications decide hoti hain. Phir national newspapers aur online portal par notification nikala jata hai. Next, applications ki screening hoti hai aur Computer Based Test (CBT) aur personal interviews conduct hote hain. Selected candidates ka document verification aur DGMS safety rules ke under Initial Medical Examination (IME) hota hai. Finally, appointment and joining ke baad Executive Establishment mein service records bante hain aur MDI Bilaspur mein induction training start hoti hai.”",
      points: [
        "Trace the 9 stages: Manpower Requirement → Job Analysis → Job Specification → Recruitment → Screening → Selection → Appointment & Joining → Employee Administration → Induction & Development.",
        "Explain Job Analysis: Defines job duties, tasks, and responsibilities in mining operations.",
        "Explain Job Specification: Specifies qualifications, skills, experience, and DGMS safety certifications."
      ],
      estTime: "55s"
    },
    7: {
      heading: "Slide 7: Manpower Planning & Recruitment Connection",
      speech: "“Manpower planning meri study ka bohot important part hai. Iska basic purpose ye samajhna hai ki organisation ko kitne employees chahiye aur kis type ki skills required hain. Simple formula hai: Required Workforce minus Available Workforce equals Manpower Gap. Agar gap positive hai, toh recruitment ki zaroorat hoti hai. SECL mein different intake routes hote hain: Open MT exam through CIL, internal departmental promotions, land-loser employment under rehabilitation policy, aur compassionate appointment under NCWA Clause 9.3.0. Yahan se mujhe clear hua ki recruitment actually manpower planning ki demand se start hota hai.”",
      points: [
        "4 core questions: How many? What skills? When needed? Where placed?",
        "Formula: Required Workforce − Available Workforce = Manpower Gap.",
        "Core upstream principle: Recruitment is strictly demand-driven and authorized by approved manpower limits.",
        "SECL intake channels: CIL open competitive exam, internal promotions, land acquisition R&R, NCWA 9.3.0 compassionate cases."
      ],
      estTime: "55s"
    },
    8: {
      heading: "Slide 8: Internship Work & Practical Learning",
      speech: "“Is slide mein meri practical internship activities aur operational desk exposure ka summary hai. EE department mein maine dekha ki executive service records, transfer orders aur joining reports kitni accuracy ke sath maintain kiye jate hain. Manpower department mein sanctioned post limits ke according vacancies evaluate karna, land-loser rehabilitation cases aur compassionate appointments ki verification observe ki. IR department mein Joint Consultative Committees aur trade union correspondence samajhne ko mila. Aur HRD mein Management Trainees ke induction aur safety training modules dekhe. Is real exposure se public sector HR governance aur accurate documentation ki importance bohot clear hui.”",
      points: [
        "Practical Learning: Documentation & records, Manpower casework, Employee relations, Training & development.",
        "Core takeaway: Public sector HR decisions depend heavily on accurate records, official approvals, and clear statutory rules."
      ],
      estTime: "45s"
    },
    9: {
      heading: "Slide 10: Challenges & Key Findings",
      speech: "“Challenges — Mujhe kya difficulties aayi?\n\n1. Limited Internship Duration: Internship sirf 30 days ki thi, isliye har HR department ko detail mein samajhne ka time limited tha.\n2. Different Departmental Processes: Har department ka kaam aur working process alag tha, isliye sabhi processes ko samajhna ek challenge tha.\n3. Confidentiality of HR Records: Employees ke personal records confidential hote hain, isliye un sabhi records ko access karna possible nahi tha.\n4. Limited Access to Recruitment Statistics: Internal recruitment ka complete data available nahi tha, isliye recruitment statistics ka detailed analysis nahi kar paya.\n\nKey Findings — Maine kya seekha?\n\n1. Recruitment is Connected with Manpower Planning: Hiring se pehle organization ko pata hona chahiye ki kitne employees ki zarurat hai.\n2. Recruitment and Selection are Different: Recruitment mein candidates ko apply karne ke liye attract kiya jata hai, jabki selection mein suitable candidate choose kiya jata hai.\n3. HR Functions Depend on Coordination: HR ke different departments ko milkar kaam karna padta hai, tabhi work smoothly hota hai.\n4. Employee Administration Continues After Selection: Candidate select hone ke baad bhi joining formalities aur employee records maintain karne padte hain.\n5. Training Supports Employee Development: Training se employees ko apna kaam samajhne aur skills improve karne mein help milti hai.\n\nPractical Example:\nAgar SECL mein kisi post ke liye employee hire hota hai, toh pehle manpower requirement identify hoti hai, phir recruitment aur selection hota. Selection ke baad joining formalities complete hoti hain aur employee ko training di ja sakti hai.\n\nConclusion:\nOverall, meri internship se maine seekha ki effective HR management ke liye proper planning, coordination, documentation aur employee training bahut important hain.”",
      points: [
        "Challenges: 1. Limited Internship Duration (30 days), 2. Different Departmental Processes, 3. Confidentiality of HR Records, 4. Limited Access to Recruitment Statistics.",
        "Key Findings: 1. Recruitment Connected with Manpower Planning, 2. Recruitment & Selection are Different, 3. HR Coordination, 4. Post-Selection Administration, 5. Training.",
        "Practical Example: SECL post hiring: Manpower requirement → Recruitment & Selection → Joining formalities → Employee training.",
        "Conclusion: Proper planning, coordination, documentation aur employee training effective HR management ke liye essential hain."
      ],
      estTime: "55s"
    },
    10: {
      heading: "Slide 10: Challenges & Key Findings",
      speech: "“Challenges — Mujhe kya difficulties aayi?\n\n1. Limited Internship Duration: Internship sirf 30 days ki thi, isliye har HR department ko detail mein samajhne ka time limited tha.\n2. Different Departmental Processes: Har department ka kaam aur working process alag tha, isliye sabhi processes ko samajhna ek challenge tha.\n3. Confidentiality of HR Records: Employees ke personal records confidential hote hain, isliye un sabhi records ko access karna possible nahi tha.\n4. Limited Access to Recruitment Statistics: Internal recruitment ka complete data available nahi tha, isliye recruitment statistics ka detailed analysis nahi kar paya.\n\nKey Findings — Maine kya seekha?\n\n1. Recruitment is Connected with Manpower Planning: Hiring se pehle organization ko pata hona chahiye ki kitne employees ki zarurat hai.\n2. Recruitment and Selection are Different: Recruitment mein candidates ko apply karne ke liye attract kiya jata hai, jabki selection mein suitable candidate choose kiya jata hai.\n3. HR Functions Depend on Coordination: HR ke different departments ko milkar kaam karna padta hai, tabhi work smoothly hota hai.\n4. Employee Administration Continues After Selection: Candidate select hone ke baad bhi joining formalities aur employee records maintain karne padte hain.\n5. Training Supports Employee Development: Training se employees ko apna kaam samajhne aur skills improve karne mein help milti hai.\n\nPractical Example:\nAgar SECL mein kisi post ke liye employee hire hota hai, toh pehle manpower requirement identify hoti hai, phir recruitment aur selection hota. Selection ke baad joining formalities complete hoti hain aur employee ko training di ja sakti hai.\n\nConclusion:\nOverall, meri internship se maine seekha ki effective HR management ke liye proper planning, coordination, documentation aur employee training bahut important hain.”",
      points: [
        "Challenges: 1. Limited Internship Duration (30 days), 2. Different Departmental Processes, 3. Confidentiality of HR Records, 4. Limited Access to Recruitment Statistics.",
        "Key Findings: 1. Recruitment Connected with Manpower Planning, 2. Recruitment & Selection are Different, 3. HR Coordination, 4. Post-Selection Administration, 5. Training.",
        "Practical Example: SECL post hiring: Manpower requirement → Recruitment & Selection → Joining formalities → Employee training.",
        "Conclusion: Proper planning, coordination, documentation aur employee training effective HR management ke liye essential hain."
      ],
      estTime: "55s"
    },
    11: {
      heading: "Slide 11: Conclusion",
      speech: "“My summer internship at SECL helped me understand recruitment, selection, manpower planning and other HR functions. Through departmental exposure, I learned about documentation, employee relations, employment-related cases and training. The internship connected my academic knowledge with practical HR activities and improved my understanding of Human Resource Management.”",
      points: [
        "Core synthesis: Understanding recruitment, selection, manpower planning and other HR functions.",
        "Departmental exposure: Practical learning in documentation, employee relations, employment-related cases and training.",
        "Academic linkage: Bridging academic knowledge with practical HR activities to advance HRM understanding."
      ],
      estTime: "35s"
    }
  };

  const hrAnalysisNotesBackup = {
    heading: "Slide 10: HR Analysis & Workforce Dynamics",
    speech: "“Is slide mein hum recruitment and workforce dynamics ka detailed HR analysis aur proposed evaluation metrics dekhte hain. Pehla key point ye hai ki recruitment hamesha systematic manpower forecasts se match hona chahiye. Manpower gaps ko address karne ke liye external hiring ke alawa internal promotions aur inter-area transfers bhi decisive mechanisms hain. Accurate documentation public-sector governance aur audit compliance ko support karti hai, jabki Manpower, EE, IR aur HRD ka cross-departmental coordination operations ko seamless banata hai. Iske sath humne recruitment effectiveness evaluate karne ke liye Time-to-Fill, Selection Ratio aur Joining Ratio jaise conceptual HR metrics propose kiye hain.”",
    points: [
      "Workforce alignment: Recruitment matches systematic manpower planning forecasts.",
      "Internal routes: Departmental promotions & inter-area transfers address vacancies rapidly.",
      "Governance & Synergy: Accurate personnel documentation and inter-wing coordination.",
      "Proposed HR metrics: Time-to-Fill (hiring speed), Selection Ratio, and Joining Ratio."
    ],
    estTime: "45s"
  };

  // =========================================================================
  // STATE MANAGEMENT & DOM ELEMENTS
  // =========================================================================
  const slideViewport = document.getElementById('slideViewport');
  const slides = Array.from(document.querySelectorAll('.slide-card'));
  const totalSlides = slides.length;
  let currentSlideIndex = 0;
  let isAutoPlaying = false;
  let autoPlayInterval = null;
  let timerSeconds = 0;
  let timerInterval = null;
  let isSpeaking = false;
  let synth = window.speechSynthesis;

  // Header & Footer UI Elements
  const currentSlideNumEl = document.getElementById('currentSlideNum');
  const totalSlidesNumEl = document.getElementById('totalSlidesNum');
  const slideProgressBar = document.getElementById('slideProgressBar');
  const slideStatusText = document.getElementById('slideStatusText');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const scrollDownHint = document.getElementById('scrollDownHint');
  
  // Speaker Notes Elements
  const speakerNotesDrawer = document.getElementById('speakerNotesDrawer');
  const notesSlideHeading = document.getElementById('notesSlideHeading');
  const speakerSpeechText = document.getElementById('speakerSpeechText');
  const speakerKeyPoints = document.getElementById('speakerKeyPoints');
  const estSpeakingTime = document.getElementById('estSpeakingTime');
  const btnToggleNotes = document.getElementById('btnToggleNotes');
  const btnQuickNotesToggle = document.getElementById('btnQuickNotesToggle');
  const btnCloseNotes = document.getElementById('btnCloseNotes');
  const btnSpeakNotes = document.getElementById('btnSpeakNotes');
  const speakBtnText = document.getElementById('speakBtnText');
  
  // Modals & Extras
  const gridModalOverlay = document.getElementById('gridModalOverlay');
  const btnToggleGrid = document.getElementById('btnToggleGrid');
  const btnCloseGrid = document.getElementById('btnCloseGrid');
  const gridThumbnailsContainer = document.getElementById('gridThumbnailsContainer');
  const exportModalOverlay = document.getElementById('exportModalOverlay');
  const btnCloseExportModal = document.getElementById('btnCloseExportModal');
  const btnDownloadFullHDPdf = document.getElementById('btnDownloadFullHDPdf');
  const btnPrintBrowserDialog = document.getElementById('btnPrintBrowserDialog');
  const btnToggleFullscreen = document.getElementById('btnToggleFullscreen');
  const btnExportPDF = document.getElementById('btnExportPDF');
  const btnAutoPlay = document.getElementById('btnAutoPlay');
  const autoPlayLabel = document.getElementById('autoPlayLabel');
  const timerDisplay = document.getElementById('timerDisplay');
  const deckTimer = document.getElementById('deckTimer');
  const themeBtns = document.querySelectorAll('[data-set-theme]');

  // Initialize display
  totalSlidesNumEl.textContent = String(totalSlides).padStart(2, '0');

  // =========================================================================
  // PRESENTATION VIEWPORT PROPORTIONAL 16:9 SCALING ENGINE
  // =========================================================================
  const BASE_WIDTH = 1920;
  const BASE_HEIGHT = 1080;
  const slidesTrack = document.getElementById('slidesTrack');

  function updateSlideScale() {
    if (!slideViewport || !slidesTrack) return;

    const availWidth = slideViewport.clientWidth;
    const availHeight = slideViewport.clientHeight;

    if (availWidth <= 0 || availHeight <= 0) return;

    // Small breathing room around 16:9 canvas so slide borders don't collide with header/footer
    const paddingX = 24;
    const paddingY = 16;
    const targetW = Math.max(100, availWidth - paddingX);
    const targetH = Math.max(100, availHeight - paddingY);

    // Conceptually: scale = MIN(availableWidth / 1920, availableHeight / 1080)
    const scale = Math.min(targetW / BASE_WIDTH, targetH / BASE_HEIGHT);

    document.documentElement.style.setProperty('--slide-scale', scale);
    slidesTrack.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  window.addEventListener('resize', updateSlideScale);
  window.addEventListener('orientationchange', updateSlideScale);

  // =========================================================================
  // SLIDE VIEWING & TRANSITION ENGINE
  // =========================================================================
  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    currentSlideIndex = index;

    slides.forEach((slide, idx) => {
      const vid = slide.querySelector('video');
      if (idx === currentSlideIndex) {
        slide.classList.add('in-view', 'active');
        if (vid) {
          vid.play().catch(() => {});
        }
      } else {
        slide.classList.remove('in-view', 'active');
        if (vid) {
          vid.pause();
        }
      }
    });

    updateUI();
    updateNotes();
  }

  // Smooth slide navigation
  function scrollToSlide(index) {
    goToSlide(index);
  }

  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    } else if (isAutoPlaying) {
      goToSlide(0); // loop in autoplay
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }

  // Mouse wheel slide advance with debounce (PowerPoint style)
  let wheelLock = false;
  slideViewport.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) < 18) return;
    e.preventDefault();
    if (wheelLock) return;

    wheelLock = true;
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    setTimeout(() => { wheelLock = false; }, 320);
  }, { passive: false });

  // Touch swipe gestures
  let touchStartY = 0;
  let touchStartX = 0;
  slideViewport.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    }
  }, { passive: true });

  slideViewport.addEventListener('touchend', (e) => {
    if (e.changedTouches.length > 0) {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const diffY = touchStartY - touchEndY;
      const diffX = touchStartX - touchEndX;

      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 35) {
        if (diffY > 0) nextSlide();
        else prevSlide();
      } else if (Math.abs(diffX) > 45) {
        if (diffX > 0) nextSlide();
        else prevSlide();
      }
    }
  }, { passive: true });

  function updateUI() {
    const slideNum = currentSlideIndex + 1;
    currentSlideNumEl.textContent = String(slideNum).padStart(2, '0');
    
    // Progress calculation
    const progressPercent = ((slideNum) / totalSlides) * 100;
    slideProgressBar.style.width = `${progressPercent}%`;

    const activeSlide = slides[currentSlideIndex];
    const slideTitle = activeSlide.getAttribute('data-slide-title') || `Slide ${slideNum}`;
    slideStatusText.textContent = `Slide ${slideNum} of ${totalSlides}: ${slideTitle}`;

    // Update active state in grid overview
    const thumbs = document.querySelectorAll('.thumb-card');
    thumbs.forEach((thumb, idx) => {
      if (idx === currentSlideIndex) {
        thumb.classList.add('active-thumb');
      } else {
        thumb.classList.remove('active-thumb');
      }
    });
  }

  function updateNotes() {
    const slideNum = currentSlideIndex + 1;
    const activeSlide = slides[currentSlideIndex];
    const slideTitle = activeSlide ? (activeSlide.getAttribute('data-slide-title') || '') : '';

    let noteData = speakerNotesData[slideNum];
    if (slideTitle && slideTitle.toLowerCase().includes('hr analysis')) {
      noteData = hrAnalysisNotesBackup;
    }

    if (noteData) {
      notesSlideHeading.textContent = noteData.heading;
      speakerSpeechText.textContent = noteData.speech;
      estSpeakingTime.textContent = noteData.estTime;

      speakerKeyPoints.innerHTML = '';
      noteData.points.forEach(pt => {
        const li = document.createElement('li');
        li.textContent = pt;
        speakerKeyPoints.appendChild(li);
      });
    }
  }

  // Scroll down hint click
  if (scrollDownHint) {
    scrollDownHint.addEventListener('click', () => {
      scrollToSlide(1);
    });
  }

  // =========================================================================
  // PRESENTATION STOPWATCH TIMER
  // =========================================================================
  function startTimer() {
    timerInterval = setInterval(() => {
      timerSeconds++;
      const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
      const secs = String(timerSeconds % 60).padStart(2, '0');
      timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function resetTimer() {
    timerSeconds = 0;
    timerDisplay.textContent = '00:00';
  }

  deckTimer.addEventListener('click', resetTimer);
  startTimer();

  // =========================================================================
  // SPEAKER NOTES DRAWER TOGGLES & TTS
  // =========================================================================
  function toggleSpeakerNotes() {
    speakerNotesDrawer.classList.toggle('open');
  }

  btnToggleNotes.addEventListener('click', toggleSpeakerNotes);
  btnQuickNotesToggle.addEventListener('click', toggleSpeakerNotes);
  btnCloseNotes.addEventListener('click', () => speakerNotesDrawer.classList.remove('open'));

  // Speech Synthesizer for rehearsal
  function stopSpeech() {
    if (synth && synth.speaking) {
      synth.cancel();
      isSpeaking = false;
      speakBtnText.textContent = 'Play Audio';
    }
  }

  function speakCurrentNotes() {
    if (!synth) {
      alert('Speech synthesis is not supported on your browser.');
      return;
    }

    if (isSpeaking) {
      stopSpeech();
      return;
    }

    const slideNum = currentSlideIndex + 1;
    const noteData = speakerNotesData[slideNum];
    if (!noteData) return;

    // Clean quotes from text
    const cleanSpeech = noteData.speech.replace(/“|”|"/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      isSpeaking = true;
      speakBtnText.textContent = 'Stop Audio';
    };

    utterance.onend = () => {
      isSpeaking = false;
      speakBtnText.textContent = 'Play Audio';
    };

    utterance.onerror = () => {
      isSpeaking = false;
      speakBtnText.textContent = 'Play Audio';
    };

    synth.speak(utterance);
  }

  btnSpeakNotes.addEventListener('click', speakCurrentNotes);

  // =========================================================================
  // SLIDE OVERVIEW GRID MODAL
  // =========================================================================
  function buildGridThumbnails() {
    gridThumbnailsContainer.innerHTML = '';

    slides.forEach((slide, idx) => {
      const slideNum = idx + 1;
      const title = slide.getAttribute('data-slide-title') || `Slide ${slideNum}`;

      const card = document.createElement('div');
      card.className = `thumb-card ${idx === currentSlideIndex ? 'active-thumb' : ''}`;
      card.innerHTML = `
        <div class="t-header">
          <span class="t-num">${String(slideNum).padStart(2, '0')}</span>
          <span class="pillar-tag" style="font-size:10.35px; padding:2px 6px;">SLIDE</span>
        </div>
        <div class="t-title">${title}</div>
      `;

      card.addEventListener('click', () => {
        scrollToSlide(idx);
        gridModalOverlay.classList.remove('open');
      });

      gridThumbnailsContainer.appendChild(card);
    });
  }

  btnToggleGrid.addEventListener('click', () => {
    buildGridThumbnails();
    gridModalOverlay.classList.add('open');
  });

  btnCloseGrid.addEventListener('click', () => {
    gridModalOverlay.classList.remove('open');
  });

  gridModalOverlay.addEventListener('click', (e) => {
    if (e.target === gridModalOverlay) {
      gridModalOverlay.classList.remove('open');
    }
  });

  // =========================================================================
  // THEME SWITCHER
  // =========================================================================
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-set-theme');
      document.documentElement.setAttribute('data-theme', theme);
      
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // =========================================================================
  // FULLSCREEN & EXPORT ACTIONS
  // =========================================================================
  btnToggleFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });

  // All-Slides PDF Export Handler
  function prepareAllSlidesForPrint() {
    document.body.classList.add('pdf-export-mode');
    slides.forEach(slide => {
      slide.classList.add('in-view');
      slide.classList.remove('active');
    });
  }

  // Open Export Modal on clicking Export Button
  btnExportPDF.addEventListener('click', () => {
    if (exportModalOverlay) {
      exportModalOverlay.classList.add('open');
    } else {
      prepareAllSlidesForPrint();
      setTimeout(() => window.print(), 120);
    }
  });

  if (btnCloseExportModal) {
    btnCloseExportModal.addEventListener('click', () => {
      exportModalOverlay.classList.remove('open');
    });
  }

  if (exportModalOverlay) {
    exportModalOverlay.addEventListener('click', (e) => {
      if (e.target === exportModalOverlay) {
        exportModalOverlay.classList.remove('open');
      }
    });
  }

  if (btnDownloadFullHDPdf) {
    btnDownloadFullHDPdf.addEventListener('click', () => {
      setTimeout(() => {
        if (exportModalOverlay) exportModalOverlay.classList.remove('open');
      }, 500);
    });
  }

  if (btnPrintBrowserDialog) {
    btnPrintBrowserDialog.addEventListener('click', () => {
      if (exportModalOverlay) exportModalOverlay.classList.remove('open');
      prepareAllSlidesForPrint();
      setTimeout(() => {
        window.print();
      }, 150);
    });
  }

  window.addEventListener('beforeprint', prepareAllSlidesForPrint);
  window.addEventListener('afterprint', () => {
    document.body.classList.remove('pdf-export-mode');
    goToSlide(currentSlideIndex);
  });

  // Auto-play toggle
  btnAutoPlay.addEventListener('click', () => {
    if (isAutoPlaying) {
      clearInterval(autoPlayInterval);
      isAutoPlaying = false;
      autoPlayLabel.textContent = 'Auto';
      btnAutoPlay.classList.remove('highlight-btn');
    } else {
      isAutoPlaying = true;
      autoPlayLabel.textContent = 'Pause';
      btnAutoPlay.classList.add('highlight-btn');
      autoPlayInterval = setInterval(() => {
        nextSlide();
      }, 7000);
    }
  });

  // =========================================================================
  // EVENT LISTENERS (Buttons & Keyboard Navigation)
  // =========================================================================
  btnPrev.addEventListener('click', prevSlide);
  btnNext.addEventListener('click', nextSlide);

  document.addEventListener('keydown', (e) => {
    // If modal is open, Escape closes it
    if (e.key === 'Escape') {
      if (gridModalOverlay) gridModalOverlay.classList.remove('open');
      if (exportModalOverlay) exportModalOverlay.classList.remove('open');
      speakerNotesDrawer.classList.remove('open');
      stopSpeech();
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
      case 'j':
      case 'J':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowUp':
      case 'ArrowLeft':
      case 'PageUp':
      case 'k':
      case 'K':
        e.preventDefault();
        prevSlide();
        break;

      case 'Home':
        e.preventDefault();
        scrollToSlide(0);
        break;

      case 'End':
        e.preventDefault();
        scrollToSlide(totalSlides - 1);
        break;

      case 'f':
      case 'F':
        btnToggleFullscreen.click();
        break;

      case 'n':
      case 'N':
        toggleSpeakerNotes();
        break;

      case 'g':
      case 'G':
        btnToggleGrid.click();
        break;

      case 'p':
      case 'P':
        if (e.ctrlKey || e.metaKey) {
          // allow native print
        } else {
          window.print();
        }
        break;

      default:
        // Numeric keys 1-9 for quick jump
        if (e.key >= '1' && e.key <= '9') {
          const target = parseInt(e.key, 10) - 1;
          if (target < totalSlides) {
            scrollToSlide(target);
          }
        }
        break;
    }
  });

  // Initial trigger & geometry calculation
  updateSlideScale();
  setTimeout(updateSlideScale, 60);
  goToSlide(0);
  buildGridThumbnails();
});
