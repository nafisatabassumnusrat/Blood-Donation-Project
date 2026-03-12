// ─── Sample Donor Data ──────────────────────────────
const sampleDonors = [
  {id:'s1',name:'Mohammad Rahman',blood:'O+',location:'Dhaka, Mirpur',phone:'01711-234567',date:'2025-01-15'},
  {id:'s2',name:'Fatima Akter',blood:'A+',location:'Dhaka, Gulshan',phone:'01811-345678',date:'2024-12-20'},
  {id:'s3',name:'Karim Hossain',blood:'B+',location:'Chittagong, Agrabad',phone:'01911-456789',date:'2025-02-10'},
  {id:'s4',name:'Sumaiya Islam',blood:'AB-',location:'Rajshahi, Shaheb Bazar',phone:'01611-567890',date:'2024-11-05'},
  {id:'s5',name:'Arif Billah',blood:'O-',location:'Sylhet, Zindabazar',phone:'01511-678901',date:'2025-01-28'},
  {id:'s6',name:'Nasrin Sultana',blood:'A-',location:'Khulna, KDA',phone:'01712-789012',date:'2024-10-12'},
  {id:'s7',name:'Tanvir Ahmed',blood:'B-',location:'Barisal, Natun Bazar',phone:'01812-890123',date:'2025-03-01'},
  {id:'s8',name:'Sadia Khanam',blood:'AB+',location:'Dhaka, Dhanmondi',phone:'01912-901234',date:'2024-09-18'},
  {id:'s9',name:'Imran Hasan',blood:'O+',location:'Comilla, Kandirpar',phone:'01612-012345',date:'2025-02-22'},
  {id:'s10',name:'Roksana Begum',blood:'A+',location:'Gazipur, Tongi',phone:'01712-123456',date:'2024-12-30'},
  {id:'s11',name:'Shakil Mahmud',blood:'B+',location:'Narayanganj, Fatullah',phone:'01812-234567',date:'2025-01-10'},
  {id:'s12',name:'Mitu Akter',blood:'O-',location:'Mymensingh, Ganginarpar',phone:'01912-345678',date:'2024-08-25'},
];

// ─── Init ────────────────────────────────────────────
function initDonors() {
  if (!localStorage.getItem('bd_donors')) {
    localStorage.setItem('bd_donors', JSON.stringify(sampleDonors));
  }
}

function getDonors() {
  return JSON.parse(localStorage.getItem('bd_donors') || '[]');
}

initDonors();

// ─── Dark Mode ───────────────────────────────────────
const html = document.documentElement;
const savedTheme = localStorage.getItem('bd_theme') || 'light';
html.setAttribute('data-theme', savedTheme);

document.getElementById('toggleTrack').addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('bd_theme', next);
});

// ─── Language Toggle ─────────────────────────────────
let lang = 'en';

