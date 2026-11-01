// Shared helpers for the Arabic revision site.
const AR_RE = /[؀-ۿ]/;

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isArabic(s) {
  return AR_RE.test(s);
}

// Wrap text in an Arabic span when it contains Arabic letters.
function txt(s) {
  return isArabic(s) ? `<span class="ar" lang="ar">${esc(s)}</span>` : esc(s);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let arVoice = null;
function pickVoice() {
  if (!("speechSynthesis" in window)) return;
  const voices = speechSynthesis.getVoices();
  arVoice = voices.find(v => /^ar(-|_)SA/i.test(v.lang)) || voices.find(v => /^ar/i.test(v.lang)) || null;
}
if ("speechSynthesis" in window) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}

function speak(text, rate) {
  if (!("speechSynthesis" in window)) {
    alert("This browser cannot read text aloud. Try Safari or Chrome.");
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";
  if (arVoice) u.voice = arVoice;
  u.rate = rate || 0.85;
  speechSynthesis.speak(u);
}

function stopSpeak() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}

function sayBtn(text) {
  return `<button class="say" title="Listen" data-say="${esc(text)}">🔊</button>`;
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-say]");
  if (b) speak(b.getAttribute("data-say"));
});

function renderHeader(active) {
  const links = [
    ["index.html", "Home", "home"],
    ["review.html", "Key Points", "review"],
    ["vocab.html", "Vocabulary", "vocab"],
    ["exam.html?set=1", "Exam A", "exam1"],
    ["exam.html?set=2", "Exam B", "exam2"],
  ];
  const nav = links
    .map(([href, label, id]) => `<a href="${href}" class="${id === active ? "active" : ""}">${label}</a>`)
    .join("");
  const h = document.createElement("header");
  h.className = "site";
  h.innerHTML = `<div class="inner"><a class="logo" href="index.html">🏅 Candy · Arabic Revision</a><nav>${nav}</nav></div>`;
  document.body.prepend(h);

  const f = document.createElement("footer");
  f.className = "site";
  f.textContent = "Year 8 Arabic · Sports & Hobbies unit · Based on class vocabulary sheets";
  document.body.append(f);
}
