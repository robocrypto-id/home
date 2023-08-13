document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector(".avatar");
  const image = avatar.querySelector(".image");
  let isFlipped = false;

  avatar.addEventListener("click", function () {
    isFlipped = !isFlipped;
    if (isFlipped) {
      image.src = "robo.jpg";
    } else {
      image.src = "robo1.jpg";
    }
    avatar.classList.add("bounce");
    setTimeout(() => {
      avatar.classList.remove("bounce");
    }, 1000);
  });

  const typedTexts = [
    "Welcome to Robo Crypto Website",
    "Explore the World of Crypto",
    "Stay Updated with the Latest Trends",
  ];

  let textIndex = 0;
  let charIndex = 0;
  const typedTextElement = document.getElementById("typed-text");
  typedTextElement.style.color = "gray";

  function type() {
    if (charIndex < typedTexts[textIndex].length) {
      typedTextElement.textContent += typedTexts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextElement.textContent = typedTexts[textIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, 100);
    } else {
      textIndex = (textIndex + 1) % typedTexts.length;
      setTimeout(type, 100);
    }
  }

  type();

  // Responsiveness
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});
