// 🌸 Fade Animation Between Pages
document.body.classList.add("fade-in");

window.addEventListener("beforeunload", () => {
  document.body.classList.add("fade-out");
});

// 🌷 Highlight current page
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Optional: add soft fade styles dynamically
const style = document.createElement("style");
style.innerHTML = `
  body.fade-in {
    animation: fadeIn 0.5s ease-in;
  }
  body.fade-out {
    animation: fadeOut 0.5s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; } to { opacity: 0; }
  }
`;
document.head.appendChild(style);

