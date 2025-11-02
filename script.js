// 🌗 Mode clair / sombre
const toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
}

// Charger le thème sauvegardé
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
