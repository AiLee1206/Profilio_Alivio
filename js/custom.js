// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  var modalImg = document.getElementById("img01");
  modalImg.src = element.src;
  modalImg.alt = element.alt;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// const prev = document.querySelector(".previous");
// const nex = document.querySelector(".next");
// const portfolio = document.querySelector("#portfolio");

// prev.addEventListener("click", sliderfunction);

// function sliderfunction() {
//   const portfolioChildren =  event.target.parentElement.children[0];
//   const portfolioImg =  portfolioChildren.children[0].src;
//   console.log(portfolioImg);
// }

// 作品集選單開闔
$('#careers').click(function(){
  $(this).parent().toggleClass('collapsed');
  /* parent父元素-往上  find後代 往下 */         
});
$('#personalJobs').click(function(){
  $(this).parent().toggleClass('collapsed');         
});

// go to top
//Get the button
var mybutton = document.getElementById("gotoTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Step-through galleries (click a card -> walk through the app screens)
var galleries = {
  ul: [
    { src: "images/ul_app_1_home.png",         caption: "Home &mdash; energy flow overview (Home / Solar / Battery / Grid)" },
    { src: "images/ul_app_2_energy.png",       caption: "Energy &mdash; generation, consumption &amp; daily curve" },
    { src: "images/ul_app_3_battery.jpg",      caption: "Battery &mdash; SOC and cell-level voltage / temperature" },
    { src: "images/ul_app_4_notification.png", caption: "Notifications &mdash; events &amp; alerts" },
    { src: "images/ul_app_5_usersite.png",     caption: "User Site &mdash; plant list &amp; site switching (US market)" }
  ],
  m2j: [
    { src: "images/m2j_2_select.png",    caption: "Commissioning &mdash; detect &amp; select the Data Collector (D1J)" },
    { src: "images/m2j_3_internet.png",  caption: "Commissioning &mdash; connect the Data Collector to the internet" },
    { src: "images/m2j_4_login.png",     caption: "Commissioning &mdash; installer login (guided 5-step flow)" },
    { src: "images/m2j_5_planttype.jpg", caption: "Commissioning &mdash; plant type configuration" },
    { src: "images/m2j_6_battery.png",   caption: "Commissioning &mdash; battery system configuration" },
    { src: "images/m2j_7_home.jpg",      caption: "Monitoring &mdash; live home dashboard (real-time generation)" },
    { src: "images/m2j_8_dataviz.jpg",   caption: "Monitoring &mdash; daily energy data visualization (Syncfusion)" }
  ],
  ai: [
    { src: "images/ai_3_components.png", caption: "Intelligent Analysis &mdash; component-level health scan (H-Bridge / MOSFETs / transistors)" },
    { src: "images/ai_3_outlier.png",   caption: "Outlier Analysis &mdash; system-wide inverter scan &amp; result summary (9 / 10)" },
    { src: "images/ai_2_inverter.png",  caption: "Intelligent Analysis &mdash; per-inverter health check (ID 3: thermal warning)" },
    { src: "images/ai_1_diagnosis.png", caption: "AI Image Diagnosis &mdash; photo-based anomaly detection with fix-it guidance (cable bend &gt; 0&deg;)" },
    { src: "images/ai_2_schematic.png", caption: "AI Image Diagnosis &mdash; flagged region plus a schematic showing the correct cable angle" },
    { src: "images/ai_6_design_states.jpg", caption: "Design process &mdash; state variants explored in Figma (individual / outlier &times; progress / error)" }
  ],
  jet: [
    { src: "images/jet_1_dashboard.jpg", caption: "Control center &mdash; connectivity, power-meter channel mapping, inverter setup &amp; the automated test tree (one-click sweep)" },
    { src: "images/jet_2_pass.jpg",      caption: "Live run &mdash; real-time judgment log (Modbus power, PF, THD, IHDF criteria) with an instant PASS verdict" },
    { src: "images/jet_3_hardware.jpg",  caption: "Hardware setup &mdash; instrument discovery &amp; SCPI resource binding (AC source, power meter, oscilloscope, DC source)" },
    { src: "images/jet_5_control.jpg",   caption: "Manual control &mdash; AC &amp; DC (SAS) source panel for ad-hoc bring-up and debugging" },
    { src: "images/jet_4_meter.jpg",     caption: "Meter panel &mdash; live 6-element power readings with one-tap Update &amp; Init" },
    { src: "images/jet_6_other.jpg",     caption: "Other functions &mdash; DIP voltage-dip loop test (simulates a momentary AC sag to verify PCS response)" }
  ],
  ivs: [
    { src: "images/ACTi_04.jpg", caption: "Missing-object detection &mdash; triggers a voice alert when an object goes missing (banks, markets)" },
    { src: "images/ACTi_08.jpg", caption: "Audio playback alerts &mdash; for venues such as banks and markets" },
    { src: "images/ACTi_09.jpg", caption: "Full function set &mdash; overview of all Algorithm Settings icons" }
  ],
  actiux: [
    { src: "images/sketch.jpg",  caption: "Hand-drawn wireframes &mdash; early ideation of every screen &amp; state" },
    { src: "images/ACTi_06.jpg", caption: "End-to-end UX flow &mdash; Sites &rarr; Camera List &rarr; Live View &rarr; Playback, mapped screen by screen" },
    { src: "images/ACTi_05.jpg", caption: "Final mobile UI &mdash; ACTi surveillance client for iPad, iPhone &amp; Android" }
  ],
  smarthome: [
    { src: "images/sh_2_control.jpg",    caption: "One-tap control &mdash; lighting, energy (EV / home battery) and appliances (HVAC, washer), grouped by room" },
    { src: "images/sh_3_livemode.jpg",   caption: "Live Mode &mdash; routine, weekend &amp; travel schedules that shift consumption around solar" },
    { src: "images/sh_4_hems.jpg",       caption: "HEMS architecture &mdash; app, cloud, HomeKit, EV + V2H, battery &amp; AI appliances in one home-energy loop" }
  ],
  vue: [
    { src: "images/vue_1_dashboard.png", caption: "Dashboard &mdash; real-time fleet power curve, utilization gauge &amp; KPI cards (dark mode)" },
    { src: "images/vue_2_plants.png",    caption: "Plants &mdash; searchable list with status, power, energy &amp; efficiency" },
    { src: "images/vue_3_detail.png",    caption: "Plant detail &mdash; per-site KPIs and live generation curve (Vue Router dynamic route)" }
  ]
};
var currentGallery = [];
var galIndex = 0;

function openGallery(name, i) {
  currentGallery = galleries[name] || [];
  galIndex = i || 0;
  renderSlide();
  document.getElementById("ulGallery").style.display = "flex";
}
function closeGallery() {
  document.getElementById("ulGallery").style.display = "none";
}
function galleryStep(dir) {
  if (!currentGallery.length) return;
  galIndex = (galIndex + dir + currentGallery.length) % currentGallery.length;
  renderSlide();
}
function renderSlide() {
  var s = currentGallery[galIndex];
  if (!s) return;
  document.getElementById("ulGalleryImg").src = s.src;
  document.getElementById("ulGalleryCaption").innerHTML = s.caption;
  document.getElementById("ulGalleryCounter").innerHTML = (galIndex + 1) + " / " + currentGallery.length;
}

// Keyboard navigation for the gallery
document.addEventListener("keydown", function(e) {
  var g = document.getElementById("ulGallery");
  if (g && g.style.display === "flex") {
    if (e.key === "ArrowRight") galleryStep(1);
    else if (e.key === "ArrowLeft") galleryStep(-1);
    else if (e.key === "Escape") closeGallery();
  }
});

// Sidebar logo: show the soft shadow only after the nav starts scrolling beneath it
(function () {
  var logoBox = document.querySelector('.aiLogo-container');
  var slider = document.querySelector('.ai-slider');
  var sidebar = document.getElementById('mySidebar');
  if (!logoBox) return;
  function updateLogoShadow() {
    // Desktop 3-tier: grey gradient hugs the dashed divider (inset on the scroll area)
    if (slider) slider.classList.toggle('top-shadow', slider.scrollTop > 0);
    // Mobile drawer: whole sidebar scrolls, shadow hangs off the sticky logo box
    if (sidebar) logoBox.classList.toggle('logo-shadow', sidebar.scrollTop > 0);
  }
  if (slider) slider.addEventListener('scroll', updateLogoShadow);
  if (sidebar) sidebar.addEventListener('scroll', updateLogoShadow);
})();

// Skill bars: animate width from 0 to target when the skills section scrolls into view
(function () {
  var bars = document.querySelectorAll('.ai-skills .ai-dark-blue');
  if (!bars.length) return;
  bars.forEach(function (b) {
    b.dataset.target = b.style.width || '0';
    b.style.width = '0';
  });
  function reveal() {
    bars.forEach(function (b) { b.style.width = b.dataset.target; });
  }
  var section = document.querySelector('.ai-skills');
  if ('IntersectionObserver' in window && section) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { reveal(); io.disconnect(); }
      });
    }, { threshold: 0.25 });
    io.observe(section);
  } else {
    reveal();
  }
})();

