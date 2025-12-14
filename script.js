// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smooth scroll (optional; modern CSS can also handle this)
document.documentElement.style.scrollBehavior = "smooth";