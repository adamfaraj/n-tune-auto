// TODO: replace with N-Tune Automotive's real KurumaWorks shop id once available.
const KURUMA_SHOP_ID = "eecf5042-1d4f-4779-af29-efd03c1f845c";
const KURUMA_URL = `https://kurumaworks.com/mechanics/nc/durham/n-tune-automotive`;

document.querySelectorAll(
  "#header-kuruma-btn, #hero-kuruma-btn, #visit-kuruma-btn, #mobile-kuruma-btn"
).forEach((el) => {
  el.href = KURUMA_URL;
});

const footerYear = document.getElementById("footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Sticky header shadow once the page scrolls.
const header = document.getElementById("site-header");
const onScroll = () => {
  header.classList.toggle("site-header--scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Signature interaction: ledger entries "stamp down" into place as they enter view.
const revealTargets = document.querySelectorAll("[data-reveal]");

function revealIfOnScreen() {
  revealTargets.forEach((el) => {
    if (el.classList.contains("is-stamped")) return;
    // Reveal once the element has been reached at all, including a fast or
    // instant scroll (scrollIntoView, an anchor jump) that lands past it
    // before any frame ever showed it fully on screen.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("is-stamped");
    }
  });
}

if (revealTargets.length) {
  if ("IntersectionObserver" in window) {
    // A high threshold plus a fast or discontinuous scroll (trackpad flick,
    // scrollTo, anchor jump) can skip an element past the trigger window
    // entirely, leaving it stuck at opacity: 0. Fire as soon as any part of
    // the element is on screen, and back it with a scroll-based safety net
    // so nothing can stay invisible.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-stamped");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );
    revealTargets.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", revealIfOnScreen, { passive: true });
    window.addEventListener("load", revealIfOnScreen);
  } else {
    revealTargets.forEach((el) => el.classList.add("is-stamped"));
  }
}
