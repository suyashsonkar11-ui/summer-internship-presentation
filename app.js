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
      heading: "Slide 3: Organisation Profile — SECL",
      speech: "“Is slide mein SECL ka updated organisational profile aur operational scale explain kiya gaya hai. SECL 1985 mein establish hui thi aur Coal India Limited ki premier Miniratna Category-I subsidiary hai, jiska corporate headquarters Bilaspur mein hai. FY 2025–26 mein SECL ka raw coal production 176.28 Million Tonnes raha, aur 31 March 2025 tak total 57 operating mines hain jisme 38 underground aur 19 opencast mines shamil hain across 13 operating areas. Iske alawa 1 April 2024 ke anusar SECL ke paas 92,240.65 Million Tonnes ka massive coal reserve base hai, jisme Gevra aur Dipka jaise Asia ke mega opencast pits aate hain. HR perspective se, large-scale mining safety ke liye technical employees ki DGMS competency certifications aur executive cadres ki structured public sector governance ek crucial analytical balance demand karti hai.”",
      points: [
        "Corporate milestones: Established 1985, Bilaspur headquarters, Miniratna Category-I, Coal India Limited subsidiary.",
        "Operational scale: 176.28 MT coal production (FY 2025–26), 57 operating mines (38 UG / 19 OC) as of 31 March 2025 across 13 areas.",
        "Coal reserves & assets: 92,240.65 MT coal reserves (as of 1 April 2024), featuring Gevra & Dipka mega opencast pits.",
        "HR analytical observation: Dual governance balancing technical DGMS safety certifications with public sector service rules."
      ],
      estTime: "45s"
    },
    4: {
      heading: "Slide 4: Departmental Exposure & Rotation — Point-to-Point Script",
      speech: "“Departmental Exposure & Rotation — Point-to-Point Script:\n\n1. EE — Employee Administration (7 Days):\n• Transfer Documentation: Employees ke transfer papers check karna.\nExample: Transfer order aur related documents verify karna.\n• Document Arrangement: Service documents ko systematic order mein rakhna.\nExample: Employee ki file mein records sequence se maintain karna.\n• Record Movement: Files ki movement aur continuity track karna.\nExample: File kis department mein bheji gayi, uska record rakhna.\n\n2. Manpower — Workforce Planning Cell (7 Days):\n• Recruitment: Vacancies aur sanctioned posts se related cases process karna.\nExample: Approved vacancy ke against recruitment requirement check karna.\n• Promotion: Eligibility aur internal progression lists check karna.\nExample: Promotion ke liye employee ki eligibility verify karna.\n• Landowner Employment: State R&R policy ke according employment claims verify karna.\nExample: Land acquisition se related employment claim ke documents check karna.\n• Compassionate Appointment: NCWA ke provisions ke according eligible cases process karna.\nExample: Employee ki death ke baad eligible dependent ke appointment case ki jaanch.\n• Land/Lease Matters: Land acquisition, compensation aur lease documents review karna.\nExample: Land compensation se related records verify karna.\n\n3. IR — Industrial Relations (7 Days):\n• Employee–Management Relations: Management meetings aur union discussions ko samajhna.\nExample: Employee representatives aur management ke beech meeting.\n• Workplace Communication: Grievance redressal aur welfare procedures ko samajhna.\nExample: Employee ki workplace complaint ko resolve karne ki process.\n\n4. HRD — Human Resource Development (9 Days):\n• Training: Technical aur managerial training programmes ko samajhna.\nExample: Employees ke liye technical skills training.\n• Induction: Naye employees ko organization aur rules se introduce karna.\nExample: New joinee ko company policies aur safety rules batana.\n• Employee Development: Skills, capability aur safety standards improve karna.\nExample: DGMS safety requirements ke according training.”",
      points: [
        "1. EE (7 Days): Transfer documentation, document arrangement, aur file movement continuity track karna.",
        "2. Manpower (7 Days): Recruitment cases, internal promotions, land-loser R&R claims, NCWA compassionate appointments, land/lease matters.",
        "3. IR (7 Days): Employee-management relations, union dialogue, grievance redressal aur Mines Act 1952 statutory welfare.",
        "4. HRD (9 Days): Technical & managerial training, induction for new joinees at MDI, DGMS safety capability development.",
        "Key Takeaway: 30-day rotation provided practical exposure across all 4 integrated HR departments at SECL Bilaspur."
      ],
      estTime: "1m 15s"
    },
    5: {
      heading: "Slide 5: Recruitment & Selection Process — Point-to-Point Script",
      speech: "“Recruitment & Selection Process — Point-to-Point Script:\n\n1. Manpower Requirement:\nSabse pehle organization decide karti hai ki kitne employees chahiye.\nExample: SECL ki kisi mine mein 10 naye workers ki zaroorat hai.\n\n2. Job Analysis:\nIsmein job ki duties, responsibilities aur working conditions identify ki jaati hain.\nExample: Mining supervisor ko workers aur mining operations supervise karne honge.\n\n3. Job Specification:\nIsmein candidate ki required qualification, skills aur experience decide hote hain.\nExample: Mining Engineer ke liye relevant engineering degree aur required certification.\n\n4. Recruitment:\nVacancy ko newspapers, employment news aur official portals par advertise kiya jaata hai.\nExample: SECL apni vacancy ka notification publish karti hai.\n\n5. Screening:\nApplications check karke eligible candidates ko shortlist kiya jaata hai.\nExample: Required qualification aur eligibility meet karne wale candidates ko next stage ke liye select karna.\n\n6. Selection:\nShortlisted candidates ka test, interview aur medical examination, applicable recruitment rules ke according hota hai.\nExample: Candidate ka CBT aur required medical fitness assessment.\n\n7. Appointment & Joining:\nSelected candidate ko appointment order diya jaata hai aur joining formalities complete hoti hain.\nExample: Candidate apne documents submit karke duty join karta hai.\n\n8. Employee Administration:\nJoining ke baad employee ke service records aur documents maintain kiye jaate hain.\nExample: Employee ki personal file aur service book maintain karna.\n\n9. Induction & Development:\nNaye employee ko organization ke rules, safety procedures aur job-related training di jaati hai.\nExample: Mine mein joining se pehle required safety training dena.\n\nSide wale 2 boxes:\n• Job Analysis (About the Job): Job analysis batata hai ki job mein kya kaam karna hai, kya responsibilities hain aur working conditions kaisi hain.\n• Job Specification (About the Person): Job specification batata hai ki us job ke liye candidate ki qualification, skills aur physical fitness requirements kya hain.\nExample: Job analysis = Mining Engineer ka kaam kya hai? Job specification = Mining Engineer banne ke liye candidate ko kya qualifications chahiye?\n\nBottom box:\n• Medical Fitness Requirement: Mining jobs mein safety bahut important hai. Isliye applicable rules ke according candidate ko joining se pehle required medical fitness examination pass karna hota hai.”",
      points: [
        "1. Manpower Requirement: Sabse pehle decide hota hai kitne employees chahiye (Example: SECL mine mein 10 naye workers).",
        "2. Job Analysis: Duties, responsibilities aur working conditions identify karna (Example: Mining supervisor operations).",
        "3. Job Specification: Required qualification, skills aur experience (Example: Mining Engineer degree & certificates).",
        "4. Recruitment: Newspapers, Employment News aur official portals par notification advertise karna.",
        "5. Screening: Applications check karke eligible candidates ko shortlist karna.",
        "6. Selection: Shortlisted candidates ka CBT, interview aur statutory medical assessment.",
        "7. Appointment & Joining: Appointment order issue karna aur document joining formalities complete karna.",
        "8. Employee Administration: Personal file aur service book records maintain karna.",
        "9. Induction & Development: Organization rules, safety procedures aur job-related training dena.",
        "Side Boxes: Job Analysis (About the Job) vs Job Specification (About the Person).",
        "Bottom Box: Mines Rules 1955 ke under compulsory Initial Medical Examination (IME) fitness pass karna."
      ],
      estTime: "1m 15s"
    },
    6: {
      heading: "Slide 6: Manpower Planning & Recruitment Connection",
      speech: "“Manpower planning meri study ka bohot important part hai. Iska basic purpose ye samajhna hai ki organisation ko kitne employees chahiye aur kis type ki skills required hain. Simple formula hai: Required Workforce minus Available Workforce equals Manpower Gap. Agar gap positive hai, toh recruitment ki zaroorat hoti hai. SECL mein different intake routes hote hain: Open MT exam through CIL, internal departmental promotions, land-loser employment under rehabilitation policy, aur compassionate appointment under NCWA Clause 9.3.0. Yahan se mujhe clear hua ki recruitment actually manpower planning ki demand se start hota hai.”",
      points: [
        "4 core questions: How many? What skills? When needed? Where placed?",
        "Formula: Required Workforce − Available Workforce = Manpower Gap.",
        "Core upstream principle: Recruitment is strictly demand-driven and authorized by approved manpower limits.",
        "SECL intake channels: CIL open competitive exam, internal promotions, land acquisition R&R, NCWA 9.3.0 compassionate cases."
      ],
      estTime: "55s"
    },
    7: {
      heading: "Slide 7: Internship Work & Practical Learning",
      speech: "“Is slide mein meri practical internship activities aur operational desk exposure ka summary hai. EE department mein maine dekha ki executive service records, transfer orders aur joining reports kitni accuracy ke sath maintain kiye jate hain. Manpower department mein sanctioned post limits ke according vacancies evaluate karna, land-loser rehabilitation cases aur compassionate appointments ki verification observe ki. IR department mein Joint Consultative Committees aur trade union correspondence samajhne ko mila. Aur HRD mein Management Trainees ke induction aur safety training modules dekhe. Is real exposure se public sector HR governance aur accurate documentation ki importance bohot clear hui.”",
      points: [
        "Practical Learning: Documentation & records, Manpower casework, Employee relations, Training & development.",
        "Core takeaway: Public sector HR decisions depend heavily on accurate records, official approvals, and clear statutory rules."
      ],
      estTime: "45s"
    },
    8: {
      heading: "Slide 8: Challenges & Key Findings",
      speech: "“Challenges — Mujhe kya difficulties aayi?\n\n1. Limited Internship Duration: Internship sirf 30 days ki thi, isliye har HR department ko detail mein samajhne ka time limited tha.\n2. Different Departmental Processes: Har department ka kaam aur working process alag tha, isliye sabhi processes ko samajhna ek challenge tha.\n3. Confidentiality of HR Records: Employees ke personal records confidential hote hain, isliye un sabhi records ko access karna possible nahi tha.\n4. Limited Access to Recruitment Statistics: Internal recruitment ka complete data available nahi tha, isliye recruitment statistics ka detailed analysis nahi kar paya.\n\nKey Findings — Maine kya seekha?\n\n1. Recruitment is Connected with Manpower Planning: Hiring se pehle organization ko pata hona chahiye ki kitne employees ki zarurat hai.\n2. Recruitment and Selection are Different: Recruitment mein candidates ko apply karne ke liye attract kiya jata hai, jabki selection mein suitable candidate choose kiya jata hai.\n3. HR Functions Depend on Coordination: HR ke different departments ko milkar kaam karna padta hai, tabhi work smoothly hota hai.\n4. Employee Administration Continues After Selection: Candidate select hone ke baad bhi joining formalities aur employee records maintain karne padte hain.\n5. Training Supports Employee Development: Training se employees ko apna kaam samajhne aur skills improve karne mein help milti hai.\n\nPractical Example:\nAgar SECL mein kisi post ke liye employee hire hota hai, toh pehle manpower requirement identify hoti hai, phir recruitment aur selection hota. Selection ke baad joining formalities complete hoti hain aur employee ko training di ja sakti hai.\n\nConclusion:\nOverall, meri internship se maine seekha ki effective HR management ke liye proper planning, coordination, documentation aur employee training bahut important hain.”",
      points: [
        "Challenges: 1. Limited Internship Duration (30 days), 2. Different Departmental Processes, 3. Confidentiality of HR Records, 4. Limited Access to Recruitment Statistics.",
        "Key Findings: 1. Recruitment Connected with Manpower Planning, 2. Recruitment & Selection are Different, 3. HR Coordination, 4. Post-Selection Administration, 5. Training.",
        "Practical Example: SECL post hiring: Manpower requirement → Recruitment & Selection → Joining formalities → Employee training.",
        "Conclusion: Proper planning, coordination, documentation aur employee training effective HR management ke liye essential hain."
      ],
      estTime: "55s"
    },
    9: {
      heading: "Slide 9: Executive Conclusion",
      speech: "“Meri SECL mein summer internship ne mujhe Recruitment, Selection, Manpower Planning aur other HR functions ko practically samajhne mein help ki. Departmental exposure ke through maine documentation, employee relations, employment-related cases aur training activities ke baare mein seekha. Is internship ne meri academic knowledge ko practical HR activities se connect kiya aur Human Resource Management ki understanding ko improve kiya.”",
      points: [
        "Practical HR Understanding: Recruitment, Selection, Manpower Planning aur other HR functions ko practically samjha.",
        "Departmental Exposure: Documentation, employee relations, casework aur training activities seekhi.",
        "Academic & Real-World Link: Academic concepts ko practical HR ground activities se connect karke HRM understanding improve ki."
      ],
      estTime: "30s"
    },
    10: {
      heading: "Slide 10: Thank You & Discussion",
      speech: "“Thank you everyone for your time and kind attention. I express my sincere gratitude to my faculty guides at Guru Ghasidas Vishwavidyalaya, Bilaspur, and the officers and mentors at SECL Bilaspur for their invaluable guidance throughout my summer internship. I would now be delighted to answer any questions and invite discussion on the study.”",
      points: [
        "Acknowledge and thank the evaluators, faculty members, and audience.",
        "Express gratitude to GGU Bilaspur and SECL Bilaspur mentors.",
        "Open the session for questions, feedback, and discussion."
      ],
      estTime: "25s"
    }
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
  const btnGoHome = document.getElementById('btnGoHome');
  const btnFooterHome = document.getElementById('btnFooterHome');
  const headerBrandBadge = document.getElementById('headerBrandBadge');
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
  window.goToSlide = goToSlide;

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
    const noteData = speakerNotesData[slideNum];

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
  // =========================================================================
  // THEME SWITCHER WITH LOCALSTORAGE PERSISTENCE
  // =========================================================================
  const THEME_STORAGE_KEY = 'secl_presentation_theme';
  const VALID_THEMES = ['crimson-glow', 'blue-corporate', 'white-monochrome'];

  function applyTheme(themeName) {
    if (!VALID_THEMES.includes(themeName)) {
      themeName = 'crimson-glow';
    }
    document.documentElement.setAttribute('data-theme', themeName);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeName);
    } catch (e) {
      console.warn('LocalStorage unavailable for theme persistence', e);
    }

    themeBtns.forEach(btn => {
      const btnTheme = btn.getAttribute('data-set-theme');
      const isActive = btnTheme === themeName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });
  }

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-set-theme');
      applyTheme(theme);
    });
  });

  // Restore saved theme on load (default to 'white-monochrome' matching design reference)
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme && VALID_THEMES.includes(savedTheme)) {
      applyTheme(savedTheme);
    } else {
      applyTheme('white-monochrome');
    }
  } catch (e) {
    applyTheme('white-monochrome');
  }

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

  if (btnGoHome) {
    btnGoHome.addEventListener('click', () => scrollToSlide(0));
  }
  if (btnFooterHome) {
    btnFooterHome.addEventListener('click', () => scrollToSlide(0));
  }
  if (headerBrandBadge) {
    headerBrandBadge.style.cursor = 'pointer';
    headerBrandBadge.addEventListener('click', () => scrollToSlide(0));
    headerBrandBadge.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        scrollToSlide(0);
      }
    });
  }

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
      case 'h':
      case 'H':
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
        // Numeric keys 1-9 and 0 for quick jump
        if (e.key === '0') {
          if (totalSlides >= 10) {
            scrollToSlide(9);
          }
        } else if (e.key >= '1' && e.key <= '9') {
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