const translations = {
  en: {
    // Navbar
    navHome:'Home', navRegister:'Register Donor', navFind:'Find Donor',
    navEmergency:'Emergency', navAbout:'About', navPrivacy:'Privacy Policy', navTerms:'Terms',
    langBtn:'বাংলা',
    // Hero
    heroTag:'🇧🇩 Bangladesh Blood Donor Network',
    heroTitle:'Save Lives.<br><span class="red">Donate Blood.</span><br>Find Donors.',
    heroSubtitle:'Connect with blood donors instantly during emergency situations across Bangladesh. Every drop counts — be a hero today.',
    heroBtnReg:'❤️ Register as Donor', heroBtnFind:'🔍 Find Blood Donor',
    // Register section
    regSectionLabel:'Become a Hero',
    regSectionTitle:'Register as a Blood Donor',
    regSectionSub:'Join thousands of voluntary donors across Bangladesh. Your single donation can save up to 3 lives.',
    regPerk1:'Free registration, no cost at all',
    regPerk2:'Your data is stored locally & privately',
    regPerk3:'Get contacted only during emergencies',
    regPerk4:'Join a community of life-savers',
    regPerk5:'Healthy adults can donate every 3 months',
    regFormTitle:'📋 Donor Registration Form',
    labelName:'Full Name', labelBlood:'Blood Group', labelPhone:'Phone Number',
    labelLocation:'Location / Area', labelDate:'Last Donation Date',
    labelDateOpt:'(optional)',
    phName:'Enter your full name', phPhone:'+880 1XXX-XXXXXX', phLocation:'e.g. Dhaka, Mirpur',
    selectBlood:'Select Blood Group',
    regBtn:'❤️ Register as Donor',
    errName:'Please enter your full name',
    errBlood:'Please select a blood group',
    errPhone:'Enter a valid BD number (e.g. 01711-234567)',
    errLocation:'Please enter your location',
    // Find section
    findLabel:'Search Donors', findTitle:'Find a Blood Donor',
    findSub:'Search our donor database by blood group and location',
    labelSearchBlood:'Blood Group', allBlood:'All Blood Groups',
    labelSearchArea:'Area / Location', phArea:'e.g. Dhaka, Chittagong...',
    searchBtn:'🔍 Search',
    // Emergency
    emergLabel:'Emergency Contacts', emergTitle:'Emergency Helpline',
    emergSub:'Call these numbers immediately in case of blood emergencies',
    // Awareness
    awareLabel:'Health Tips', awareTitle:'Blood Donation Awareness',
    awareSub:'Everything you need to know about donating blood safely',
    // About
    aboutLabel:'Our Mission', aboutTitle:'About This Project',
    // Footer
    footerQuick:'Quick Links', footerInfo:'Information', footerDev:'Developer',
    footerCredit:'Developed & Designed by',
    footerCopy:'© 2025 Blood Donor Finder Bangladesh. Built for social good. 🇧🇩',
    footerMade:'Made with ❤️ by Nafisa Tabassum Nusrat',
    noFound:'No donors found',
    noFoundSub:'Try different filters, or register as a donor to help others.'
  },
  bn: {
    navHome:'হোম', navRegister:'দাতা নিবন্ধন', navFind:'দাতা খুঁজুন',
    navEmergency:'জরুরি', navAbout:'আমাদের সম্পর্কে', navPrivacy:'গোপনীয়তা নীতি', navTerms:'শর্তাবলী',
    langBtn:'English',
    heroTag:'🇧🇩 বাংলাদেশ রক্তদাতা নেটওয়ার্ক',
    heroTitle:'জীবন বাঁচান।<br><span class="red">রক্ত দান করুন।</span><br>দাতা খুঁজুন।',
    heroSubtitle:'বাংলাদেশ জুড়ে জরুরি পরিস্থিতিতে রক্তদাতাদের সাথে তাৎক্ষণিকভাবে সংযোগ করুন। প্রতিটি ফোঁটা গুরুত্বপূর্ণ।',
    heroBtnReg:'❤️ দাতা হিসেবে নিবন্ধন করুন', heroBtnFind:'🔍 রক্তদাতা খুঁজুন',
    regSectionLabel:'হিরো হোন',
    regSectionTitle:'রক্তদাতা হিসেবে নিবন্ধন করুন',
    regSectionSub:'বাংলাদেশ জুড়ে হাজার হাজার স্বেচ্ছাসেবী দাতাদের সাথে যোগ দিন। আপনার একটি দান ৩টি জীবন বাঁচাতে পারে।',
    regPerk1:'বিনামূল্যে নিবন্ধন, কোনো খরচ নেই',
    regPerk2:'আপনার তথ্য স্থানীয়ভাবে ও গোপনে সংরক্ষিত',
    regPerk3:'শুধুমাত্র জরুরি পরিস্থিতিতে যোগাযোগ করা হবে',
    regPerk4:'জীবন-রক্ষাকারীদের একটি সম্প্রদায়ে যোগ দিন',
    regPerk5:'সুস্থ প্রাপ্তবয়স্করা প্রতি ৩ মাসে দান করতে পারেন',
    regFormTitle:'📋 দাতা নিবন্ধন ফর্ম',
    labelName:'পূর্ণ নাম', labelBlood:'রক্তের গ্রুপ', labelPhone:'ফোন নম্বর',
    labelLocation:'অবস্থান / এলাকা', labelDate:'শেষ রক্তদানের তারিখ',
    labelDateOpt:'(ঐচ্ছিক)',
    phName:'আপনার পূর্ণ নাম লিখুন', phPhone:'+৮৮০ ০১XXX-XXXXXX', phLocation:'যেমন: ঢাকা, মিরপুর',
    selectBlood:'রক্তের গ্রুপ নির্বাচন করুন',
    regBtn:'❤️ দাতা হিসেবে নিবন্ধন করুন',
    errName:'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন',
    errBlood:'অনুগ্রহ করে রক্তের গ্রুপ নির্বাচন করুন',
    errPhone:'সঠিক বাংলাদেশি নম্বর দিন (যেমন: 01711-234567)',
    errLocation:'অনুগ্রহ করে আপনার অবস্থান লিখুন',
    findLabel:'দাতা অনুসন্ধান', findTitle:'একজন রক্তদাতা খুঁজুন',
    findSub:'রক্তের গ্রুপ এবং অবস্থান দিয়ে আমাদের দাতা ডেটাবেস অনুসন্ধান করুন',
    labelSearchBlood:'রক্তের গ্রুপ', allBlood:'সকল রক্তের গ্রুপ',
    labelSearchArea:'এলাকা / অবস্থান', phArea:'যেমন: ঢাকা, চট্টগ্রাম...',
    searchBtn:'🔍 অনুসন্ধান',
    emergLabel:'জরুরি যোগাযোগ', emergTitle:'জরুরি হেল্পলাইন',
    emergSub:'রক্তের জরুরি প্রয়োজনে এখনই এই নম্বরগুলোতে কল করুন',
    awareLabel:'স্বাস্থ্য টিপস', awareTitle:'রক্তদান সচেতনতা',
    awareSub:'নিরাপদে রক্তদান সম্পর্কে আপনার যা জানা দরকার',
    aboutLabel:'আমাদের লক্ষ্য', aboutTitle:'এই প্রকল্প সম্পর্কে',
    footerQuick:'দ্রুত লিঙ্ক', footerInfo:'তথ্য', footerDev:'ডেভেলপার',
    footerCredit:'তৈরি ও ডিজাইন করেছেন',
    footerCopy:'© ২০২৫ ব্লাড ডোনার ফাইন্ডার বাংলাদেশ। সামাজিক কল্যাণে নির্মিত। 🇧🇩',
    footerMade:'❤️ দিয়ে তৈরি করেছেন নাফিসা তাবাস্সুম নুসরাত',
    noFound:'কোনো দাতা পাওয়া যায়নি',
    noFoundSub:'ফিল্টার পরিবর্তন করুন, অথবা নিজে দাতা হিসেবে নিবন্ধন করুন।'
  }
};