// Current-role card carousel: arrows slide one card at a time
function scrollCarousel(dir) {
  var c = document.querySelector('.card-carousel');
  if (!c) return;
  var card = c.querySelector('.w3-third');
  var step = card ? card.getBoundingClientRect().width + 16 : 320;
  c.scrollBy({ left: dir * step, behavior: 'smooth' });
}
(function () {
  var c = document.querySelector('.card-carousel');
  if (!c) return;
  var prev = document.querySelector('.car-prev');
  var next = document.querySelector('.car-next');
  function updateArrows() {
    prev.style.display = c.scrollLeft > 10 ? 'flex' : 'none';
    next.style.display = c.scrollLeft < c.scrollWidth - c.clientWidth - 10 ? 'flex' : 'none';
  }
  c.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
})();


// Uniform cards: clamp long project descriptions with a Read more toggle
(function () {
  document.querySelectorAll('.ai-content').forEach(function (content) {
    var p = content.querySelector('p');
    if (!p || p.querySelector('.gallery-hint')) return; // carousel cards use equal-height layout
    p.classList.add('card-desc');
    if (p.scrollHeight - p.clientHeight > 4) {
      var more = document.createElement('span');
      more.className = 'read-more';
      more.textContent = 'Read more';
      more.addEventListener('click', function () {
        var open = p.classList.toggle('expanded');
        more.textContent = open ? 'Show less' : 'Read more';
      });
      p.insertAdjacentElement('afterend', more);
    }
  });
})();


// Footer: keep the copyright year current automatically (falls back to the hardcoded 2026 if JS is off)
(function () {
  var y = document.getElementById('footer-year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Thesis abstract: reveal paragraphs 2-3 with an inline toggle after the first paragraph
(function () {
  var toggle = document.querySelector('.thesis-toggle');
  var abstract = document.querySelector('.thesis-abstract');
  if (!toggle || !abstract) return;
  function flip() {
    var open = abstract.classList.toggle('expanded');
    toggle.textContent = open ? 'Show less' : 'Read full abstract';
  }
  toggle.addEventListener('click', flip);
  toggle.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
  });
})();
