(() => {
  const $ = (s) => document.querySelector(s);
  const catById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
  const projects = PROJECTS.filter((p) => catById[p.category])
    .map((p, i) => ({ ...p, n: i + 1 }))
    .sort((a, b) => (b.year || 0) - (a.year || 0));

  const esc = (s = "") => String(s).replace(/[&<>"']/g, (ch) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

  /* ---------- site text ---------- */
  document.querySelectorAll("[data-site]").forEach((el) => {
    el.textContent = SITE[el.dataset.site] || "";
  });
  document.title = `${SITE.name} — תיק עבודות`;
  const yr = new Date().getFullYear();
  $("#year").textContent = yr;
  $("#year2").textContent = yr;

  /* ---------- icons for generated thumbnails ---------- */
  const ICONS = {
    video: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><rect x="8" y="22" width="84" height="56" rx="8"/><path d="M42 38 L62 50 L42 62 Z" fill="currentColor"/></svg>',
    web: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><rect x="8" y="18" width="84" height="64" rx="8"/><path d="M8 34 H92"/><circle cx="18" cy="26" r="2.5" fill="currentColor"/><circle cx="26" cy="26" r="2.5" fill="currentColor"/><path d="M38 52 L28 60 L38 68 M62 52 L72 60 L62 68 M54 48 L46 72"/></svg>',
    graphics: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><circle cx="38" cy="40" r="24"/><rect x="44" y="46" width="40" height="40" rx="4" fill="currentColor" fill-opacity=".25"/><path d="M20 86 L34 62 L48 86 Z"/></svg>',
    lighting: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><path d="M38 10 H62 L58 26 H42 Z"/><path d="M42 26 L14 92 H86 L58 26" fill="currentColor" fill-opacity=".18" stroke-dasharray="4 5"/><ellipse cx="50" cy="92" rx="36" ry="4"/></svg>',
    software: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><rect x="8" y="18" width="84" height="64" rx="8"/><path d="M24 40 L36 50 L24 60 M44 62 H64"/></svg>',
    default: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"/></svg>',
  };
  const genThumb = (p) =>
    `<div class="gen">${ICONS[p.category] || ICONS.default}<span class="gen-num">${String(p.n).padStart(2, "0")}</span></div>`;

  /* ---------- hero rotator + stats ---------- */
  const rot = $("#rotWord");
  const usedCats = CATEGORIES.filter((c) => projects.some((p) => p.category === c.id));
  let ri = 0;
  const setWord = (c) => { rot.textContent = c.label; rot.style.color = c.color; };
  if (usedCats.length) {
    setWord(usedCats[0]);
    setInterval(() => {
      rot.classList.add("out");
      setTimeout(() => {
        ri = (ri + 1) % usedCats.length;
        setWord(usedCats[ri]);
        rot.classList.remove("out");
        rot.classList.add("in-start");
        rot.offsetHeight; // reflow
        rot.classList.remove("in-start");
      }, 450);
    }, 2200);
  }

  const countUp = (el, to) => {
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / 1200);
      el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  countUp($("#statProjects"), projects.length);
  countUp($("#statCats"), usedCats.length);

  /* ---------- marquee ---------- */
  let fn = 0;
  const frames = () => usedCats.map((c) => {
    fn++;
    return `<span class="cell"><span class="frame" style="--c:${c.color}"><b>${esc(c.label)}</b><i>▸ ${String(fn).padStart(2, "0")}A</i></span></span>`;
  }).join("");
  const reel = frames() + frames() + frames();
  fn = 0;
  $("#marquee").innerHTML = reel + frames() + frames() + frames();

  /* ---------- filters ---------- */
  let active = new URLSearchParams(location.hash.split("?")[1] || "").get("cat") || "all";
  const filtersEl = $("#filters");
  const chips = [{ id: "all", label: "הכל", color: "var(--accent)" }, ...usedCats];
  filtersEl.innerHTML = chips.map((c) => {
    const count = c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
    return `<button class="chip" role="tab" data-id="${c.id}" style="--c:${c.color}">${esc(c.label)}<sup>${count}</sup></button>`;
  }).join("");
  filtersEl.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    active = b.dataset.id;
    render();
  });

  /* ---------- grid ---------- */
  const grid = $("#grid");
  const cardHTML = (p, i, feat) => {
    const c = catById[p.category];
    return `<button class="card${feat ? " feat" : ""}" data-n="${p.n}" style="--c:${c.color}; animation-delay:${i * 60}ms">
      <div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : genThumb(p)}</div>
      <div class="card-info"><span class="card-title">${esc(p.title)}</span><span class="card-year">${esc(p.year)}</span></div>
      ${feat ? `<p class="card-desc">${esc(p.description)}</p>` : ""}
      <span class="pill">${esc(c.label)}</span>
    </button>`;
  };
  function render() {
    filtersEl.querySelectorAll(".chip").forEach((b) =>
      b.setAttribute("aria-selected", String(b.dataset.id === active)));
    const list = active === "all" ? projects : projects.filter((p) => p.category === active);
    grid.innerHTML = list.length
      ? list.map((p, i) => cardHTML(p, i)).join("")
      : `<p class="empty">עדיין אין פרויקטים בקטגוריה הזו.</p>`;
  }
  const onCardClick = (e) => {
    const card = e.target.closest(".card");
    if (card) openModal(projects.find((p) => p.n === +card.dataset.n));
  };
  grid.addEventListener("click", onCardClick);
  render();

  /* ---------- featured (order as written in projects.js) ---------- */
  const featured = projects.filter((p) => p.featured).sort((a, b) => a.n - b.n);
  if (featured.length) {
    $("#featGrid").innerHTML = featured.map((p, i) => cardHTML(p, i, true)).join("");
    $("#featGrid").addEventListener("click", onCardClick);
  } else {
    $("#featured").remove();
  }

  /* ---------- modal ---------- */
  const modal = $("#modal");
  const embed = (url) => {
    if (!url) return null;
    let m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    if (m) return `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`;
    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (m) return `https://player.vimeo.com/video/${m[1]}?autoplay=1`;
    return null;
  };
  function openModal(p) {
    const c = catById[p.category];
    modal.style.setProperty("--c", c.color);
    const ev = embed(p.video);
    $("#modalMedia").innerHTML = ev
      ? `<iframe src="${ev}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(p.title)}"></iframe>`
      : p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}">` : genThumb(p);
    $("#modalCat").textContent = c.label;
    $("#modalCat").style.setProperty("--c", c.color);
    $("#modalTitle").textContent = p.title;
    $("#modalMeta").textContent = [p.year, p.role].filter(Boolean).join(" · ");
    $("#modalDesc").textContent = p.description || "";
    $("#modalTags").innerHTML = (p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("");
    const link = $("#modalLink");
    const href = p.link || (!ev && p.video) || "";
    link.hidden = !href;
    if (href) link.href = href;
    modal.showModal();
  }
  const closeModal = () => { modal.close(); };
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  modal.addEventListener("close", () => { $("#modalMedia").innerHTML = ""; });

  /* ---------- contact ---------- */
  const mail = $("#mail");
  mail.textContent = SITE.email;
  mail.href = `mailto:${SITE.email}`;
  const socials = [
    [SITE.phone, "טלפון", SITE.phone && `tel:${SITE.phone.replace(/[^\d+]/g, "")}`],
    [SITE.linkedin, "LinkedIn", SITE.linkedin],
    [SITE.instagram, "Instagram", SITE.instagram],
    [SITE.cv, "קורות חיים (PDF)", SITE.cv],
  ].filter(([v]) => v);
  $("#socials").innerHTML = socials
    .map(([, label, href]) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(label)}</a>`).join("");

  /* ---------- spotlight follows the mouse ---------- */
  const spot = document.querySelector(".spot");
  window.addEventListener("pointermove", (e) => {
    spot.style.setProperty("--mx", e.clientX + "px");
    spot.style.setProperty("--my", e.clientY + "px");
  }, { passive: true });
})();