function applyLang(t) {
  const isBn = (t === translations.bn);
  // innerHTML elements (data-en / data-bn)
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = isBn ? el.getAttribute('data-bn') : el.getAttribute('data-en');
  });
  // textContent elements (data-en-text / data-bn-text)
  document.querySelectorAll('[data-en-text]').forEach(el => {
    el.textContent = isBn ? el.getAttribute('data-bn-text') : el.getAttribute('data-en-text');
  });
  // placeholder elements
  document.querySelectorAll('[data-en-ph]').forEach(el => {
    el.placeholder = isBn ? el.getAttribute('data-bn-ph') : el.getAttribute('data-en-ph');
  });
  // lang buttons
  document.getElementById('langToggle').textContent  = t.langBtn;
  document.getElementById('langToggle2').textContent = t.langBtn;
  // error messages (update live text)
  document.getElementById('err-name').textContent     = t.errName;
  document.getElementById('err-blood').textContent    = t.errBlood;
  document.getElementById('err-phone').textContent    = t.errPhone;
  document.getElementById('err-location').textContent = t.errLocation;
  // re-render donors so "no found" message also translates
  renderDonors(getDonors());
}

function toggleLang() {
  lang = lang === 'en' ? 'bn' : 'en';
  applyLang(translations[lang]);
}
document.getElementById('langToggle').addEventListener('click', toggleLang);
document.getElementById('langToggle2').addEventListener('click', toggleLang);

// ─── Mobile Menu ─────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});
function closeMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('open');
}

