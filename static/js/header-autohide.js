(() => {
  const header = document.querySelector("header.sticky");
  if (!header) return;

  header.classList.add("header-autohide");

  let lastY = window.scrollY;
  let ticking = false;
  const topShow = 24;
  const delta = 8;

  const update = () => {
    const y = window.scrollY;
    const goingDown = y > lastY + delta;
    const goingUp = y < lastY - delta;

    if (y <= topShow || goingUp) {
      header.classList.remove("header-autohide--hidden");
    } else if (goingDown) {
      header.classList.add("header-autohide--hidden");
      document
        .querySelectorAll(".dropdown-menu:not(.hidden)")
        .forEach((menu) => menu.classList.add("hidden"));
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
})();
