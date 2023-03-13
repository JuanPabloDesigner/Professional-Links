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

  const pdf = document.querySelector("#pdf img");
  if (html.classList.contains("space")) {
    pdf.setAttribute("src", "./assets/pdf-icon-space.svg");
    pdf.setAttribute("alt", "PDF Icon");
  }
  else {
    pdf.setAttribute("src", "./assets/pdf-icon.svg");
    pdf.setAttribute("alt", "PDF Icon");
  }

  const html5css3 = document.querySelector("#html5css3 img");
  if (html.classList.contains("space")) {
    html5css3.setAttribute("src", "./assets/html5&css3-icon-space.svg");
    html5css3.setAttribute("alt", "HTML5 & CSS3 Icon");
  }
  else {
    html5css3.setAttribute("src", "./assets/html5&css3-icon.svg");
    html5css3.setAttribute("alt", "HTML5 & CSS3 Icon");
  }

  const react = document.querySelector("#react img");
  if (html.classList.contains("space")) {
    react.setAttribute("src", "./assets/react-icon-space.svg");
    react.setAttribute("alt", "React Icon");
  }
  else {
    react.setAttribute("src", "./assets/react-icon.svg");
    react.setAttribute("alt", "React Icon");
  }

  const notion = document.querySelector("#notion img");
  if (html.classList.contains("space")) {
    notion.setAttribute("src", "./assets/notion-icon-space.svg");
    notion.setAttribute("alt", "Notion Icon");
  }
  else {
    notion.setAttribute("src", "./assets/notion-icon.svg");
    notion.setAttribute("alt", "Notion Icon");
  }

}



/*  HTML5 Icon & CSS3 Icon

  const html5 = document.querySelector("#html5");
  if (html.classList.contains("space")) {
    html5.setAttribute("src", "./assets/html5-icon-space.svg");
    html5.setAttribute("alt", "HTML5 Icon");
  }
  else {
    html5.setAttribute("src", "./assets/html5-icon.svg");
    html5.setAttribute("alt", "HTML5 Icon");
  }

  const css3 = document.querySelector("#css3");
  if (html.classList.contains("space")) {
    css3.setAttribute("src", "./assets/css3-icon-space.svg");
    css3.setAttribute("alt", "CSS3 Icon");
  }
  else {
    css3.setAttribute("src", "./assets/css3-icon.svg");
    css3.setAttribute("alt", "CSS3 Icon");
  }

    Hero Image Animation

  const frameHeight = 102;
  const frames = 15;
  const div = document.getElementById("hero-bg").children;
  let frame = 0;
  setInterval(function () {
      const frameOffset = (++frame % frames) * -frameHeight;
      div.style.backgroundPosition = "0px " + frameOffset + "px";
  }, 100);


*/
