// ==========================================================================
// motion.ts — Lenis (smooth scroll) + GSAP/ScrollTrigger + UI behaviors
// ==========================================================================
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis: Lenis | null = null;

/* ---------------- Smooth scroll (Lenis + GSAP ticker) ---------------- */
function initSmoothScroll() {
  if (prefersReduced) return;
  lenis = new Lenis({
    lerp: 0.1,
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------------- Reveal on scroll (IntersectionObserver) ------------- */
function initReveals() {
  const els = document.querySelectorAll<HTMLElement>(
    "[data-reveal], [data-reveal-clip]"
  );
  if (!els.length) return;

  // Mantemos o reveal no scroll mesmo sob prefers-reduced-motion: o CSS
  // reduz para um fade somente de opacidade (sem movimento), garantindo a
  // animacao de entrada em todos os dispositivos. Fallback sem IO: mostra tudo.
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => io.observe(el));
}

/* ---------------- Animated counters --------------------------------- */
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>("[data-count-to]");
  els.forEach((el) => {
    const to = parseFloat(el.dataset.countTo || "0");
    const suffix = el.dataset.countSuffix || "";
    const prefix = el.dataset.countPrefix || "";
    const decimals = parseInt(el.dataset.countDecimals || "0", 10);

    if (prefersReduced) {
      el.textContent = prefix + to.toFixed(decimals) + suffix;
      return;
    }

    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: to,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = prefix + obj.v.toFixed(decimals) + suffix;
          },
        });
      },
    });
  });
}

/* ---------------- Parallax (data-parallax = speed) ------------------ */
function initParallax() {
  if (prefersReduced) return;
  document
    .querySelectorAll<HTMLElement>("[data-parallax]")
    .forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || "0.15");
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("[data-parallax-scope]") || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
}

/* ---------------- Timeline draw (process) --------------------------- */
function initTimelineDraw() {
  if (prefersReduced) return;
  document
    .querySelectorAll<HTMLElement>("[data-timeline-progress]")
    .forEach((line) => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: line.closest("[data-timeline]") || line,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    });
}

/* ---------------- Accordions (treatments + FAQ) --------------------- */
function initAccordions() {
  document.querySelectorAll<HTMLElement>("[data-accordion]").forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>("[data-acc-item]");
    items.forEach((item) => {
      const trigger = item.querySelector<HTMLElement>("[data-acc-trigger]");
      if (!trigger) return;
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        // single-open por grupo
        items.forEach((other) => {
          other.classList.remove("is-open");
          other
            .querySelector("[data-acc-trigger]")
            ?.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  });
}

/* ---------------- Header: hide-on-scroll-down + mobile nav ---------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;
  const toggle = document.querySelector<HTMLElement>("[data-nav-toggle]");
  const body = document.body;

  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 30);
    if (!header.classList.contains("nav-open")) {
      // rolando para baixo (passado o hero) -> esconde; subindo / topo -> mostra
      if (y > 160 && y > lastY + 4) header.classList.add("is-hidden");
      else if (y < lastY - 4 || y < 120) header.classList.remove("is-hidden");
    }
    lastY = y;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setOpen = (open: boolean) => {
    header.classList.toggle("nav-open", open);
    if (open) header.classList.remove("is-hidden");
    toggle?.setAttribute("aria-expanded", open ? "true" : "false");
    toggle?.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    body.classList.toggle("no-scroll", open);
    if (open) lenis?.stop();
    else lenis?.start();
  };

  toggle?.addEventListener("click", () =>
    setOpen(!header.classList.contains("nav-open"))
  );
  header
    .querySelectorAll<HTMLElement>("[data-nav] a")
    .forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("nav-open")) {
      setOpen(false);
      toggle?.focus();
    }
  });
}

/* ---------------- Anchor smooth scroll (with header offset) --------- */
function initAnchors() {
  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    .forEach((a) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      a.addEventListener("click", (e) => {
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -78 });
        else
          (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
      });
    });
}

/* ---------------- Scroll progress + back to top --------------------- */
function initProgress() {
  const bar = document.querySelector<HTMLElement>("[data-scroll-progress]");
  const toTop = document.querySelector<HTMLElement>("[data-to-top]");
  let max = document.documentElement.scrollHeight - window.innerHeight;
  const recalc = () => {
    max = document.documentElement.scrollHeight - window.innerHeight;
  };
  const update = () => {
    const p = max > 0 ? window.scrollY / max : 0;
    if (bar) bar.style.transform = `scaleX(${p})`;
    if (toTop) toTop.classList.toggle("is-visible", window.scrollY > 600);
  };
  recalc();
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", () => {
    recalc();
    update();
  });
  toTop?.addEventListener("click", () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------------- Hero intro timeline ------------------------------- */
function initHeroIntro() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero || prefersReduced) return;
  const items = hero.querySelectorAll<HTMLElement>("[data-hero-in]");
  if (!items.length) return;
  gsap.set(items, { opacity: 0, y: 26 });
  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.15,
  });
}

/* ---------------- Boot ---------------------------------------------- */
function boot() {
  initSmoothScroll();
  initReveals();
  initCounters();
  initParallax();
  initTimelineDraw();
  initAccordions();
  initHeader();
  initAnchors();
  initProgress();
  initHeroIntro();
  ScrollTrigger.refresh();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

// recalcula triggers quando tudo (fontes/imagens) carrega
window.addEventListener("load", () => ScrollTrigger.refresh());
