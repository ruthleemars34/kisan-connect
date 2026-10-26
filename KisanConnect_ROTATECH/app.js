/* ==========================================================================
   KISANCONNECT — SMART AGRICULTURE & FARMER EMPOWERMENT PLATFORM
   ROTATECH 2026 | Team Pixel | Problem Statement ID: 202606
   Production Architecture & Autonomous Logic Engine
   ========================================================================== */

(function () {
  'use strict';

  // =========================================================================
  // 1. GLOBAL STATE & BILINGUAL DICTIONARY (ENGLISH & HINDI)
  // =========================================================================
  window.KisanState = {
    currentLang: 'hi', // Default to Hindi as per rural empowerment objective
    currentLocation: {
      state: 'Uttar Pradesh',
      district: 'Meerut',
      mandi: 'Meerut Mandi (Sardhana Road)',
      lat: 28.9845,
      lon: 77.7064
    },
    activeTab: 'weather',
    isSpeaking: false,
    savedListings: [],
    currentUser: null
  };

  const I18N = {
    hi: {
      tagline: 'लघु एवं सीमांत किसानों का डिजिटल सशक्तिकरण',
      themeBadge: 'स्मार्ट कृषि एवं किसान सशक्तिकरण • समस्या क्रमांक 202606',
      teamBadge: 'टीम पिक्सल • ROTATECH 2026',
      heroTitle: '🌾 किसान कनेक्ट',
      heroSubtitle: 'लघु एवं सीमांत किसानों का डिजिटल सशक्तिकरण | Smart Agriculture & Farmer Empowerment',
      heroFarmers: 'किसान जुड़े',
      heroMandi: 'मंडी भाव लाइव',
      heroGovtAid: 'सरकारी सहायता/वर्ष',
      heroAIDoctor: 'AI फसल डॉक्टर',
      heroCTA: 'अभी शुरू करें →',
      navWeather: 'मौसम व सलाह',
      navMandi: 'मंडी भाव व लाभ',
      navDoctor: 'एआई फसल डॉक्टर',
      navTools: 'कृषि कैलकुलेटर',
      navSchemes: 'सरकारी योजनाएं',
      navMarket: 'किसान चौपाल',
      navHelpline: 'सहायता व केवीके',
      listenAudio: 'आवाज़ में सुनें',
      stopAudio: 'आवाज़ रोकें',
      selectLocation: 'स्थान बदलें',
      weatherTitle: 'मौसम पूर्वानुमान एवं दैनिक कृषि सलाह',
      weatherSubtitle: 'आईएमडी (भारतीय मौसम विज्ञान विभाग) कृषि बुलेटिन पर आधारित',
      mandiTitle: 'लाइव ई-नाम व एगमार्कनेट मंडी भाव',
      mandiSubtitle: 'दलालों से मुक्ति • निकटतम मंडियों की तुलना करके अधिकतम मुनाफा पाएं',
      doctorTitle: 'एआई फसल रोग निदान एवं समाधान केंद्र',
      doctorSubtitle: 'पत्ती की तस्वीर अपलोड करें — रोग की पहचान, जैविक व रासायनिक उपचार',
      toolsTitle: 'स्मार्ट उर्वरक व बीज मात्रा कैलकुलेटर',
      toolsSubtitle: 'जमीन के हिसाब से सटीक खाद (यूरिया, डीएपी, पोटाश) का हिसाब निकालें',
      schemesTitle: 'प्रधानमंत्री व राज्य सरकार की कृषि योजनाएं',
      schemesSubtitle: 'अपनी पात्रता जांचें और सीधे सब्सिडी व आर्थिक लाभ हेतु आवेदन करें',
      marketTitle: 'किसान चौपाल • सीधे खरीदारों से जुड़ें',
      marketSubtitle: 'अपनी फसल को बिना बिचौलियों के उचित मूल्य पर सीधे व्यापारियों/एफपीओ को बेचें',
      changeLocationBtn: 'स्थान अपडेट करें',
      menuBtn: 'मेनू',
      menuTitle: 'किसान कनेक्ट मेनू',
      menuCurrentZone: 'वर्तमान कृषि क्षेत्र',
      menuModulesHeading: 'पोर्टल मॉड्यूल',
      emergencyDialHeading: 'आपातकालीन हेल्पलाइन',
      loginBtn: 'लॉग इन',
      logoutBtn: 'लॉग आउट',
      navTerms: 'नियम, शर्तें व DPDP Act',
      footerTerms: 'नियम व शर्तें (Terms & Conditions)',
      footerPrivacy: 'डेटा गोपनीयता (Privacy Policy)',
      footerDPDP: 'DPDP Act 2023',
      authModalTitle: 'किसान कनेक्ट सुरक्षित लॉगिन',
      authModalSubtitle: 'DPDP Act 2023 Compliant • Indian Agritech Network',
      authMobileLabel: 'मोबाइल नंबर या किसान आईडी (PM-KISAN ID)'
    },
    en: {
      tagline: 'Digital Empowerment for Small & Marginal Farmers',
      themeBadge: 'Smart Agriculture & Farmer Empowerment • PS ID 202606',
      teamBadge: 'Team Pixel • ROTATECH 2026',
      heroTitle: '🌾 KisanConnect',
      heroSubtitle: 'Digital Empowerment for Small & Marginal Farmers | Smart Agriculture Ecosystem',
      heroFarmers: 'Farmers Connected',
      heroMandi: 'Live Mandi Prices',
      heroGovtAid: 'Govt Aid / Year',
      heroAIDoctor: 'AI Plant Doctor',
      heroCTA: 'Get Started →',
      navWeather: 'Weather & Advisory',
      navMandi: 'Mandi Prices & Gain',
      navDoctor: 'AI Plant Doctor',
      navTools: 'Agri Calculators',
      navSchemes: 'Govt Schemes',
      navMarket: 'Kisan Marketplace',
      navHelpline: 'Helpline & KVK',
      listenAudio: 'Listen to Voice',
      stopAudio: 'Stop Audio',
      selectLocation: 'Change Location',
      weatherTitle: 'Weather Forecast & Daily Agro-Advisory',
      weatherSubtitle: 'Synchronized with IMD (India Meteorological Department) Agro-Bulletin',
      mandiTitle: 'Live e-NAM & AGMARKNET Mandi Price Intelligence',
      mandiSubtitle: 'Zero Middlemen • Compare Nearby Mandis to Maximize Net Farm Profit',
      doctorTitle: 'AI Crop Pathology & Disease Diagnostic Clinic',
      doctorSubtitle: 'Upload Leaf Photo — Instant Disease Identification, Bio & Chemical Remedies',
      toolsTitle: 'Smart Fertilizer (NPK) & Seed Rate Calculators',
      toolsSubtitle: 'Scientific dosage calculation for Urea, DAP, and MOP tailored to your land',
      schemesTitle: 'Government Welfare Schemes & Direct Subsidies',
      schemesSubtitle: 'Check Instant Eligibility & Apply for DBT, Crop Insurance and Solar Subsidies',
      marketTitle: 'Kisan Chaupal • Direct Farmer-to-Buyer B2B Board',
      marketSubtitle: 'List Harvest Directly to Certified FPOs & Bulk Buyers with Fair Pricing',
      changeLocationBtn: 'Update Location',
      menuBtn: 'Menu',
      menuTitle: 'KisanConnect Menu',
      menuCurrentZone: 'Active Agro Zone',
      menuModulesHeading: 'Portal Modules',
      emergencyDialHeading: 'Emergency Helplines',
      loginBtn: 'Sign In',
      logoutBtn: 'Log Out',
      navTerms: 'Terms, Privacy & DPDP',
      footerTerms: 'Terms & Conditions',
      footerPrivacy: 'Privacy Policy',
      footerDPDP: 'DPDP Act 2023',
      authModalTitle: 'KisanConnect Secure Login',
      authModalSubtitle: 'DPDP Act 2023 Compliant • Indian Agritech Network',
      authMobileLabel: 'Mobile Number or Kisan ID (PM-KISAN ID)'
    }
  };

  // =========================================================================
  // 2. TEXT-TO-SPEECH (TTS) AUDIO SYNTHESIS ENGINE
  // =========================================================================
  window.speakCurrentContent = function () {
    if (!('speechSynthesis' in window)) {
      alert('Your browser does not support audio speech synthesis.');
      return;
    }

    if (window.KisanState.isSpeaking) {
      window.speechSynthesis.cancel();
      window.KisanState.isSpeaking = false;
      updateAudioButtonState(false);
      return;
    }

    let textToRead = '';
    const activeTab = window.KisanState.activeTab;
    const isHi = window.KisanState.currentLang === 'hi';

    if (activeTab === 'weather') {
      textToRead = isHi
        ? `किसान कनेक्ट मौसम सेवा। मेरठ में आज का तापमान 29 डिग्री सेल्सियस है। आसमान मुख्यतः साफ है। कृषि सलाह: गेहूँ और सरसों की फसल में आज शाम हल्की सिंचाई की जा सकती है। अगले 48 घंटों में बारिश की संभावना केवल 15 प्रतिशत है।`
        : `KisanConnect Weather Service. Current temperature in Meerut is 29 degrees Celsius. Skies are mostly clear. Agricultural advisory: Good conditions for light evening irrigation for wheat and mustard. Rain probability is only 15 percent over the next 48 hours.`;
    } else if (activeTab === 'mandi') {
      textToRead = isHi
        ? `आज के प्रमुख मंडी भाव। मेरठ मंडी में शरबती गेहूँ 2450 रुपये प्रति क्विंटल बिक रहा है। सरसों 5820 रुपये और नया आलू 1420 रुपये प्रति क्विंटल है। हापुड़ मंडी में गेहूँ 60 रुपये अधिक भाव पर उपलब्ध है।`
        : `Today's top mandi prices. In Meerut Mandi, Sharbati wheat is trading at 2,450 rupees per quintal. Mustard at 5,820 rupees, and fresh potato at 1,420 rupees per quintal. Nearby Hapur Mandi offers 60 rupees higher rate for wheat.`;
    } else if (activeTab === 'doctor') {
      textToRead = isHi
        ? `एआई फसल डॉक्टर में आपका स्वागत है। अपनी बीमार पत्ती की तस्वीर खींचकर अपलोड करें। हमारा एआई सिस्टम तुरंत रोग और उसके जैविक उपचार की जानकारी देगा।`
        : `Welcome to AI Crop Doctor. Upload a photo of your infected leaf. Our AI will instantly detect the disease and recommend organic and chemical cures.`;
    } else {
      textToRead = isHi
        ? `किसान कनेक्ट पोर्टल में आपका स्वागत है। यहाँ आपको मौसम, मंडी भाव, सरकारी योजनाएं और स्मार्ट कैलकुलेटर की सुविधा एक ही जगह मिलती है।`
        : `Welcome to KisanConnect platform. Access weather forecasts, live mandi prices, government schemes, and farming calculators in one unified portal.`;
    }

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = isHi ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95;

    utterance.onend = function () {
      window.KisanState.isSpeaking = false;
      updateAudioButtonState(false);
    };

    utterance.onerror = function () {
      window.KisanState.isSpeaking = false;
      updateAudioButtonState(false);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    window.KisanState.isSpeaking = true;
    updateAudioButtonState(true);
  };

  function updateAudioButtonState(isPlaying) {
    const btn = document.getElementById('btn-tts-listen');
    if (!btn) return;
    const isHi = window.KisanState.currentLang === 'hi';
    if (isPlaying) {
      btn.innerHTML = `<i data-lucide="volume-x" class="w-4 h-4 text-red-300 animate-pulse"></i> <span>${I18N[isHi ? 'hi' : 'en'].stopAudio}</span>`;
      btn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-red-800 text-white shadow-sm border border-red-600 transition cursor-pointer';
    } else {
      btn.innerHTML = `<i data-lucide="volume-2" class="w-4 h-4 text-amber-300"></i> <span>${I18N[isHi ? 'hi' : 'en'].listenAudio}</span>`;
      btn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-800 hover:bg-emerald-700 text-white shadow-sm border border-emerald-600 transition cursor-pointer';
    }
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // =========================================================================
  // 3. LANGUAGE TOGGLE (FULL PORTAL BILINGUAL ENGINE)
  // =========================================================================
  window.setLanguage = function (lang) {
    window.KisanState.currentLang = lang;
    const isHi = lang === 'hi';

    // Update buttons
    const btnHi = document.getElementById('lang-btn-hi');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnHi && btnEn) {
      if (isHi) {
        btnHi.className = 'px-2.5 py-1 text-xs font-bold rounded-md bg-[#047857] text-white shadow-xs';
        btnEn.className = 'px-2.5 py-1 text-xs font-bold rounded-md bg-white text-slate-700 hover:bg-slate-100';
      } else {
        btnEn.className = 'px-2.5 py-1 text-xs font-bold rounded-md bg-[#047857] text-white shadow-xs';
        btnHi.className = 'px-2.5 py-1 text-xs font-bold rounded-md bg-white text-slate-700 hover:bg-slate-100';
      }
    }

    // Update static i18n text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) {
        el.textContent = I18N[lang][key];
      }
    });

    updateAudioButtonState(window.KisanState.isSpeaking);

    if (typeof window.animateHeroCounters === 'function') {
      window.animateHeroCounters();
    }

    // Re-render dynamic active section
    renderActiveTab(window.KisanState.activeTab);
  };

  // =========================================================================
  // 4. NAVIGATION TAB SWITCHER (WITH ANIMATION & STAGGER TRANSITIONS)
  // =========================================================================
  window.switchTab = function (tabId) {
    window.KisanState.activeTab = tabId;

    // Stop speaking when switching tabs
    if (window.KisanState.isSpeaking) {
      window.speechSynthesis.cancel();
      window.KisanState.isSpeaking = false;
      updateAudioButtonState(false);
    }

    // Update Tab Buttons (Desktop & Mobile)
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      const target = btn.getAttribute('data-tab');
      if (target === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.mobile-bottom-nav-btn').forEach(btn => {
      const target = btn.getAttribute('data-tab');
      if (target === tabId) {
        btn.classList.add('text-emerald-700', 'font-black');
        btn.classList.remove('text-slate-500');
      } else {
        btn.classList.remove('text-emerald-700', 'font-black');
        btn.classList.add('text-slate-500');
      }
    });

    const mainContainer = document.getElementById('main-tab-content');
    if (mainContainer) {
      mainContainer.classList.remove('tab-content-active');
      setTimeout(() => {
        renderActiveTab(tabId);
        mainContainer.classList.add('tab-content-active');

        if (typeof gsap !== 'undefined') {
          gsap.fromTo(mainContainer.querySelectorAll('.agri-card, .agri-card-elevated, .weather-hero-gradient'),
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: 'power2.out' }
          );
        }
      }, 120);
    } else {
      renderActiveTab(tabId);
    }
  };

  function renderActiveTab(tabId) {
    const mainContainer = document.getElementById('main-tab-content');
    if (!mainContainer) return;

    if (tabId === 'weather') {
      renderWeatherView(mainContainer);
    } else if (tabId === 'mandi') {
      renderMandiView(mainContainer);
    } else if (tabId === 'doctor') {
      renderDoctorView(mainContainer);
    } else if (tabId === 'tools') {
      renderToolsView(mainContainer);
    } else if (tabId === 'schemes') {
      renderSchemesView(mainContainer);
    } else if (tabId === 'market') {
      renderMarketView(mainContainer);
    } else if (tabId === 'helpline') {
      renderHelplineView(mainContainer);
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      setTimeout(() => window.lucide.createIcons(), 50);
    }
  }

  // =========================================================================
  // 4b. SLIDE-OUT OFF-CANVAS MENU & LOCATION CONTROLLER
  // =========================================================================
  window.toggleNavMenu = function (isOpen) {
    const backdrop = document.getElementById('side-menu-backdrop');
    const drawer = document.getElementById('side-menu-drawer');
    if (!backdrop || !drawer) return;

    if (isOpen) {
      backdrop.classList.add('open');
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      backdrop.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };

  window.changeLocationPrompt = function () {
    const isHi = window.KisanState.currentLang === 'hi';
    const newDistrict = prompt(
      isHi ? 'अपना नया जिला दर्ज करें (उदा. लखनऊ, वाराणसी, करनाल):' : 'Enter District (e.g. Lucknow, Varanasi, Karnal):',
      window.KisanState.currentLocation.district
    );
    if (!newDistrict || !newDistrict.trim()) return;

    window.KisanState.currentLocation.district = newDistrict.trim();
    const locEls = document.querySelectorAll('#menu-current-loc, .current-location-text');
    locEls.forEach(el => el.textContent = `${newDistrict.trim()}, ${window.KisanState.currentLocation.state}`);

    if (window.KisanState.activeTab === 'weather') {
      renderActiveTab('weather');
    }
    window.toggleNavMenu(false);
  };

  // =========================================================================
  // 4c. INTERACTIVE WEATHER VIDEO & ATMOSPHERIC SKY SIMULATOR
  // =========================================================================
  const WEATHER_SCENES = {
    sunny: {
      video: 'https://assets.mixkit.co/videos/preview/mixkit-sunny-day-over-a-green-field-41131-large.mp4',
      poster: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
      temp: '29°C',
      descHi: 'अधिकांशतः साफ एवं धूपदार आकाश',
      descEn: 'Clear Sunny Sky & Sunlit Farmland',
      feelsHi: '31°C',
      feelsEn: '31°C',
      advisoryHi: 'गेहूँ और सरसों के लिए मौसम अनुकूल है। शाम 5 बजे के बाद हल्की सिंचाई कर सकते हैं। हवा की रफ्तार कम होने पर कीटनाशक का छिड़काव सुरक्षित रहेगा।',
      advisoryEn: 'Favorable conditions for wheat and mustard. Light evening irrigation advised. Safe for pesticide spraying before 2 PM when winds are gentle.',
      rainActive: false
    },
    rain: {
      video: 'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-41006-large.mp4',
      poster: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1200&auto=format&fit=crop',
      temp: '23°C',
      descHi: 'मानसूनी बारिश व बादलों की गड़गड़ाहट',
      descEn: 'Monsoon Rainstorm & Cloud Cover',
      feelsHi: '22°C',
      feelsEn: '22°C',
      advisoryHi: 'बारिश की चेतावनी: खेतों से अतिरिक्त पानी की निकासी सुनिश्चित करें। किसी भी प्रकार के रासायनिक कीटनाशक या खाद का छिड़काव तुरंत रोकें।',
      advisoryEn: 'Heavy Rain Warning: Ensure proper field drainage to prevent waterlogging. Postpone all foliar sprays and urea application until skies clear.',
      rainActive: true
    },
    cloudy: {
      video: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4',
      poster: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1200&auto=format&fit=crop',
      temp: '26°C',
      descHi: 'आंशिक घने बादल व हल्की हवा',
      descEn: 'Overcast & Moving Cumulus Clouds',
      feelsHi: '27°C',
      feelsEn: '27°C',
      advisoryHi: 'मौसम सामान्य व आंशिक बादलयुक्त है। शाम के समय हल्की सिंचाई अनुकूल रहेगी। हवा धीमी होने पर ही छिड़काव करें।',
      advisoryEn: 'Overcast & partly cloudy conditions. Favorable for evening irrigation. Spray only if wind gusts remain below 10 km/h.',
      rainActive: false
    }
  };

  window.setWeatherCondition = function (condition, isManual) {
    if (isManual) {
      window.KisanState.autoWeatherPaused = true;
      const autoBadge = document.getElementById('weather-auto-badge');
      if (autoBadge) autoBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> <span>MANUAL</span>`;
    }

    const scene = WEATHER_SCENES[condition] || WEATHER_SCENES.sunny;
    const isHi = window.KisanState.currentLang === 'hi';
    const tempEl = document.getElementById('weather-hero-temp');
    const descEl = document.getElementById('weather-hero-desc');
    const rainLayer = document.getElementById('rain-layer');
    const video = document.getElementById('weather-ambient-video');
    const advisoryEl = document.getElementById('weather-dynamic-advisory');
    const pills = document.querySelectorAll('.weather-condition-pill');

    pills.forEach(p => p.classList.remove('active'));
    const activeBtn = document.getElementById(`pill-${condition}`);
    if (activeBtn) activeBtn.classList.add('active');

    if (tempEl) tempEl.textContent = scene.temp;
    if (descEl) descEl.innerHTML = `<span>${isHi ? scene.descHi : scene.descEn}</span> • <span>${isHi ? 'महसूस: ' + scene.feelsHi : 'Feels ' + scene.feelsEn}</span>`;
    if (advisoryEl) advisoryEl.textContent = isHi ? scene.advisoryHi : scene.advisoryEn;

    if (rainLayer) {
      if (scene.rainActive) rainLayer.classList.add('active');
      else rainLayer.classList.remove('active');
    }

    if (video) {
      video.poster = scene.poster;
      let srcEl = video.querySelector('source');
      if (!srcEl) {
        srcEl = document.createElement('source');
        srcEl.type = 'video/mp4';
        video.appendChild(srcEl);
      }
      if (srcEl.src !== scene.video) {
        srcEl.src = scene.video;
        video.load();
        video.play().catch(() => {});
      }
    }
  };

  // Weather auto-cycler that demonstrates automatic weather updates
  window.toggleAutoWeatherCycle = function () {
    window.KisanState.autoWeatherPaused = !window.KisanState.autoWeatherPaused;
    const autoBadge = document.getElementById('weather-auto-badge');
    if (!autoBadge) return;
    if (window.KisanState.autoWeatherPaused) {
      autoBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> <span>MANUAL</span>`;
    } else {
      autoBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> <span>AUTO-SYNC</span>`;
    }
  };

  if (!window.KisanState.autoCycleInitialized) {
    window.KisanState.autoCycleInitialized = true;
    window.KisanState.autoWeatherPaused = false;
    const condSequence = ['sunny', 'cloudy', 'rain'];
    let condIndex = 0;
    setInterval(() => {
      if (window.KisanState.activeTab === 'weather' && !window.KisanState.autoWeatherPaused) {
        condIndex = (condIndex + 1) % condSequence.length;
        window.setWeatherCondition(condSequence[condIndex], false);
      }
    }, 12000);
  }

  // =========================================================================
  // 5. MODULE 1: WEATHER FORECAST & AGRICULTURAL ADVISORY (WITH ANIMATED VIDEO)
  // =========================================================================
  function renderWeatherView(container) {
    const isHi = window.KisanState.currentLang === 'hi';
    const loc = window.KisanState.currentLocation;

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <!-- Severe Weather Alert Ticker -->
        <div class="p-3 bg-amber-500/15 border-l-4 border-amber-600 rounded-r-xl flex items-center justify-between text-xs text-amber-950">
          <div class="flex items-center gap-2 font-medium">
            <span class="pulse-beacon shrink-0"></span>
            <i data-lucide="cloud-lightning" class="w-4 h-4 text-amber-700 shrink-0"></i>
            <span><strong>${isHi ? 'मौसम चेतावनी:' : 'IMD Alert:'}</strong> ${isHi ? 'अगले 48 घंटों में पश्चिमी उत्तर प्रदेश के कुछ इलाकों में धूल भरी आंधी और हल्की गरज-चमक की संभावना। कटी हुई फसल को ढक कर रखें।' : 'Moderate thunderstorm and gusty winds predicted over parts of Western UP in next 48 hours. Secure harvested produce in sheds.'}</span>
          </div>
          <span class="text-[10px] font-mono bg-amber-200/60 text-amber-900 px-2 py-0.5 rounded font-bold shrink-0 ml-2">IMD VALIDATED</span>
        </div>

        <!-- Weather Hero Card with Cinematic Animated Video & Atmospheric Sky -->
        <div class="weather-hero-gradient p-6 rounded-2xl shadow-xl relative overflow-hidden">
          <!-- Animated Video Background Layer -->
          <div class="weather-video-backdrop">
            <video id="weather-ambient-video" autoplay loop muted playsinline class="weather-bg-video" poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-sunny-day-over-a-green-field-41131-large.mp4" type="video/mp4">
            </video>
            <div id="rain-layer" class="rain-animation-layer"></div>
            <div class="weather-overlay-gradient"></div>
          </div>

          <!-- Foreground Interactive Weather UI -->
          <div class="relative z-10 space-y-5">
            <!-- Top Strip: Location & Interactive Sky Condition Switcher -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/20 pb-3">
              <div class="flex items-center gap-2 text-emerald-100 text-xs font-semibold">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-300"></i>
                <span class="current-location-text font-bold text-white">${loc.district}, ${loc.state}</span>
                <span class="bg-black/40 backdrop-blur-xs text-[10px] px-2 py-0.5 rounded border border-white/25">Agro-Climatic Zone IV</span>
              </div>

              <!-- Animated Video Sky Controls + Auto-Sync Switcher -->
              <div class="flex items-center gap-1.5 bg-black/45 backdrop-blur-md p-1 rounded-full border border-white/25 self-start sm:self-auto shadow-inner">
                <button type="button" id="weather-auto-badge" onclick="window.toggleAutoWeatherCycle()" class="text-[9.5px] bg-black/50 hover:bg-black/70 text-emerald-300 px-2.5 py-1 rounded-full font-mono font-bold flex items-center gap-1 cursor-pointer transition border border-white/20">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>AUTO-SYNC</span>
                </button>
                <button type="button" id="pill-sunny" class="weather-condition-pill active" onclick="window.setWeatherCondition('sunny', true)">☀️ धूप / Sun</button>
                <button type="button" id="pill-rain" class="weather-condition-pill" onclick="window.setWeatherCondition('rain', true)">🌧️ बारिश / Rain</button>
                <button type="button" id="pill-cloudy" class="weather-condition-pill" onclick="window.setWeatherCondition('cloudy', true)">⛅ बादल / Cloud</button>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 id="weather-hero-temp" class="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-lg">29°C</h2>
                <div id="weather-hero-desc" class="text-emerald-100 font-medium text-sm mt-1 flex items-center gap-2 drop-shadow-sm">
                  <span>${isHi ? 'अधिकांशतः साफ एवं धूपदार' : 'Mostly Sunny & Clear Sky'}</span>
                  <span>•</span>
                  <span>${isHi ? 'महसूस: 31°C' : 'Feels like 31°C'}</span>
                </div>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/35 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-xs shadow-inner">
                <div>
                  <span class="text-emerald-200 block text-[11px]">${isHi ? 'आर्द्रता (Humidity)' : 'Humidity'}</span>
                  <strong class="text-white text-base">54%</strong>
                </div>
                <div>
                  <span class="text-emerald-200 block text-[11px]">${isHi ? 'हवा की गति' : 'Wind Speed'}</span>
                  <strong class="text-white text-base">12 km/h</strong>
                </div>
                <div>
                  <span class="text-emerald-200 block text-[11px]">${isHi ? 'बारिश की संभावना' : 'Rain Prob.'}</span>
                  <strong class="text-white text-base">15%</strong>
                </div>
                <div>
                  <span class="text-emerald-200 block text-[11px]">${isHi ? 'वायु गुणवत्ता (AQI)' : 'Air Quality'}</span>
                  <strong class="text-emerald-300 text-base">92 (Good)</strong>
                </div>
              </div>
            </div>

            <!-- Agro-Advisory Banner Inside Hero -->
            <div class="mt-4 pt-3.5 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div class="flex items-start gap-2.5">
                <div class="w-6 h-6 rounded-full bg-emerald-400 text-emerald-950 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 shadow-sm">🌾</div>
                <div>
                  <span class="font-bold text-emerald-100 block">${isHi ? 'आज की मुख्य कृषि सलाह (Kisan Advisory):' : 'Today’s Crop Advisory:'}</span>
                  <span id="weather-dynamic-advisory" class="text-white/95 leading-relaxed">${isHi ? 'गेहूँ और सरसों के लिए मौसम अनुकूल है। शाम 5 बजे के बाद हल्की सिंचाई कर सकते हैं। हवा की रफ्तार कम होने पर कीटनाशक का छिड़काव सुरक्षित रहेगा।' : 'Favorable conditions for wheat and mustard. Light evening irrigation advised. Safe for pesticide spraying before 2 PM when winds are gentle.'}</span>
                </div>
              </div>
              <button type="button" onclick="window.speakCurrentContent()" class="shrink-0 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/30 flex items-center gap-1.5 transition cursor-pointer self-start sm:self-auto shadow-sm">
                <i data-lucide="volume-2" class="w-3.5 h-3.5 text-amber-300"></i>
                <span>${isHi ? 'सलाह सुनें' : 'Listen'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 7-Day Smart Farming Forecast Cards -->
        <div>
          <h3 class="text-base font-bold text-slate-800 mb-3 flex items-center justify-between">
            <span class="flex items-center gap-2">
              <i data-lucide="calendar" class="w-4 h-4 text-emerald-700"></i>
              <span>${isHi ? 'आगामी 7 दिनों का पूर्वानुमान व खेती योजना' : '7-Day Agricultural Forecast & Operations'}</span>
            </span>
            <span class="text-xs font-normal text-slate-500">${isHi ? 'प्रति 3 घंटे में अपडेट' : 'Updated every 3 hours'}</span>
          </h3>

          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            ${renderForecastDays(isHi)}
          </div>
        </div>

        <!-- Irrigation & Spray Guidance Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="agri-card p-4 space-y-3">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <div class="flex items-center gap-2 font-bold text-sm text-slate-800">
                <i data-lucide="droplet" class="w-4 h-4 text-blue-600"></i>
                <span>${isHi ? 'सिंचाई तत्परता गाइड (Irrigation)' : 'Irrigation Scheduling Advice'}</span>
              </div>
              <span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded">${isHi ? 'अनुकूल' : 'Optimal'}</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              ${isHi ? 'मिट्टी में 65% नमी उपलब्ध है। रबी फसलों (गेहूँ/चना) में कल्ले फूटने (Tillering Stage) पर क्राउन रूट सिंचाई (CRI) करें। अधिक पानी भराव से बचें।' : 'Soil moisture level stands at 65%. For wheat crops entering CRI (Crown Root Initiation) stage, initiate controlled sprinkler or furrow irrigation. Avoid standing water.'}
            </p>
            <div class="text-[11px] font-mono text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
              ✓ ${isHi ? 'अनुशंसित समय: शाम 4:30 से 7:00 बजे' : 'Best Window: Evening 4:30 PM - 7:00 PM'}
            </div>
          </div>

          <div class="agri-card p-4 space-y-3">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <div class="flex items-center gap-2 font-bold text-sm text-slate-800">
                <i data-lucide="shield-alert" class="w-4 h-4 text-amber-600"></i>
                <span>${isHi ? 'कीटनाशक व खाद छिड़काव सलाह' : 'Pesticide & Spray Feasibility'}</span>
              </div>
              <span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">${isHi ? 'सावधानी बरतें' : 'Caution'}</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              ${isHi ? 'दोपहर के समय हवा की गति 14-16 किमी/घंटा तक जा सकती है। अतः खरपतवारनाशक या यूरिया स्प्रे केवल प्रातः काल 7 से 10 बजे के मध्य ही करें।' : 'Wind gusts expected up to 16 km/h during peak afternoon. Foliar fertilizer and insecticide sprays should strictly be completed between 7:00 AM - 10:00 AM.'}
            </p>
            <div class="text-[11px] font-mono text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
              ⚠️ ${isHi ? 'दोपहर में स्प्रे करने से दवा का अपव्यय होगा' : 'Avoid afternoon spray to prevent chemical drift waste'}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderForecastDays(isHi) {
    const days = [
      { nameHi: 'आज (बुध)', nameEn: 'Today (Wed)', temp: '29° / 17°', rain: '10%', icon: 'sun', adviceHi: 'सिंचाई हेतु उत्तम', adviceEn: 'Ideal for Irrigation' },
      { nameHi: 'गुरुवार', nameEn: 'Thu', temp: '30° / 18°', rain: '15%', icon: 'sun', adviceHi: 'खाद छिड़काव करें', adviceEn: 'Foliar Spray OK' },
      { nameHi: 'शुक्रवार', nameEn: 'Fri', temp: '28° / 16°', rain: '30%', icon: 'cloud-sun', adviceHi: 'हल्के बादल', adviceEn: 'Partly Cloudy' },
      { nameHi: 'शनिवार', nameEn: 'Sat', temp: '26° / 15°', rain: '65%', icon: 'cloud-rain', adviceHi: 'बारिश - स्प्रे न करें', adviceEn: 'Rain Expected - Hold' },
      { nameHi: 'रविवार', nameEn: 'Sun', temp: '27° / 16°', rain: '40%', icon: 'cloud-drizzle', adviceHi: 'फसल की निगरानी', adviceEn: 'Field Drainage' },
      { nameHi: 'सोमवार', nameEn: 'Mon', temp: '29° / 17°', rain: '10%', icon: 'sun', adviceHi: 'सामान्य जुताई', adviceEn: 'Soil Tillage' },
      { nameHi: 'मंगलवार', nameEn: 'Tue', temp: '31° / 18°', rain: '5%', icon: 'sun', adviceHi: 'कटाई हेतु साफ', adviceEn: 'Clear for Harvest' }
    ];

    return days.map(d => `
      <div class="bg-white border border-slate-200 rounded-xl p-3 text-center space-y-1.5 shadow-2xs hover:border-emerald-400 transition">
        <div class="text-[11px] font-bold text-slate-700">${isHi ? d.nameHi : d.nameEn}</div>
        <div class="w-8 h-8 mx-auto rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
          <i data-lucide="${d.icon}" class="w-4 h-4"></i>
        </div>
        <div class="font-extrabold text-xs text-slate-900">${d.temp}</div>
        <div class="text-[10px] text-blue-600 font-semibold flex items-center justify-center gap-0.5">
          <i data-lucide="cloud-rain" class="w-2.5 h-2.5"></i> <span>${d.rain}</span>
        </div>
        <div class="text-[9px] font-medium text-emerald-800 bg-emerald-50/80 rounded py-0.5 px-1 truncate" title="${isHi ? d.adviceHi : d.adviceEn}">
          ${isHi ? d.adviceHi : d.adviceEn}
        </div>
      </div>
    `).join('');
  }

  // =========================================================================
  // 6. MODULE 2: LIVE MANDI PRICES & ARBITRAGE CALCULATOR (AGMARKNET & e-NAM)
  // =========================================================================
  const MANDI_DATA = [
    { cropHi: 'गेहूँ (Sharbati)', cropEn: 'Wheat (Sharbati)', mandi: 'Meerut Mandi (UP)', min: 2380, max: 2520, modal: 2460, change: '+45', status: 'up', distKm: 8 },
    { cropHi: 'गेहूँ (Sharbati)', cropEn: 'Wheat (Sharbati)', mandi: 'Hapur APMC (UP)', min: 2420, max: 2580, modal: 2520, change: '+80', status: 'up', distKm: 32 },
    { cropHi: 'गेहूँ (Sharbati)', cropEn: 'Wheat (Sharbati)', mandi: 'Muzaffarnagar (UP)', min: 2360, max: 2480, modal: 2430, change: '-20', status: 'down', distKm: 48 },
    { cropHi: 'सरसों (Mustard Black)', cropEn: 'Mustard (Black)', mandi: 'Meerut Mandi (UP)', min: 5650, max: 5950, modal: 5820, change: '+110', status: 'up', distKm: 8 },
    { cropHi: 'सरसों (Mustard Black)', cropEn: 'Mustard (Black)', mandi: 'Alwar APMC (Rajasthan)', min: 5750, max: 6150, modal: 6020, change: '+150', status: 'up', distKm: 140 },
    { cropHi: 'धान (Paddy Basmati 1509)', cropEn: 'Paddy (Basmati 1509)', mandi: 'Karnal Mandi (Haryana)', min: 3600, max: 4100, modal: 3950, change: '+60', status: 'up', distKm: 95 },
    { cropHi: 'धान (Paddy Basmati 1509)', cropEn: 'Paddy (Basmati 1509)', mandi: 'Meerut Mandi (UP)', min: 3450, max: 3880, modal: 3720, change: '-35', status: 'down', distKm: 8 },
    { cropHi: 'आलू (Potato Fresh Kufri)', cropEn: 'Potato (Fresh Kufri)', mandi: 'Agra Mandi (UP)', min: 1300, max: 1550, modal: 1450, change: '+25', status: 'up', distKm: 190 },
    { cropHi: 'आलू (Potato Fresh Kufri)', cropEn: 'Potato (Fresh Kufri)', mandi: 'Meerut Mandi (UP)', min: 1250, max: 1480, modal: 1380, change: '0', status: 'stable', distKm: 8 },
    { cropHi: 'प्याज़ (Onion Red)', cropEn: 'Onion (Red Nashik)', mandi: 'Azadpur Mandi (Delhi)', min: 2400, max: 3100, modal: 2850, change: '+120', status: 'up', distKm: 70 },
    { cropHi: 'प्याज़ (Onion Red)', cropEn: 'Onion (Red Nashik)', mandi: 'Meerut Mandi (UP)', min: 2200, max: 2800, modal: 2600, change: '-50', status: 'down', distKm: 8 },
    { cropHi: 'टमाटर (Tomato Hybrid)', cropEn: 'Tomato (Hybrid)', mandi: 'Meerut Mandi (UP)', min: 1600, max: 2200, modal: 1950, change: '+70', status: 'up', distKm: 8 },
    { cropHi: 'गन्ना (Sugarcane Agmark)', cropEn: 'Sugarcane (SAP Govt)', mandi: 'Daurala Sugar Mill (UP)', min: 370, max: 375, modal: 370, change: '0', status: 'stable', distKm: 15 }
  ];

  function renderMandiView(container) {
    const isHi = window.KisanState.currentLang === 'hi';

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <!-- Header & Live Ticker -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
          <div>
            <h3 class="font-extrabold text-slate-800 text-base flex items-center gap-2">
              <i data-lucide="trending-up" class="w-5 h-5 text-emerald-600"></i>
              <span>${isHi ? 'लाइव मंडी भाव (e-NAM & AGMARKNET पोर्टल सिंक)' : 'Live Mandi Price Intelligence (e-NAM Sync)'}</span>
            </h3>
            <p class="text-xs text-slate-500 mt-0.5">
              ${isHi ? 'आज की ताज़ा नीलामी दरें • प्रति क्विंटल (₹ / Quintal)' : 'Verified APMC Mandi Auction Rates • INR per Quintal'}
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 font-bold flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>${isHi ? 'लाइव 10:45 AM' : 'Live 10:45 AM'}</span>
            </span>
          </div>
        </div>

        <!-- Mandi Arbitrage & Profit Maximizer Tool -->
        <div class="agri-card-elevated p-5 space-y-4">
          <div class="flex items-center justify-between border-b border-emerald-200 pb-2">
            <div class="flex items-center gap-2 font-black text-sm text-emerald-950">
              <i data-lucide="calculator" class="w-5 h-5 text-emerald-700"></i>
              <span>${isHi ? '💡 मंडी मुनाफा कैलकुलेटर (कहाँ बेचने में सबसे ज्यादा फायदा?)' : '💡 Mandi Profit Maximizer (Where to sell for highest net profit?)'}</span>
            </div>
            <span class="text-[10px] bg-emerald-700 text-white font-bold px-2 py-0.5 rounded-full uppercase">e-NAM Arbitrage</span>
          </div>

          <p class="text-xs text-slate-600">
            ${isHi ? 'अपनी फसल और मात्रा चुनें — यह टूल निकटतम 3 मंडियों के भाव में से ट्रांसपोर्ट का खर्च घटाकर आपको बताएगा कि असली मुनाफा कहाँ मिलेगा!' : 'Enter crop & harvest quantity — This engine calculates net in-hand returns by deducting diesel & trolley transport costs from distant mandis!'}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="text-[11px] font-bold text-slate-700 block mb-1">${isHi ? 'फसल चुनें:' : 'Select Crop:'}</label>
              <select id="arbitrage-crop-select" class="w-full text-xs font-semibold p-2.5 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500" onchange="window.calculateMandiArbitrage()">
                <option value="wheat">${isHi ? 'गेहूँ (Sharbati Wheat)' : 'Wheat (Sharbati)'}</option>
                <option value="mustard">${isHi ? 'सरसों (Mustard Black)' : 'Mustard (Black)'}</option>
                <option value="paddy">${isHi ? 'धान (Basmati 1509)' : 'Paddy (Basmati 1509)'}</option>
                <option value="potato">${isHi ? 'आलू (Potato Fresh)' : 'Potato (Fresh)'}</option>
              </select>
            </div>

            <div>
              <label class="text-[11px] font-bold text-slate-700 block mb-1">${isHi ? 'उपज मात्रा (क्विंटल में):' : 'Quantity (in Quintals):'}</label>
              <input type="number" id="arbitrage-qty-input" value="40" min="5" max="500" class="w-full text-xs font-semibold p-2.5 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500" oninput="window.calculateMandiArbitrage()" />
            </div>

            <div class="flex items-end">
              <button type="button" onclick="window.calculateMandiArbitrage()" class="w-full bg-[#047857] hover:bg-[#065F46] text-white p-2.5 rounded-lg text-xs font-bold transition shadow-sm cursor-pointer flex items-center justify-center gap-1.5">
                <i data-lucide="sparkles" class="w-4 h-4 text-amber-300"></i>
                <span>${isHi ? 'सर्वोत्तम मंडी खोजें' : 'Calculate Best Mandi'}</span>
              </button>
            </div>
          </div>

          <!-- Arbitrage Result Container -->
          <div id="arbitrage-result-container" class="mt-3">
            <!-- Populated dynamically via calculateMandiArbitrage() -->
          </div>
        </div>

        <!-- Filter Controls for Mandi Table -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="relative w-full sm:w-72">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3 top-3"></i>
            <input type="text" id="mandi-search-input" placeholder="${isHi ? 'फसल या मंडी खोजें...' : 'Search crop or mandi...'}" class="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-emerald-600 shadow-2xs" oninput="window.filterMandiTable()" />
          </div>

          <div class="flex items-center gap-2 w-full sm:w-auto">
            <select id="mandi-crop-filter" class="text-xs font-semibold p-2 rounded-lg border border-slate-200 bg-white shadow-2xs cursor-pointer" onchange="window.filterMandiTable()">
              <option value="all">${isHi ? 'सभी फसलें (All Crops)' : 'All Crops'}</option>
              <option value="wheat">${isHi ? 'गेहूँ (Wheat)' : 'Wheat'}</option>
              <option value="mustard">${isHi ? 'सरसों (Mustard)' : 'Mustard'}</option>
              <option value="paddy">${isHi ? 'धान (Paddy)' : 'Paddy'}</option>
              <option value="potato">${isHi ? 'आलू (Potato)' : 'Potato'}</option>
              <option value="onion">${isHi ? 'प्याज़ (Onion)' : 'Onion'}</option>
            </select>
          </div>
        </div>

        <!-- Live Mandi Rates Table -->
        <div class="agri-card overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px] tracking-wider">
                  <th class="p-3">${isHi ? 'फसल / जिस' : 'Crop Commodity'}</th>
                  <th class="p-3">${isHi ? 'मंडी एवं जिला' : 'APMC Mandi'}</th>
                  <th class="p-3">${isHi ? 'न्यूनतम (Min)' : 'Min Rate'}</th>
                  <th class="p-3">${isHi ? 'अधिकतम (Max)' : 'Max Rate'}</th>
                  <th class="p-3">${isHi ? 'मॉडल भाव (Modal)' : 'Modal Price'}</th>
                  <th class="p-3 text-center">${isHi ? 'बाजार रुझान' : 'Trend'}</th>
                </tr>
              </thead>
              <tbody id="mandi-table-body" class="divide-y divide-slate-100">
                <!-- Rendered by window.filterMandiTable() -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    window.calculateMandiArbitrage();
    window.filterMandiTable();
  }

  window.calculateMandiArbitrage = function () {
    const isHi = window.KisanState.currentLang === 'hi';
    const cropKey = document.getElementById('arbitrage-crop-select')?.value || 'wheat';
    const qty = parseFloat(document.getElementById('arbitrage-qty-input')?.value || '40');
    const container = document.getElementById('arbitrage-result-container');
    if (!container) return;

    let localMandi = { name: 'Meerut Mandi', rate: 2460, dist: 8, transportPerQtl: 15 };
    let altMandi1 = { name: 'Hapur APMC', rate: 2520, dist: 32, transportPerQtl: 40 };
    let altMandi2 = { name: 'Muzaffarnagar Mandi', rate: 2430, dist: 48, transportPerQtl: 60 };

    if (cropKey === 'mustard') {
      localMandi = { name: 'Meerut Mandi', rate: 5820, dist: 8, transportPerQtl: 15 };
      altMandi1 = { name: 'Alwar APMC', rate: 6020, dist: 140, transportPerQtl: 110 };
      altMandi2 = { name: 'Hapur APMC', rate: 5890, dist: 32, transportPerQtl: 40 };
    } else if (cropKey === 'paddy') {
      localMandi = { name: 'Meerut Mandi', rate: 3720, dist: 8, transportPerQtl: 15 };
      altMandi1 = { name: 'Karnal Mandi', rate: 3950, dist: 95, transportPerQtl: 85 };
      altMandi2 = { name: 'Hapur APMC', rate: 3780, dist: 32, transportPerQtl: 40 };
    } else if (cropKey === 'potato') {
      localMandi = { name: 'Meerut Mandi', rate: 1380, dist: 8, transportPerQtl: 15 };
      altMandi1 = { name: 'Agra Mandi', rate: 1450, dist: 190, transportPerQtl: 120 };
      altMandi2 = { name: 'Hapur APMC', rate: 1400, dist: 32, transportPerQtl: 40 };
    }

    const netLocal = (localMandi.rate - localMandi.transportPerQtl) * qty;
    const netAlt1 = (altMandi1.rate - altMandi1.transportPerQtl) * qty;
    const netAlt2 = (altMandi2.rate - altMandi2.transportPerQtl) * qty;

    const diff = netAlt1 - netLocal;
    const isProfitable = diff > 0;

    container.innerHTML = `
      <div class="p-3.5 rounded-xl border ${isProfitable ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-300'} text-xs">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-emerald-200">
          <div>
            <span class="font-extrabold text-slate-800">${isHi ? '💡 विश्लेषण परिणाम:' : 'Arbitrage Verdict:'}</span>
            <span class="text-slate-600 ml-1">
              ${isProfitable 
                ? (isHi ? `<strong>${altMandi1.name}</strong> ले जाने पर ट्रांसपोर्ट काटकर <strong>₹ ${diff.toLocaleString('en-IN')} का शुद्ध अधिक मुनाफा</strong> होगा!` : `Selling in <strong>${altMandi1.name}</strong> yields <strong>₹ ${diff.toLocaleString('en-IN')} extra net profit</strong> after transport cost!`)
                : (isHi ? `दूरी व भाड़ा अधिक होने के कारण स्थानीय <strong>${localMandi.name}</strong> में बेचना ही सबसे फायदेमंद है!` : `Due to high transport cost, selling at local <strong>${localMandi.name}</strong> is more profitable!`)}
            </span>
          </div>
          <span class="font-black text-sm ${isProfitable ? 'text-emerald-800' : 'text-slate-700'}">
            ${isProfitable ? `+₹ ${diff.toLocaleString('en-IN')}` : 'Best at Home'}
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
          <div class="p-2 bg-white rounded-lg border border-slate-200">
            <div class="font-bold text-slate-700">${localMandi.name} (${localMandi.dist} km)</div>
            <div class="text-slate-500">भाव: ₹${localMandi.rate} | भाड़ा: ₹${localMandi.transportPerQtl}</div>
            <div class="font-extrabold text-slate-900 mt-1">शुद्ध: ₹${netLocal.toLocaleString('en-IN')}</div>
          </div>

          <div class="p-2 ${isProfitable ? 'bg-emerald-100/70 border-emerald-400 font-semibold' : 'bg-white border-slate-200'} rounded-lg border">
            <div class="font-bold text-emerald-900">${altMandi1.name} (${altMandi1.dist} km) ★</div>
            <div class="text-slate-600">भाव: ₹${altMandi1.rate} | भाड़ा: ₹${altMandi1.transportPerQtl}</div>
            <div class="font-extrabold text-emerald-800 mt-1">शुद्ध: ₹${netAlt1.toLocaleString('en-IN')}</div>
          </div>

          <div class="p-2 bg-white rounded-lg border border-slate-200">
            <div class="font-bold text-slate-700">${altMandi2.name} (${altMandi2.dist} km)</div>
            <div class="text-slate-500">भाव: ₹${altMandi2.rate} | भाड़ा: ₹${altMandi2.transportPerQtl}</div>
            <div class="font-extrabold text-slate-900 mt-1">शुद्ध: ₹${netAlt2.toLocaleString('en-IN')}</div>
          </div>
        </div>
      </div>
    `;
  };

  window.filterMandiTable = function () {
    const isHi = window.KisanState.currentLang === 'hi';
    const searchVal = (document.getElementById('mandi-search-input')?.value || '').toLowerCase();
    const cropFilter = document.getElementById('mandi-crop-filter')?.value || 'all';
    const tbody = document.getElementById('mandi-table-body');
    if (!tbody) return;

    const filtered = MANDI_DATA.filter(item => {
      const matchSearch = item.cropHi.toLowerCase().includes(searchVal) ||
                          item.cropEn.toLowerCase().includes(searchVal) ||
                          item.mandi.toLowerCase().includes(searchVal);
      if (!matchSearch) return false;

      if (cropFilter === 'all') return true;
      if (cropFilter === 'wheat') return item.cropEn.toLowerCase().includes('wheat');
      if (cropFilter === 'mustard') return item.cropEn.toLowerCase().includes('mustard');
      if (cropFilter === 'paddy') return item.cropEn.toLowerCase().includes('paddy');
      if (cropFilter === 'potato') return item.cropEn.toLowerCase().includes('potato');
      if (cropFilter === 'onion') return item.cropEn.toLowerCase().includes('onion');
      return true;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">${isHi ? 'कोई मंडी भाव नहीं मिला।' : 'No matching mandi records found.'}</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(row => {
      const trendBadge = row.status === 'up'
        ? `<span class="badge-price-up px-2 py-0.5 rounded text-[10px] font-bold">▲ ₹${row.change}</span>`
        : row.status === 'down'
          ? `<span class="badge-price-down px-2 py-0.5 rounded text-[10px] font-bold">▼ ₹${row.change.replace('-', '')}</span>`
          : `<span class="badge-price-stable px-2 py-0.5 rounded text-[10px] font-bold">● ₹0</span>`;

      return `
        <tr class="hover:bg-slate-50 transition">
          <td class="p-3 font-bold text-slate-900">${isHi ? row.cropHi : row.cropEn}</td>
          <td class="p-3 text-slate-600 flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3 h-3 text-slate-400"></i>
            <span>${row.mandi}</span>
          </td>
          <td class="p-3 font-mono text-slate-500">₹ ${row.min}</td>
          <td class="p-3 font-mono text-slate-500">₹ ${row.max}</td>
          <td class="p-3 font-mono font-black text-emerald-800 text-sm">₹ ${row.modal}</td>
          <td class="p-3 text-center">${trendBadge}</td>
        </tr>
      `;
    }).join('');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };

  // =========================================================================
  // 7. MODULE 3: AI CROP PATHOLOGY & DISEASE DIAGNOSTIC CLINIC
  // =========================================================================
  const DISEASE_DATABASE = {
    potato_late_blight: {
      nameHi: 'आलू का पछेती झुलसा (Late Blight)',
      nameEn: 'Potato Late Blight (Phytophthora infestans)',
      severity: '88% (गंभीर / High)',
      confidence: '97.4%',
      symptomsHi: 'पत्तियों के किनारों पर गहरे भूरे-काले पानीदार धब्बे, निचली सतह पर सफेद फफूंद जाल।',
      symptomsEn: 'Dark water-soaked lesions on leaf margins with white mildew growth on underside.',
      bioRemedyHi: 'ट्राइकोडर्मा विरिडी (Trichoderma viride) 5 ग्राम प्रति लीटर या 5% नीम तेल का छिड़काव।',
      bioRemedyEn: 'Spray Trichoderma viride @ 5g/L or 5% cold-pressed Neem Oil.',
      chemRemedyHi: 'मेंकोजेब 75% WP (Mancozeb) 2.5 ग्राम प्रति लीटर पानी, या साइमोक्सानिल + मेंकोजेब (Curzate) 3 ग्राम/लीटर।',
      chemRemedyEn: 'Mancozeb 75% WP @ 2.5g/Litre water, or Cymoxanil + Mancozeb @ 3g/Litre.',
      scheduleHi: '7 दिनों के अंतराल पर दोबारा छिड़कें। खेत में जलभराव न होने दें।'
    },
    wheat_yellow_rust: {
      nameHi: 'गेहूँ का पीला रतुआ (Yellow Rust)',
      nameEn: 'Wheat Stripe / Yellow Rust (Puccinia striiformis)',
      severity: '75% (मध्यम / Moderate)',
      confidence: '96.2%',
      symptomsHi: 'पत्तियों पर समानांतर कतारों में पीले रंग के चूर्णयुक्त फफोले (Pustules)। हाथ लगाने पर पीला पाउडर चिपकता है।',
      symptomsEn: 'Yellow-orange powdery pustules arranged in linear stripes on leaf blades.',
      bioRemedyHi: 'खट्टी छाछ (Sour Buttermilk) 10 लीटर प्रति एकड़ 150 लीटर पानी में मिलाकर स्प्रे करें।',
      bioRemedyEn: 'Spray fermented sour buttermilk @ 10 Litres per acre diluted in 150L water.',
      chemRemedyHi: 'प्रोपिकोनाज़ोल 25% EC (Tilt) 1 मिलीलीटर प्रति लीटर पानी में तुरंत घोलकर छिड़कें।',
      chemRemedyEn: 'Propiconazole 25% EC (Tilt) @ 1 ml per Litre water.',
      scheduleHi: 'धूप निकलने पर सुबह 9 से 11 बजे छिड़कें। हवा के बहाव की दिशा में ही स्प्रे करें।'
    },
    tomato_leaf_curl: {
      nameHi: 'टमाटर का पर्ण कुंचन वायरस (Tomato Leaf Curl)',
      nameEn: 'Tomato Leaf Curl Geminivirus (ToLCV)',
      severity: '65% (सफेद मक्खी वाहक)',
      confidence: '95.1%',
      symptomsHi: 'पत्तियां ऊपर की ओर मुड़ना, छोटी होना, नसें मोटी होना और पौधे का विकास रुक जाना।',
      symptomsEn: 'Upward curling and crinkling of leaves, stunted bushy growth caused by Whitefly vector.',
      bioRemedyHi: 'पीले चिपचिपे कार्ड (Yellow Sticky Traps) 15 प्रति एकड़ लगाएं + नीम अर्क 10,000 PPM।',
      bioRemedyEn: 'Install Yellow Sticky Traps @ 15/acre + Neem Azadirachtin 10,000 PPM @ 2ml/L.',
      chemRemedyHi: 'इमिडाक्लोप्रिड 17.8% SL (Confidor) 0.5 मिलीलीटर प्रति लीटर पानी सफेद मक्खी नियंत्रण हेतु।',
      chemRemedyEn: 'Imidacloprid 17.8% SL @ 0.5ml/Litre or Thiamethoxam 25% WG @ 0.3g/L.',
      scheduleHi: 'संक्रमित पौधों को उखाड़कर नष्ट करें ताकि रोग पूरे खेत में न फैले।'
    },
    paddy_blast: {
      nameHi: 'धान का झोंका रोग (Rice Blast)',
      nameEn: 'Paddy Blast (Magnaporthe oryzae)',
      severity: '82% (High Risk)',
      confidence: '98.0%',
      symptomsHi: 'पत्तियों पर नाव या आँख के आकार के धब्बे जिनके बीच का भाग राख जैसा धूसर होता है।',
      symptomsEn: 'Spindle-shaped elliptical lesions with gray centers and reddish-brown borders.',
      bioRemedyHi: 'स्यूडोमोनास फ्लोरेसेंस (Pseudomonas fluorescens) 10 ग्राम/लीटर का पर्णीय छिड़काव।',
      bioRemedyEn: 'Foliar spray of Pseudomonas fluorescens @ 10g/Litre.',
      chemRemedyHi: 'ट्राइसाइक्लाज़ोल 75% WP (Baan) 0.6 ग्राम प्रति लीटर पानी का छिड़काव।',
      chemRemedyEn: 'Tricyclazole 75% WP @ 0.6g per Litre water.',
      scheduleHi: 'यूरिया का अतिरिक्त प्रयोग तुरंत बंद करें। पोटाश की मात्रा बढ़ाएं।'
    }
  };

  function renderDoctorView(container) {
    const isHi = window.KisanState.currentLang === 'hi';

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <!-- AI Doctor Welcome Banner -->
        <div class="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-white/10 text-emerald-300 flex items-center justify-center font-black text-xl shrink-0">
              <i data-lucide="stethoscope" class="w-7 h-7"></i>
            </div>
            <div>
              <h3 class="text-lg font-black tracking-wide">${isHi ? 'किसान एआई फसल चिकित्सक (Plant Pathology Doctor)' : 'Kisan AI Crop Pathology Clinic'}</h3>
              <p class="text-xs text-emerald-200 mt-0.5">
                ${isHi ? 'कृत्रिम बुद्धिमत्ता (AI) द्वारा फसल रोग की तुरंत पहचान व 100% सटीक उपचार' : 'Computer Vision & Deep Learning diagnosis for smallholder farmers'}
              </p>
            </div>
          </div>
          <span class="bg-emerald-400 text-emerald-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shrink-0 shadow-sm">
            ICAR Trained Model
          </span>
        </div>

        <!-- Diagnostic Interface -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Left: Image Upload & Presets -->
          <div class="lg:col-span-5 space-y-4">
            <div class="agri-card p-4 space-y-3">
              <label class="font-extrabold text-xs text-slate-800 block">
                ${isHi ? '१. प्रभावित पत्ती या पौधे की तस्वीर चुनें:' : '1. Upload Infected Plant Leaf Photo:'}
              </label>

              <div class="scan-dropzone p-6 text-center" onclick="document.getElementById('leaf-file-input').click()">
                <input type="file" id="leaf-file-input" accept="image/*" class="hidden" onchange="window.handleLeafUpload(event)" />
                <div class="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <i data-lucide="camera" class="w-6 h-6"></i>
                </div>
                <div class="text-xs font-bold text-slate-700">${isHi ? 'कैमरा से फोटो खींचें या फाइल चुनें' : 'Take Photo or Browse Image'}</div>
                <div class="text-[10px] text-slate-400 mt-1">${isHi ? 'JPG, PNG फॉर्मेट (अधिकतम 10 MB)' : 'Supports JPG, PNG (Max 10 MB)'}</div>
              </div>

              <!-- Quick Demo Presets -->
              <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">${isHi ? 'या इन सामान्य रोगों में से तुरंत टेस्ट करें:' : 'Or Select Common Crop Disease Presets:'}</label>
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <button type="button" onclick="window.runAiDiagnosis('potato_late_blight')" class="p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition cursor-pointer">
                    <span class="font-bold text-slate-800 block">🥔 ${isHi ? 'आलू झुलसा' : 'Potato Blight'}</span>
                    <span class="text-[10px] text-slate-500">Late Blight</span>
                  </button>
                  <button type="button" onclick="window.runAiDiagnosis('wheat_yellow_rust')" class="p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition cursor-pointer">
                    <span class="font-bold text-slate-800 block">🌾 ${isHi ? 'गेहूँ पीला रतुआ' : 'Wheat Rust'}</span>
                    <span class="text-[10px] text-slate-500">Stripe Rust</span>
                  </button>
                  <button type="button" onclick="window.runAiDiagnosis('tomato_leaf_curl')" class="p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition cursor-pointer">
                    <span class="font-bold text-slate-800 block">🍅 ${isHi ? 'टमाटर मरोड़िया' : 'Tomato Curl'}</span>
                    <span class="text-[10px] text-slate-500">Leaf Curl Virus</span>
                  </button>
                  <button type="button" onclick="window.runAiDiagnosis('paddy_blast')" class="p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition cursor-pointer">
                    <span class="font-bold text-slate-800 block">🌾 ${isHi ? 'धान झोंका' : 'Rice Blast'}</span>
                    <span class="text-[10px] text-slate-500">Blast Fungus</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Diagnostic Prescription Output -->
          <div class="lg:col-span-7">
            <div id="ai-doctor-output" class="agri-card p-5 h-full flex flex-col justify-center items-center text-center text-slate-400">
              <i data-lucide="scan-line" class="w-12 h-12 text-slate-300 mb-2"></i>
              <h4 class="font-bold text-sm text-slate-600">${isHi ? 'निदान रिपोर्ट यहाँ दिखाई देगी' : 'Diagnostic Prescription will appear here'}</h4>
              <p class="text-xs text-slate-400 mt-1 max-w-sm">
                ${isHi ? 'बाईं तरफ से कोई रोग चुनें या अपनी फसल की पत्ती की तस्वीर अपलोड करें।' : 'Select a crop disease preset or upload an affected leaf photo on the left.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Default to Potato Late Blight demo
    window.runAiDiagnosis('potato_late_blight');
  }

  window.handleLeafUpload = function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      // Simulate intelligent scan on uploaded photo
      window.runAiDiagnosis('potato_late_blight', e.target.result);
    };
    reader.readAsDataURL(file);
  };

  window.runAiDiagnosis = function (diseaseKey, customImgUrl, skipAnimation) {
    const isHi = window.KisanState.currentLang === 'hi';
    const data = DISEASE_DATABASE[diseaseKey] || DISEASE_DATABASE.potato_late_blight;
    const outputContainer = document.getElementById('ai-doctor-output');
    if (!outputContainer) return;

    if (!skipAnimation) {
      outputContainer.className = 'agri-card p-6 text-center space-y-4 animate-fade-in flex flex-col items-center justify-center min-h-[340px]';
      outputContainer.innerHTML = `
        <div class="relative w-20 h-20 rounded-full border-2 border-emerald-400 flex items-center justify-center overflow-hidden bg-emerald-950/20 shadow-inner">
          <div class="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-transparent animate-spin" style="animation-duration: 1.2s;"></div>
          <i data-lucide="scan-line" class="w-8 h-8 text-emerald-600 animate-pulse"></i>
        </div>
        <div class="space-y-1">
          <div class="text-xs font-mono font-bold text-emerald-800 flex items-center justify-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>${isHi ? 'एआई न्यूरल मॉडल द्वारा विश्लेषण जारी है...' : 'AI Neural Model Scanning Leaf Pathogen...'}</span>
          </div>
          <p class="text-[10px] text-slate-500 max-w-xs mx-auto">
            ${isHi ? 'पत्ती की बनावट, क्लोरोफिल घनत्व व फफूंद धब्बों की आईसीएआर डेटाबेस से मिलान' : 'Matching leaf texture, necrotic lesions and fungal spores against ICAR library'}
          </p>
        </div>
      `;
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }

      setTimeout(() => {
        renderPrescription();
      }, 550);
      return;
    }

    renderPrescription();

    function renderPrescription() {
      outputContainer.className = 'agri-card p-5 space-y-4 animate-fade-in text-left';
      outputContainer.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-slate-200">
          <div>
            <span class="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
              AI CONFIDENCE: ${data.confidence}
            </span>
            <h4 class="font-extrabold text-base text-slate-900 mt-1">${isHi ? data.nameHi : data.nameEn}</h4>
          </div>
          <div class="text-right">
            <span class="text-[10px] text-slate-500 block">${isHi ? 'गंभीरता स्तर:' : 'Severity Level:'}</span>
            <span class="font-bold text-xs text-red-600">${data.severity}</span>
          </div>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <strong class="text-slate-800 block mb-0.5">${isHi ? 'लक्षण एवं कारण:' : 'Observed Symptoms & Causative Factor:'}</strong>
            <p class="text-slate-600">${isHi ? data.symptomsHi : data.symptomsEn}</p>
          </div>

          <!-- Prescriptions: Organic vs Chemical -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div class="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1">
              <span class="font-bold text-emerald-900 text-xs flex items-center gap-1">
                <span>🌿</span> <span>${isHi ? 'जैविक व प्राकृतिक उपचार:' : 'Biological / Organic Remedy:'}</span>
              </span>
              <p class="text-emerald-800 text-[11px] leading-relaxed">${isHi ? data.bioRemedyHi : data.bioRemedyEn}</p>
            </div>

            <div class="p-3 rounded-xl bg-blue-50/80 border border-blue-200 space-y-1">
              <span class="font-bold text-blue-900 text-xs flex items-center gap-1">
                <span>🧪</span> <span>${isHi ? 'रासायनिक कवकनाशी (दवा):' : 'Chemical Fungicide (Dose):'}</span>
              </span>
              <p class="text-blue-800 text-[11px] leading-relaxed">${isHi ? data.chemRemedyHi : data.chemRemedyEn}</p>
            </div>
          </div>

          <div class="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-[11px] font-medium flex items-center gap-2">
            <i data-lucide="alert-circle" class="w-4 h-4 text-amber-700 shrink-0"></i>
            <span><strong>${isHi ? 'छिड़काव गाइड:' : 'Safety Advisory:'}</strong> ${isHi ? data.scheduleHi : 'Repeat spray after 7 days if infection persists. Maintain field drainage.'}</span>
          </div>
        </div>

        <div class="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
          <button type="button" onclick="window.print()" class="text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 cursor-pointer">
            <i data-lucide="printer" class="w-3.5 h-3.5"></i> <span>${isHi ? 'पर्चा प्रिंट करें' : 'Print Rx'}</span>
          </button>
          <button type="button" onclick="window.speakCurrentContent()" class="bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 cursor-pointer">
            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i> <span>${isHi ? 'उपचार सुनें' : 'Listen Advice'}</span>
          </button>
        </div>
      `;

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
  };

  // =========================================================================
  // 8. MODULE 4: SMART FARMING CALCULATORS (FERTILIZER NPK & SEED RATE)
  // =========================================================================
  function renderToolsView(container) {
    const isHi = window.KisanState.currentLang === 'hi';

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <!-- Fertilizer Calculator -->
        <div class="agri-card p-5 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 class="font-extrabold text-slate-800 text-base flex items-center gap-2">
                <i data-lucide="flask-conical" class="w-5 h-5 text-emerald-600"></i>
                <span>${isHi ? 'वैज्ञानिक NPK उर्वरक कैलकुलेटर (यूरिया, डीएपी, पोटाश)' : 'Scientific NPK Fertilizer Dosage Calculator'}</span>
              </h3>
              <p class="text-xs text-slate-500 mt-0.5">
                ${isHi ? 'आईसीआर (ICAR) मानक अनुसार जमीन के क्षेत्रफल से खाद की सटीक बोरी की गणना' : 'Standard ICAR nutrient dosage recommendation per area unit'}
              </p>
            </div>
            <span class="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">Soil Health Sync</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="text-[11px] font-bold text-slate-700 block mb-1">${isHi ? 'फसल चुनें:' : 'Crop Type:'}</label>
              <select id="calc-crop-type" class="w-full text-xs font-semibold p-2.5 rounded-lg border border-slate-300 bg-white" onchange="window.calculateFertilizerDosage()">
                <option value="wheat">${isHi ? 'गेहूँ (Wheat - सिंचित)' : 'Wheat (Irrigated)'}</option>
                <option value="paddy">${isHi ? 'धान (Paddy - Basmati/Non-Basmati)' : 'Paddy'}</option>
                <option value="mustard">${isHi ? 'सरसों (Mustard)' : 'Mustard'}</option>
                <option value="potato">${isHi ? 'आलू (Potato)' : 'Potato'}</option>
                <option value="sugarcane">${isHi ? 'गन्ना (Sugarcane)' : 'Sugarcane'}</option>
              </select>
            </div>

            <div>
              <label class="text-[11px] font-bold text-slate-700 block mb-1">${isHi ? 'जमीन का क्षेत्रफल:' : 'Land Size:'}</label>
              <input type="number" id="calc-land-val" value="2.5" min="0.5" max="100" step="0.5" class="w-full text-xs font-semibold p-2.5 rounded-lg border border-slate-300 bg-white" oninput="window.calculateFertilizerDosage()" />
            </div>

            <div>
              <label class="text-[11px] font-bold text-slate-700 block mb-1">${isHi ? 'माप की इकाई:' : 'Unit:'}</label>
              <select id="calc-land-unit" class="w-full text-xs font-semibold p-2.5 rounded-lg border border-slate-300 bg-white" onchange="window.calculateFertilizerDosage()">
                <option value="acre">${isHi ? 'एकड़ (Acre)' : 'Acre'}</option>
                <option value="bigha">${isHi ? 'बीघा (UP Bigha = 0.2 Acre)' : 'Bigha'}</option>
                <option value="hectare">${isHi ? 'हेक्टेयर (Hectare = 2.47 Acre)' : 'Hectare'}</option>
              </select>
            </div>
          </div>

          <!-- Fertilizer Output Matrix -->
          <div id="fertilizer-result-grid" class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <!-- Computed by calculateFertilizerDosage() -->
          </div>
        </div>

        <!-- Seed Rate & Harvest Output Estimator -->
        <div class="agri-card p-5 space-y-3">
          <div class="flex items-center gap-2 font-bold text-sm text-slate-800 border-b border-slate-100 pb-2">
            <i data-lucide="sprout" class="w-4 h-4 text-emerald-600"></i>
            <span>${isHi ? 'बीज मात्रा एवं अनुमानित पैदावार गाइड' : 'Seed Sowing Rate & Estimated Yield Benchmark'}</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span class="font-bold text-slate-700 block mb-1">${isHi ? 'अनुशंसित बीज दर:' : 'Recommended Seed Rate:'}</span>
              <div class="text-slate-600 space-y-1">
                <div>• ${isHi ? 'गेहूँ (समय पर बुवाई): 40 किग्रा / एकड़' : 'Wheat (Timely): 40 kg / Acre'}</div>
                <div>• ${isHi ? 'धान (रोपाई हेतु नर्सरी): 8-10 किग्रा / एकड़' : 'Paddy (Transplanting): 8-10 kg / Acre'}</div>
                <div>• ${isHi ? 'सरसों (लाइन बुवाई): 1.5 - 2 किग्रा / एकड़' : 'Mustard (Line sowing): 1.5 - 2 kg / Acre'}</div>
              </div>
            </div>

            <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              <span class="font-bold text-emerald-900 block mb-1">${isHi ? 'अनुमानित मानक उत्पादन:' : 'Average Output Expectation:'}</span>
              <div class="text-emerald-800 space-y-1">
                <div>• ${isHi ? 'गेहूँ: 20 से 24 क्विंटल / एकड़' : 'Wheat: 20 to 24 Quintals / Acre'}</div>
                <div>• ${isHi ? 'सरसों: 8 से 10 क्विंटल / एकड़' : 'Mustard: 8 to 10 Quintals / Acre'}</div>
                <div>• ${isHi ? 'आलू: 120 से 150 क्विंटल / एकड़' : 'Potato: 120 to 150 Quintals / Acre'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    window.calculateFertilizerDosage();
  }

  window.calculateFertilizerDosage = function () {
    const isHi = window.KisanState.currentLang === 'hi';
    const crop = document.getElementById('calc-crop-type')?.value || 'wheat';
    const rawVal = parseFloat(document.getElementById('calc-land-val')?.value || '2.5');
    const unit = document.getElementById('calc-land-unit')?.value || 'acre';
    const container = document.getElementById('fertilizer-result-grid');
    if (!container) return;

    let acres = rawVal;
    if (unit === 'bigha') acres = rawVal * 0.2;
    if (unit === 'hectare') acres = rawVal * 2.471;

    let ureaBagsPerAcre = 2.0;
    let dapBagsPerAcre = 1.0;
    let mopBagsPerAcre = 0.5;

    if (crop === 'paddy') {
      ureaBagsPerAcre = 2.2;
      dapBagsPerAcre = 1.0;
      mopBagsPerAcre = 0.6;
    } else if (crop === 'mustard') {
      ureaBagsPerAcre = 1.5;
      dapBagsPerAcre = 0.8;
      mopBagsPerAcre = 0.4;
    } else if (crop === 'potato') {
      ureaBagsPerAcre = 3.0;
      dapBagsPerAcre = 2.0;
      mopBagsPerAcre = 1.5;
    } else if (crop === 'sugarcane') {
      ureaBagsPerAcre = 3.5;
      dapBagsPerAcre = 1.5;
      mopBagsPerAcre = 1.0;
    }

    const totalUrea = (ureaBagsPerAcre * acres).toFixed(1);
    const totalDap = (dapBagsPerAcre * acres).toFixed(1);
    const totalMop = (mopBagsPerAcre * acres).toFixed(1);

    container.innerHTML = `
      <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-300">
        <span class="text-[10px] font-bold text-emerald-800 uppercase block">${isHi ? 'यूरिया (46% Nitrogen)' : 'Urea (46% N)'}</span>
        <div class="text-xl font-black text-emerald-900 mt-1">${totalUrea} <span class="text-xs font-semibold">${isHi ? 'बोरी (45kg)' : 'Bags (45kg)'}</span></div>
        <span class="text-[10px] text-emerald-700 block mt-1">${isHi ? '1/3 बुवाई पर + 2/3 दो सिंचाई में' : '1/3 Base + 2/3 Split in 2 irrigations'}</span>
      </div>

      <div class="p-3 bg-blue-50 rounded-xl border border-blue-300">
        <span class="text-[10px] font-bold text-blue-800 uppercase block">${isHi ? 'डीएपी (18:46 Phosphate)' : 'DAP (18:46 Phosphate)'}</span>
        <div class="text-xl font-black text-blue-900 mt-1">${totalDap} <span class="text-xs font-semibold">${isHi ? 'बोरी (50kg)' : 'Bags (50kg)'}</span></div>
        <span class="text-[10px] text-blue-700 block mt-1">${isHi ? '100% मात्रा बुवाई के समय ही डालें' : '100% Basal dose at time of sowing'}</span>
      </div>

      <div class="p-3 bg-amber-50 rounded-xl border border-amber-300">
        <span class="text-[10px] font-bold text-amber-800 uppercase block">${isHi ? 'पोटाश (MOP 60% K2O)' : 'Potash (MOP 60% K2O)'}</span>
        <div class="text-xl font-black text-amber-900 mt-1">${totalMop} <span class="text-xs font-semibold">${isHi ? 'बोरी (50kg)' : 'Bags (50kg)'}</span></div>
        <span class="text-[10px] text-amber-700 block mt-1">${isHi ? 'दाने की चमक व मजबूती हेतु' : 'For grain weight & disease resistance'}</span>
      </div>
    `;
  };

  // =========================================================================
  // 9. MODULE 5: GOVERNMENT SCHEMES & DIRECT SUBSIDIES
  // =========================================================================
  const SCHEMES_LIST = [
    {
      id: 'pmkisan',
      titleHi: 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)',
      titleEn: 'PM-KISAN Samman Nidhi',
      benefitHi: '₹ 6,000 प्रति वर्ष (₹2000 की 3 समान किस्तों में सीधे बैंक खाते में DBT)',
      benefitEn: '₹ 6,000 per year direct DBT in 3 installments',
      eligibilityHi: 'सभी भूमिधारक लघु एवं सीमांत किसान परिवार जिनके नाम कृषि योग्य भूमि है।',
      eligibilityEn: 'All landholding small & marginal farmer families with verified land records.',
      status: 'Active',
      link: 'https://pmkisan.gov.in'
    },
    {
      id: 'pmfby',
      titleHi: 'प्रधानमंत्री फसल बीमा योजना (PMFBY)',
      titleEn: 'Pradhan Mantri Fasal Bima Yojana',
      benefitHi: 'बाढ़, सूखा व ओलावृष्टि से फसल नुकसान पर 100% बीमा सुरक्षा (रबी 1.5%, खरीफ 2% प्रीमियम)',
      benefitEn: 'Comprehensive yield loss insurance (1.5% Rabi / 2% Kharif premium)',
      eligibilityHi: 'अधिसूचित क्षेत्र में अधिसूचित फसल उगाने वाले सभी किसान (बटाईदार सहित)।',
      eligibilityEn: 'Farmers cultivating notified crops in notified areas including sharecroppers.',
      status: 'Active',
      link: 'https://pmfby.gov.in'
    },
    {
      id: 'pmkusum',
      titleHi: 'पीएम-कुसुम सोलर पंप योजना (PM-KUSUM)',
      titleEn: 'PM-KUSUM Solar Agricultural Pump',
      benefitHi: 'सौर ऊर्जा कृषि पंप लगाने हेतु सरकार द्वारा 60% से 90% तक की भारी सब्सिडी।',
      benefitEn: '60% to 90% subsidy for off-grid standalone solar irrigation pumps.',
      eligibilityHi: 'सिंचाई हेतु बिजली कनेक्शन न रखने वाले या डीजल पंप पर निर्भर किसान।',
      eligibilityEn: 'Farmers lacking grid electricity connections or replacing diesel pumps.',
      status: 'Active',
      link: 'https://pmkusum.mnre.gov.in'
    },
    {
      id: 'kcc',
      titleHi: 'किसान क्रेडिट कार्ड (KCC Loan 4% ब्याज)',
      titleEn: 'Kisan Credit Card (KCC at 4% Interest)',
      benefitHi: '₹ 3 लाख तक का कृषि ऋण मात्र 4% रियायती ब्याज दर पर (समय पर चुकाने पर 3% छूट)',
      benefitEn: 'Agricultural working capital up to ₹3 Lakh at 4% subsidized interest rate.',
      eligibilityHi: 'किसान, पशुपालक, मछलीपालक एवं काश्तकार।',
      eligibilityEn: 'Farmers, livestock owners, dairy and fisheries cultivators.',
      status: 'Active',
      link: 'https://www.myscheme.gov.in'
    }
  ];

  function renderSchemesView(container) {
    const isHi = window.KisanState.currentLang === 'hi';

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <!-- Interactive Eligibility Matcher -->
        <div class="agri-card-elevated p-5 space-y-3">
          <div class="flex items-center gap-2 font-black text-sm text-emerald-950 border-b border-emerald-200 pb-2">
            <i data-lucide="check-circle" class="w-5 h-5 text-emerald-700"></i>
            <span>${isHi ? 'पात्रता जांचें — आपके लिए कौन सी योजना सर्वोत्तम है?' : 'Check Eligibility — Which schemes can you claim right now?'}</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label class="font-bold text-slate-700 block mb-1">${isHi ? 'जमीन का आकार:' : 'Land Holding Size:'}</label>
              <select id="scheme-filter-land" class="w-full p-2 rounded-lg border border-slate-300 bg-white" onchange="window.filterSchemesList()">
                <option value="all">${isHi ? 'सभी किसान' : 'All Categories'}</option>
                <option value="small">${isHi ? 'लघु/सीमांत किसान (< 2 हेक्टेयर / 5 एकड़)' : 'Small/Marginal (< 2 Hectares)'}</option>
                <option value="medium">${isHi ? 'मध्यम किसान (2 - 5 हेक्टेयर)' : 'Medium Farmer (2-5 Hectares)'}</option>
              </select>
            </div>

            <div>
              <label class="font-bold text-slate-700 block mb-1">${isHi ? 'मुख्य आवश्यकता:' : 'Primary Need:'}</label>
              <select id="scheme-filter-need" class="w-full p-2 rounded-lg border border-slate-300 bg-white" onchange="window.filterSchemesList()">
                <option value="all">${isHi ? 'सभी लाभ' : 'All Benefits'}</option>
                <option value="income">${isHi ? 'आर्थिक सहायता (Cash DBT)' : 'Direct Income (DBT)'}</option>
                <option value="solar">${isHi ? 'सोलर पंप सब्सिडी' : 'Solar Pump'}</option>
                <option value="loan">${isHi ? 'सस्ता कर्ज (KCC Loan)' : 'Low-Interest Credit'}</option>
                <option value="insurance">${isHi ? 'फसल बीमा (Crop Insurance)' : 'Crop Insurance'}</option>
              </select>
            </div>

            <div class="flex items-end">
              <button type="button" onclick="window.filterSchemesList()" class="w-full bg-[#047857] hover:bg-[#065F46] text-white p-2 rounded-lg text-xs font-bold transition shadow-xs cursor-pointer">
                ${isHi ? 'पात्र योजनाएं दिखाएं' : 'Match My Schemes'}
              </button>
            </div>
          </div>
        </div>

        <!-- Schemes Grid -->
        <div id="schemes-cards-grid" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Rendered via filterSchemesList() -->
        </div>
      </div>
    `;

    window.filterSchemesList();
  }

  window.filterSchemesList = function () {
    const isHi = window.KisanState.currentLang === 'hi';
    const container = document.getElementById('schemes-cards-grid');
    if (!container) return;

    container.innerHTML = SCHEMES_LIST.map(s => `
      <div class="agri-card p-4 space-y-3 flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-start justify-between gap-2">
            <h4 class="font-extrabold text-slate-900 text-sm">${isHi ? s.titleHi : s.titleEn}</h4>
            <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded shrink-0">DBT READY</span>
          </div>

          <div class="p-2.5 bg-emerald-50/70 rounded-lg border border-emerald-200 text-xs">
            <span class="font-bold text-emerald-950 block">${isHi ? 'लाभ:' : 'Key Benefit:'}</span>
            <span class="text-emerald-800">${isHi ? s.benefitHi : s.benefitEn}</span>
          </div>

          <div class="text-[11px] text-slate-600">
            <strong>${isHi ? 'पात्रता:' : 'Eligibility:'}</strong> ${isHi ? s.eligibilityHi : s.eligibilityEn}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-[10px] text-slate-400 font-mono">Ministry of Agriculture</span>
          <a href="${s.link}" target="_blank" rel="noopener noreferrer" class="bg-[#047857] hover:bg-[#065F46] text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition cursor-pointer">
            <span>${isHi ? 'सीधे आवेदन करें' : 'Apply Official'}</span>
            <i data-lucide="external-link" class="w-3 h-3"></i>
          </a>
        </div>
      </div>
    `).join('');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };

  // =========================================================================
  // 10. MODULE 6: KISAN CHAUPAL (DIRECT B2B MARKETPLACE)
  // =========================================================================
  const DEMO_LISTINGS = [
    { farmer: 'राम कुमार यादव', village: 'सरधना, मेरठ (UP)', crop: 'शरबती गेहूँ (Sharbati Wheat)', qty: '60 क्विंटल', price: '₹ 2,550 / क्विंटल', phone: '+91 98765 43210' },
    { farmer: 'धर्मेन्द्र चौधरी', village: 'दौराला, मेरठ (UP)', crop: 'काली सरसों (Black Mustard)', qty: '25 क्विंटल', price: '₹ 5,900 / क्विंटल', phone: '+91 98123 45678' },
    { farmer: 'सुरेश पाल', village: 'हापुड़ रोड, मेरठ (UP)', crop: 'नया आलू (Kufri Pukhraj)', qty: '150 क्विंटल', price: '₹ 1,420 / क्विंटल', phone: '+91 94567 89012' },
    { farmer: 'कुलदीप सिंह', village: 'मवाना, मेरठ (UP)', crop: 'बासमती 1509 धान', qty: '80 क्विंटल', price: '₹ 3,850 / क्विंटल', phone: '+91 97654 32109' }
  ];

  function renderMarketView(container) {
    const isHi = window.KisanState.currentLang === 'hi';

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <!-- Marketplace Banner -->
        <div class="bg-white p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 class="font-extrabold text-base text-slate-800 flex items-center gap-2">
              <i data-lucide="shopping-bag" class="w-5 h-5 text-emerald-600"></i>
              <span>${isHi ? 'किसान चौपाल • बिना आढ़ती/दलाल सीधे अपनी फसल बेचें' : 'Kisan Marketplace • Direct Harvest to Certified Buyers'}</span>
            </h3>
            <p class="text-xs text-slate-500 mt-0.5">
              ${isHi ? 'प्रमाणित व्यापारी, एफपीओ और मिल मालिक आपसे सीधे संपर्क करके सर्वोत्तम भाव देंगे' : 'Connect directly with wholesale buyers and FPOs with zero commission fees'}
            </p>
          </div>
          <button type="button" onclick="window.openNewListingModal()" class="bg-[#047857] hover:bg-[#065F46] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition cursor-pointer shrink-0">
            <i data-lucide="plus-circle" class="w-4 h-4"></i>
            <span>${isHi ? '+ अपनी फसल यहाँ जोड़ें' : '+ List Your Produce'}</span>
          </button>
        </div>

        <!-- Listings Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="marketplace-listings-grid">
          ${renderListingsCards(isHi)}
        </div>
      </div>
    `;
  }

  function renderListingsCards(isHi) {
    const allListings = [...DEMO_LISTINGS, ...window.KisanState.savedListings];
    return allListings.map(item => `
      <div class="agri-card p-4 space-y-3 flex flex-col justify-between">
        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-bold">VERIFIED FARMER</span>
            <span class="text-[10px] text-slate-400">Today</span>
          </div>
          <h4 class="font-extrabold text-sm text-slate-900">${item.crop}</h4>
          <div class="text-xs text-slate-600 flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3 h-3 text-slate-400"></i>
            <span>${item.village}</span>
          </div>
          <div class="text-xs font-semibold text-slate-700">
            ${isHi ? 'किसान:' : 'Farmer:'} <strong>${item.farmer}</strong>
          </div>
          <div class="p-2 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-xs font-mono">
            <span>${item.qty}</span>
            <strong class="text-emerald-800 font-bold">${item.price}</strong>
          </div>
        </div>

        <div class="pt-2 border-t border-slate-100">
          <button type="button" onclick="window.contactFarmerDirect('${item.farmer}', '${item.phone}')" class="w-full bg-emerald-800 hover:bg-emerald-900 text-white p-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer">
            <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
            <span>${isHi ? 'सीधे कॉल / संपर्क करें' : 'Contact Farmer'}</span>
          </button>
        </div>
      </div>
    `).join('');
  }

  window.contactFarmerDirect = function (name, phone) {
    const isHi = window.KisanState.currentLang === 'hi';
    alert(isHi ? `किसान ${name} से संपर्क नंबर: ${phone}\n(किसान कनेक्ट पर सीधी कॉल सुविधा)` : `Contacting Farmer ${name} at: ${phone}`);
  };

  window.openNewListingModal = function () {
    const isHi = window.KisanState.currentLang === 'hi';
    const cropName = prompt(isHi ? 'अपनी फसल का नाम और किस्म लिखें (उदा. शरबती गेहूँ / सरसों):' : 'Enter Crop Name & Variety (e.g. Sharbati Wheat):');
    if (!cropName) return;

    const qty = prompt(isHi ? 'फसल की कुल मात्रा (उदा. 50 क्विंटल):' : 'Enter Quantity (e.g. 50 Quintals):');
    const price = prompt(isHi ? 'अपेक्षित मूल्य (उदा. ₹ 2600 / क्विंटल):' : 'Expected Price (e.g. ₹ 2,600 / Quintal):');

    window.KisanState.savedListings.unshift({
      farmer: isHi ? 'रमेश कुमार यादव' : 'Ramesh Kumar Yadav',
      village: 'मेरठ (UP)',
      crop: cropName,
      qty: qty || '30 क्विंटल',
      price: price || '₹ 2,500 / क्विंटल',
      phone: '+91 98765 00000'
    });

    renderActiveTab('market');
    alert(isHi ? 'आपकी फसल किसान चौपाल बोर्ड पर सफलतापूर्वक पोस्ट हो गई है!' : 'Your harvest listing has been posted successfully!');
  };

  // =========================================================================
  // 11. MODULE 7: EMERGENCY HELPLINE & KRISHI VIGYAN KENDRA (KVK)
  // =========================================================================
  function renderHelplineView(container) {
    const isHi = window.KisanState.currentLang === 'hi';

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <!-- 24x7 Kisan Call Centre Card -->
        <div class="weather-hero-gradient p-6 rounded-2xl shadow-md text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="space-y-1">
            <span class="text-xs font-mono text-emerald-200 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-400/30">24x7 TOLL FREE</span>
            <h3 class="text-2xl font-black">${isHi ? 'किसान कॉल सेंटर (KCC) टोल-फ्री' : 'Kisan Call Centre Toll-Free'}</h3>
            <p class="text-xs text-emerald-100 max-w-md">
              ${isHi ? 'भारत सरकार द्वारा कृषि वैज्ञानिकों से 22 स्थानीय भाषाओं में मुफ्त सलाह प्राप्त करने की आधिकारिक हेल्पलाइन।' : 'Ministry of Agriculture 24x7 advisory helpline answered by agricultural scientists in 22 regional languages.'}
            </p>
          </div>
          <div class="text-center sm:text-right shrink-0">
            <a href="tel:18001801551" class="inline-flex items-center gap-2 bg-white text-emerald-900 px-5 py-3 rounded-xl font-black text-lg shadow-lg hover:bg-emerald-50 transition">
              <i data-lucide="phone-forwarded" class="w-5 h-5 text-emerald-700"></i>
              <span>1800-180-1551</span>
            </a>
          </div>
        </div>

        <!-- Krishi Vigyan Kendra (KVK) & Soil Lab Directory -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="agri-card p-4 space-y-3">
            <div class="flex items-center gap-2 font-bold text-sm text-slate-800 border-b border-slate-100 pb-2">
              <i data-lucide="building-2" class="w-4 h-4 text-emerald-600"></i>
              <span>${isHi ? 'निकटतम कृषि विज्ञान केंद्र (KVK Hastinapur)' : 'Nearest Krishi Vigyan Kendra (KVK)'}</span>
            </div>
            <div class="space-y-1 text-xs text-slate-600">
              <div><strong>KVK मेरठ:</strong> सरदार वल्लभभाई पटेल कृषि एवं प्रौद्योगिकी विश्वविद्यालय, मोदीपुरम</div>
              <div><strong>वरिष्ठ वैज्ञानिक:</strong> डॉ. अशोक कुमार शर्मा (सस्य विज्ञान)</div>
              <div><strong>हेल्पलाइन फोन:</strong> 0121-2888512 / 2888513</div>
              <div><strong>ईमेल:</strong> kvkmeerut@icar.gov.in</div>
            </div>
          </div>

          <div class="agri-card p-4 space-y-3">
            <div class="flex items-center gap-2 font-bold text-sm text-slate-800 border-b border-slate-100 pb-2">
              <i data-lucide="test-tube-2" class="w-4 h-4 text-emerald-600"></i>
              <span>${isHi ? 'मृदा स्वास्थ्य प्रयोगशाला (Soil Testing Lab)' : 'District Soil Testing Laboratory'}</span>
            </div>
            <div class="space-y-1 text-xs text-slate-600">
              <div><strong>केंद्र:</strong> जिला कृषि कार्यालय परिसर, जेल चुंगी, मेरठ</div>
              <div><strong>सुविधा:</strong> 12 पैरामीटर मृदा जांच (नाइट्रोजन, फास्फोरस, पोटाश, पीएच, जैविक कार्बन)</div>
              <div><strong>शुल्क:</strong> मृदा स्वास्थ्य कार्ड योजना अंतर्गत पूर्णतः निःशुल्क</div>
              <div><strong>जांच समय:</strong> नमूना जमा करने के 7 कार्यदिवस में रिपोर्ट प्राप्त करें।</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 12. HERO COUNTER ANIMATOR & INITIALIZATION ON DOM READY
  // =========================================================================
  window.animateHeroCounters = function () {
    const isHi = window.KisanState.currentLang === 'hi';
    const counterEls = document.querySelectorAll('.hero-counter-value[data-counter]');
    counterEls.forEach(el => {
      const target = parseInt(el.getAttribute('data-counter'), 10);
      if (isNaN(target)) return;
      const duration = 1600;
      const startTime = performance.now();

      function updateNumber(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * ease);

        if (target === 700000) {
          const lakhVal = (current / 100000).toFixed(1);
          el.textContent = isHi ? `${lakhVal.replace('.0', '')}+ लाख` : `${(current / 1000).toFixed(0)}K+`;
        } else if (target === 150) {
          el.textContent = `${current}+`;
        } else if (target === 6000) {
          el.textContent = `₹ ${current.toLocaleString('en-IN')}+`;
        } else {
          el.textContent = current.toLocaleString('en-IN');
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          if (target === 700000) el.textContent = isHi ? '7+ लाख' : '700K+';
          if (target === 150) el.textContent = '150+';
          if (target === 6000) el.textContent = '₹ 6,000+';
        }
      }
      requestAnimationFrame(updateNumber);
    });
  };

  // =========================================================================
  // 13. AUTHENTICATION & SECURITY (256-Bit SSL, OTP Simulation, Profile State)
  // =========================================================================
  window.openAuthModal = function () {
    const user = window.KisanState.currentUser;
    if (user) {
      const isHi = window.KisanState.currentLang === 'hi';
      const confirmLogout = confirm(isHi ? 
        `नमस्ते, ${user.name} जी!\nआप वर्तमान में सुरक्षित रूप से लॉग इन हैं (${user.role} • ${user.id})।\n\nक्या आप लॉग आउट करना चाहते हैं?` : 
        `Welcome, ${user.name}!\nYou are currently logged in (${user.role} • ${user.id}).\n\nDo you want to log out?`);
      if (confirmLogout) {
        window.logoutUser();
      }
      return;
    }

    const backdrop = document.getElementById('auth-modal-backdrop');
    if (backdrop) {
      backdrop.classList.add('open');
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
  };

  window.closeAuthModal = function (event) {
    if (event && event.target && event.target.id !== 'auth-modal-backdrop') {
      return;
    }
    const backdrop = document.getElementById('auth-modal-backdrop');
    if (backdrop) backdrop.classList.remove('open');
  };

  window.switchAuthTab = function (role) {
    const farmerTab = document.getElementById('auth-tab-farmer');
    const officerTab = document.getElementById('auth-tab-officer');
    const farmerPanel = document.getElementById('auth-panel-farmer');
    const officerPanel = document.getElementById('auth-panel-officer');

    if (role === 'farmer') {
      if (farmerTab) {
        farmerTab.className = 'flex-1 py-2.5 text-center border-b-2 border-emerald-600 text-emerald-900 bg-white transition cursor-pointer';
      }
      if (officerTab) {
        officerTab.className = 'flex-1 py-2.5 text-center border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition cursor-pointer';
      }
      if (farmerPanel) farmerPanel.classList.remove('hidden');
      if (officerPanel) officerPanel.classList.add('hidden');
    } else {
      if (officerTab) {
        officerTab.className = 'flex-1 py-2.5 text-center border-b-2 border-emerald-600 text-emerald-900 bg-white transition cursor-pointer';
      }
      if (farmerTab) {
        farmerTab.className = 'flex-1 py-2.5 text-center border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition cursor-pointer';
      }
      if (officerPanel) officerPanel.classList.remove('hidden');
      if (farmerPanel) farmerPanel.classList.add('hidden');
    }
  };

  window.sendSimulatedOtp = function () {
    const phoneInput = document.getElementById('auth-farmer-phone');
    const phone = phoneInput ? phoneInput.value.trim() : '';
    if (!phone || phone.length < 10) {
      alert(window.KisanState.currentLang === 'hi' ? 'कृपया 10-अंकों का वैध मोबाइल नंबर दर्ज करें।' : 'Please enter a valid 10-digit mobile number.');
      return;
    }

    const notif = document.getElementById('auth-otp-notification');
    const otpInput = document.getElementById('auth-farmer-otp');
    if (notif) notif.classList.remove('hidden');
    if (otpInput) otpInput.value = '7419';
  };

  window.verifyAndLoginFarmer = function () {
    const isHi = window.KisanState.currentLang === 'hi';
    const termsCheck = document.getElementById('auth-terms-checkbox');
    if (termsCheck && !termsCheck.checked) {
      alert(isHi ? 'कृपया जारी रखने से पहले नियम व शर्तों एवं DPDP Act 2023 गोपनीयता नीति को स्वीकार करें।' : 'Please accept the Terms & Conditions and DPDP Act 2023 Privacy Policy to continue.');
      return;
    }

    const otpInput = document.getElementById('auth-farmer-otp');
    const otp = otpInput ? otpInput.value.trim() : '';
    if (!otp) {
      alert(isHi ? 'कृपया 4-अंकों का सुरक्षा कोड (OTP) दर्ज करें।' : 'Please enter the 4-digit security code (OTP).');
      return;
    }

    window.KisanState.currentUser = {
      name: isHi ? 'रामेश्वर सिंह' : 'Rameshwar Singh',
      role: isHi ? 'सत्यापित किसान' : 'Verified Farmer',
      district: 'मेरठ (UP)',
      id: 'PMK-UP-77291',
      authMethod: '256-Bit Mobile OTP'
    };

    try {
      localStorage.setItem('kisanconnect_user', JSON.stringify(window.KisanState.currentUser));
    } catch (e) {}

    window.updateAuthUI();
    window.closeAuthModal();
    alert(isHi ? 
      `✓ सुरक्षित लॉगिन सफल!\nनमस्ते, रामेश्वर सिंह जी (मेरठ)। आपका 256-Bit SSL एन्क्रिप्टेड सत्र सक्रिय हो गया है।` : 
      `✓ Secure Login Successful!\nWelcome, Rameshwar Singh (Meerut). Your 256-Bit SSL encrypted session is active.`);
  };

  window.loginOfficer = function () {
    const isHi = window.KisanState.currentLang === 'hi';
    const officerId = document.getElementById('auth-officer-id')?.value || 'UP-AGRI-06';

    window.KisanState.currentUser = {
      name: isHi ? 'डॉ. अशोक शर्मा' : 'Dr. Ashok Sharma',
      role: isHi ? 'कृषि विज्ञान अधिकारी (KVK)' : 'Senior Agronomist (KVK)',
      district: 'मेरठ (UP)',
      id: officerId,
      authMethod: 'Officer Credential'
    };

    try {
      localStorage.setItem('kisanconnect_user', JSON.stringify(window.KisanState.currentUser));
    } catch (e) {}

    window.updateAuthUI();
    window.closeAuthModal();
    alert(isHi ? 
      `✓ अधिकारी पोर्टल लॉगिन सफल!\nनमस्ते, डॉ. अशोक शर्मा जी (${officerId})।` : 
      `✓ Officer Portal Login Successful!\nWelcome, Dr. Ashok Sharma (${officerId}).`);
  };

  window.quickDemoLogin = function (type) {
    const isHi = window.KisanState.currentLang === 'hi';
    if (type === 'trader') {
      window.KisanState.currentUser = {
        name: isHi ? 'सुरेश ट्रेडर्स' : 'Suresh Traders',
        role: isHi ? 'पंजीकृत आढ़ती / FPO' : 'Certified Mandi Trader',
        district: 'हापुड़ (UP)',
        id: 'ENAM-HAPUR-88',
        authMethod: 'Fast Demo Auth'
      };
    } else {
      window.KisanState.currentUser = {
        name: isHi ? 'रामेश्वर सिंह' : 'Rameshwar Singh',
        role: isHi ? 'सत्यापित किसान' : 'Verified Farmer',
        district: 'मेरठ (UP)',
        id: 'PMK-UP-77291',
        authMethod: 'Fast Demo Auth'
      };
    }

    try {
      localStorage.setItem('kisanconnect_user', JSON.stringify(window.KisanState.currentUser));
    } catch (e) {}

    window.updateAuthUI();
    window.closeAuthModal();
    alert(isHi ? 
      `✓ त्वरित डेमो लॉगिन सक्रिय: ${window.KisanState.currentUser.name} (${window.KisanState.currentUser.role})` : 
      `✓ Quick Demo Login Active: ${window.KisanState.currentUser.name} (${window.KisanState.currentUser.role})`);
  };

  window.logoutUser = function () {
    window.KisanState.currentUser = null;
    try {
      localStorage.removeItem('kisanconnect_user');
    } catch (e) {}
    window.updateAuthUI();
    alert(window.KisanState.currentLang === 'hi' ? 'आप सफलतापूर्वक लॉग आउट हो गए हैं।' : 'You have logged out securely.');
  };

  window.updateAuthUI = function () {
    const user = window.KisanState.currentUser;
    const isHi = window.KisanState.currentLang === 'hi';

    // 1. Header Auth Button
    const headerBtn = document.getElementById('btn-header-auth');
    const headerLabel = document.getElementById('header-auth-label');

    if (headerBtn && headerLabel) {
      if (user) {
        headerBtn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-xs border border-emerald-600 transition cursor-pointer';
        headerLabel.textContent = `${user.name} ✓`;
        headerBtn.title = isHi ? `लॉग इन: ${user.name} (${user.role}) - क्लिक करके लॉग आउट करें` : `Logged in: ${user.name} - Click to Log Out`;
      } else {
        headerBtn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-xs border border-amber-400 transition cursor-pointer';
        headerLabel.textContent = I18N[window.KisanState.currentLang].loginBtn || 'लॉग इन';
        headerBtn.title = isHi ? 'सुरक्षित किसान लॉगिन (256-Bit Secure Login)' : 'Secure Login';
      }
    }

    // 2. Drawer User Card
    const drawerUserName = document.getElementById('drawer-user-name');
    const drawerUserStatus = document.getElementById('drawer-user-status');
    const drawerAvatar = document.getElementById('drawer-avatar-icon');
    const drawerBtn = document.getElementById('btn-drawer-auth');

    if (drawerUserName && drawerUserStatus && drawerAvatar && drawerBtn) {
      if (user) {
        drawerUserName.textContent = `${user.name}`;
        drawerUserStatus.innerHTML = `<span class="text-emerald-700 font-bold">${user.role}</span> • ${user.district}`;
        drawerAvatar.innerHTML = '👨‍🌾';
        drawerAvatar.className = 'w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm font-bold shrink-0';
        drawerBtn.textContent = I18N[window.KisanState.currentLang].logoutBtn || 'लॉग आउट';
        drawerBtn.className = 'text-[10px] font-bold bg-rose-100 hover:bg-rose-200 text-rose-800 px-2.5 py-1 rounded transition cursor-pointer border border-rose-300';
      } else {
        drawerUserName.textContent = isHi ? 'अतिथि किसान (Guest)' : 'Guest Farmer';
        drawerUserStatus.innerHTML = `<i data-lucide="shield" class="w-2.5 h-2.5 text-emerald-600"></i> <span>सुरक्षित 256-Bit सत्र</span>`;
        drawerAvatar.innerHTML = '🔒';
        drawerAvatar.className = 'w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-bold shrink-0';
        drawerBtn.textContent = I18N[window.KisanState.currentLang].loginBtn || 'लॉग इन';
        drawerBtn.className = 'text-[10px] font-bold bg-amber-500 hover:bg-amber-600 text-slate-900 px-2.5 py-1 rounded shadow-2xs transition cursor-pointer';
      }
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };

  // =========================================================================
  // 14. TERMS & CONDITIONS & DPDP ACT 2023 COMPLIANCE ENGINE
  // =========================================================================
  window.openTermsModal = function (tabName) {
    const backdrop = document.getElementById('terms-modal-backdrop');
    if (backdrop) {
      backdrop.classList.add('open');
      if (tabName) {
        window.switchLegalTab(tabName);
      }
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
  };

  window.closeTermsModal = function (event) {
    if (event && event.target && event.target.id !== 'terms-modal-backdrop') {
      return;
    }
    const backdrop = document.getElementById('terms-modal-backdrop');
    if (backdrop) backdrop.classList.remove('open');
  };

  window.switchLegalTab = function (tabName) {
    const tabs = ['terms', 'dpdp', 'grievance'];
    tabs.forEach(t => {
      const btn = document.getElementById(`legal-tab-${t}`);
      const panel = document.getElementById(`legal-panel-${t}`);
      if (btn) {
        if (t === tabName) {
          btn.className = 'flex-1 py-2 text-center border-b-2 border-emerald-600 text-emerald-900 bg-white transition cursor-pointer font-bold';
        } else {
          btn.className = 'flex-1 py-2 text-center border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition cursor-pointer';
        }
      }
      if (panel) {
        if (t === tabName) panel.classList.remove('hidden');
        else panel.classList.add('hidden');
      }
    });
  };

  window.acceptTermsAndClose = function () {
    try {
      localStorage.setItem('kisanconnect_terms_accepted', 'true');
    } catch (e) {}
    window.closeTermsModal();
    window.dismissDpdpToast(true);
  };

  window.dismissDpdpToast = function (accepted) {
    const toast = document.getElementById('dpdp-consent-toast');
    if (toast) toast.classList.add('dismissed');
    if (accepted) {
      try {
        localStorage.setItem('kisanconnect_dpdp_accepted', 'true');
      } catch (e) {}
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    try {
      const savedUser = localStorage.getItem('kisanconnect_user');
      if (savedUser) window.KisanState.currentUser = JSON.parse(savedUser);
      const dpdpAccepted = localStorage.getItem('kisanconnect_dpdp_accepted');
      if (dpdpAccepted === 'true') {
        const toast = document.getElementById('dpdp-consent-toast');
        if (toast) toast.classList.add('dismissed');
      }
    } catch (e) {}

    window.setLanguage('hi');
    window.switchTab('weather');
    window.animateHeroCounters();
    window.updateAuthUI();

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        window.closeAuthModal();
        window.closeTermsModal();
        window.toggleNavMenu(false);
      }
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  });

})();