// ─── Helpers ──────────────────────────────────────────
function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── Render Donors ────────────────────────────────────
function renderDonors(donors) {
  const grid = document.getElementById('donorsGrid');
  if (!donors || !donors.length) {
    const noFound = (typeof lang !== 'undefined' && lang === 'bn') ? 'কোনো দাতা পাওয়া যায়নি' : 'No donors found';
    const noSub   = (typeof lang !== 'undefined' && lang === 'bn') ? 'ফিল্টার পরিবর্তন করুন, অথবা নিজে দাতা হিসেবে নিবন্ধন করুন।' : 'Try different filters, or register as a donor to help others.';
    grid.innerHTML = `<div class="no-donor">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="64" height="64">
        <circle cx="12" cy="12" r="10"/><path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01"/>
      </svg>
      <p>${noFound}</p>
      <span>${noSub}</span>
    </div>`;
    return;
  }
  const bgColors  = {'A+':'#ffe0e0','A-':'#ffd0d0','B+':'#e0f0ff','B-':'#d0e8ff','O+':'#e0ffe8','O-':'#d0fce0','AB+':'#f3e0ff','AB-':'#ead0ff'};
  const txtColors = {'A+':'#c1121f','A-':'#9d0208','B+':'#0077b6','B-':'#023e8a','O+':'#1b7a3e','O-':'#155d27','AB+':'#7b2d8b','AB-':'#5c1276'};
  grid.innerHTML = donors.map(d => {
    const badgeBg = bgColors[d.blood]  || '#f0f0f0';
    const badgeTc = txtColors[d.blood] || '#333';
    return `<div class="donor-card">
      <div class="donor-blood">${escHtml(d.blood)}</div>
      <div class="donor-name">${escHtml(d.name)}</div>
      <span style="display:inline-block;padding:4px 12px;border-radius:20px;font-size:0.75rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:${badgeBg};color:${badgeTc};margin-bottom:4px">${escHtml(d.blood)}</span>
      <div class="donor-meta">
        <div class="donor-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${escHtml(d.location)}
        </div>
        <div class="donor-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63 19.79 19.79 0 01.91 1a2 2 0 012-.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          ${escHtml(d.phone)}
        </div>
        ${d.date ? `<div class="donor-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Last donated: ${escHtml(d.date)}</div>` : ''}
      </div>
      <a href="tel:${escHtml(d.phone)}" class="btn-call">📞 Call Donor</a>
    </div>`;
  }).join('');
}

// ─── Toast ────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✅' : '❌'}</span><span class="toast-msg">${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ─── Form Validation & Registration ──────────────────
function setFieldError(inputId, errId, show) {
  const input = document.getElementById(inputId);
  const err   = document.getElementById(errId);
  if (!input || !err) return;
  if (show) {
    err.style.display = 'block';
    input.style.borderColor = '#e63946';
    input.style.boxShadow   = '0 0 0 3px rgba(230,57,70,0.15)';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
  } else {
    err.style.display = 'none';
    input.style.borderColor = '';
    input.style.boxShadow   = '';
  }
}

function validatePhone(p) {
  // Accept formats: 017XXXXXXXX, 01711-234567, +8801711234567, 8801711234567
  return /^(\+?880|0)?1[3-9]\d{8,9}$/.test(p.replace(/[\s\-]/g,''));
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nameEl     = document.getElementById('reg-name');
  const bloodEl    = document.getElementById('reg-blood');
  const phoneEl    = document.getElementById('reg-phone');
  const locationEl = document.getElementById('reg-location');
  const dateEl     = document.getElementById('reg-date');

  const name     = nameEl.value.trim();
  const blood    = bloodEl.value;
  const phone    = phoneEl.value.trim();
  const location = locationEl.value.trim();
  const date     = dateEl.value;

  let valid = true;

  // reset all first
  ['reg-name','reg-blood','reg-phone','reg-location'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.borderColor=''; el.style.boxShadow=''; }
  });
  document.querySelectorAll('.error-msg').forEach(el => el.style.display='none');

  if (!name || name.length < 2) {
    setFieldError('reg-name','err-name',true);
    valid = false;
  }
  if (!blood) {
    setFieldError('reg-blood','err-blood',true);
    valid = false;
  }
  if (!phone || !validatePhone(phone)) {
    setFieldError('reg-phone','err-phone',true);
    valid = false;
  }
  if (!location || location.length < 2) {
    setFieldError('reg-location','err-location',true);
    valid = false;
  }

  if (!valid) {
    showToast(lang==='bn' ? '⚠️ সব ঘর সঠিকভাবে পূরণ করুন' : '⚠️ Please fill in all required fields correctly.', 'error');
    return;
  }

  const donor = {
    id: 'u_' + Date.now(),
    name, blood, phone, location,
    date: date || null,
    registered: new Date().toISOString()
  };

  const donors = getDonors();
  donors.unshift(donor);
  localStorage.setItem('bd_donors', JSON.stringify(donors));

  this.reset();
  // reset input styles after reset
  ['reg-name','reg-blood','reg-phone','reg-location','reg-date'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.borderColor=''; el.style.boxShadow=''; }
  });

  showToast(lang==='bn' ? '🎉 আপনি সফলভাবে রক্তদাতা হিসেবে নিবন্ধিত হয়েছেন! ধন্যবাদ!' : '🎉 You have been registered as a blood donor! Thank you!', 'success');
  renderDonors(getDonors());
});

// ─── Search Donors ────────────────────────────────────
function searchDonors() {
  const blood = document.getElementById('search-blood').value;
  const area = document.getElementById('search-area').value.trim().toLowerCase();
  let donors = getDonors();
  if (blood) donors = donors.filter(d => d.blood === blood);
  if (area) donors = donors.filter(d => d.location.toLowerCase().includes(area));
  renderDonors(donors);
}

document.getElementById('search-blood').addEventListener('change', searchDonors);
document.getElementById('search-area').addEventListener('input', searchDonors);

// ─── Initial Render ───────────────────────────────────
renderDonors(getDonors());

// ─── Active Nav Highlight ─────────────────────────────
const sections = document.querySelectorAll('section[id], .hero[id]');
const navLinks = document.querySelectorAll('.nav-menu a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ─── Loading Screen ───────────────────────────────────
(function() {
  const loader  = document.getElementById('loader');
  const bar     = document.getElementById('loaderBar');
  let progress  = 0;
  const total   = 5000; // 5 seconds
  const interval = 80;
  const step    = (interval / total) * 100;

  const timer = setInterval(() => {
    progress = Math.min(progress + step + (Math.random() * 0.3), 99);
    bar.style.width = progress + '%';
  }, interval);

  window.addEventListener('load', () => {
    const remaining = total - (performance.now());
    const hideAfter = Math.max(remaining, 0);
    setTimeout(() => {
      clearInterval(timer);
      bar.style.width = '100%';
      setTimeout(() => {
        loader.classList.add('hide');
        document.body.style.overflow = '';
      }, 300);
    }, hideAfter);
  });

  document.body.style.overflow = 'hidden';
})();

// ─── Scroll Cursor ────────────────────────────────────
(function() {
  const cursor = document.getElementById('scrollCursor');
  let scrollTimeout;
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  window.addEventListener('scroll', () => {
    cursor.classList.add('visible');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => cursor.classList.remove('visible'), 800);
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  }, { passive: true });
})();

// ─── Scroll Reveal (re-triggers every time section enters viewport) ──
(function() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
})();

// ─── Legal Page Modals ────────────────────────────────
function openModal(type) {
  const overlay = document.getElementById('modal-' + type);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const body = overlay.querySelector('.lp-body');
  if (body) body.scrollTop = 0;
  overlay.querySelectorAll('.lp-toc-item').forEach(i => i.classList.remove('active'));
  const firstItem = overlay.querySelector('.lp-toc-item');
  if (firstItem) firstItem.classList.add('active');
  overlay.querySelectorAll('.lp-toc-item').forEach(item => {
    item.onclick = function(e) {
      e.preventDefault();
      const sec = document.getElementById(this.getAttribute('data-sec'));
      if (sec && body) body.scrollTo({ top: sec.offsetTop - 20, behavior: 'smooth' });
      overlay.querySelectorAll('.lp-toc-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    };
  });
  if (body) {
    body.onscroll = function() {
      overlay.querySelectorAll('.lp-section').forEach(s => {
        if (body.scrollTop >= s.offsetTop - 60) {
          overlay.querySelectorAll('.lp-toc-item').forEach(i =>
            i.classList.toggle('active', i.getAttribute('data-sec') === s.id));
        }
      });
    };
  }
}
function closeModal(type) {
  document.getElementById('modal-' + type).classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('.lp-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) { o.classList.remove('open'); document.body.style.overflow = ''; } });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.lp-overlay.open').forEach(o => { o.classList.remove('open'); document.body.style.overflow = ''; });
});