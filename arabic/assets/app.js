// Shared helpers for the Arabic revision site.
const AR_RE = /[؀-ۿ]/;

// Show script errors on the page instead of a blank screen (helps debug on iPad).
window.addEventListener("error", e => {
  const main = document.querySelector("main");
  if (!main) return;
  const box = document.createElement("div");
  box.className = "tip";
  box.textContent = `⚠️ Something went wrong loading this page: ${e.message} (${(e.filename || "").split("/").pop()}:${e.lineno}). Try reloading the page.`;
  main.prepend(box);
});

// Storage that never throws (private mode / blocked storage falls back to memory).
function makeStore(kind) {
  const mem = {};
  let s = null;
  try {
    s = window[kind];
    const k = "__test__";
    s.setItem(k, "1");
    s.removeItem(k);
  } catch (err) {
    s = null;
  }
  return {
    get: k => { try { return s ? s.getItem(k) : (k in mem ? mem[k] : null); } catch (err) { return null; } },
    set: (k, v) => { try { if (s) s.setItem(k, String(v)); else mem[k] = String(v); } catch (err) { mem[k] = String(v); } },
    remove: k => { try { if (s) s.removeItem(k); } catch (err) { /* ignore */ } delete mem[k]; },
  };
}
const store = makeStore("localStorage");
const sess = makeStore("sessionStorage");

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

// Keep a reference to the current utterance: some browsers stop firing
// events if the utterance object is garbage-collected.
let currentUtterance = null;
const stopListeners = [];

// handlers (optional): { onstart, onboundary, onend }
function speak(text, rate, handlers) {
  if (!("speechSynthesis" in window)) {
    alert("This browser cannot read text aloud. Try Safari or Chrome.");
    return null;
  }
  stopSpeak();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";
  if (arVoice) u.voice = arVoice;
  u.rate = rate || 0.85;
  if (handlers) {
    if (handlers.onstart) u.onstart = handlers.onstart;
    if (handlers.onboundary) u.onboundary = handlers.onboundary;
    if (handlers.onend) { u.onend = handlers.onend; u.onerror = handlers.onend; }
  }
  currentUtterance = u;
  speechSynthesis.speak(u);
  return u;
}

function stopSpeak() {
  stopListeners.forEach(fn => fn());
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  currentUtterance = null;
}

function onStopSpeak(fn) {
  stopListeners.push(fn);
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
