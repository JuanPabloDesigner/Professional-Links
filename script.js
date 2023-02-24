function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("space");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("space")) {
    img.setAttribute("src", "./assets/avatar-space.png");
    img.setAttribute("alt", "profile");
  }
  else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "profile");
  }

  const hero = document.querySelector("#hero-bg img");
  if (html.classList.contains("space")) {
    hero.setAttribute("src", "./assets/hero-bg.svg");
    hero.setAttribute("alt", "Flying Astrounaut Animation");
  }
  else {
    hero.removeAttribute("src", "./assets/hero-bg.svg");
    hero.removeAttribute("alt", "Flying Astrounaut Animation");
  }

  /*
  const frameHeight = 102;
  const frames = 15;
  const div = document.getElementById("hero-bg").children;
  let frame = 0;
  setInterval(function () {
      const frameOffset = (++frame % frames) * -frameHeight;
      div.style.backgroundPosition = "0px " + frameOffset + "px";
  }, 100);
  */
}