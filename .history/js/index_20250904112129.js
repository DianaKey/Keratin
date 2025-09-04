function init() {
  import("./global.header-burger.js");
  import("./index.partial.long.js");

}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
// reveal on scroll
const revealEls = document.querySelectorAll(".js-reveal");

const io = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inview");
        // якщо потрібно одноразово — від’єднати елемент:
        obs.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.25, // коли 25% блока в зоні видимості
  }
);

revealEls.forEach((el) => io.observe(el));
