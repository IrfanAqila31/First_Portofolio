//navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  // agar menampilkan to-top saat di scroll ke bawah, sedangkan saat diatas ilang
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
    // agar menampilkan to-top saat di scroll ke bawah, sedangkan saat diatas ilang
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    // agar toggle sesuai mode saat di refresh
    // localStorage.theme = "dark";
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    // agar toggle sesuai mode saat di refresh
    // localStorage.theme = "light";
    localStorage.theme = "light";
  }
});

// agar toggle sesuai mode saat di refresh
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.querySelector("html").classList.add("dark");
  darkToggle.checked = true;
} else {
  document.querySelector("html").classList.remove("dark");
  darkToggle.checked = false;
}

// contact form

// Pastikan ID form kamu sama seperti di sini (misalnya id="form-email")
// ...existing code...
// contact form -> buka Gmail compose

const contactForm = document.getElementById("form-email");
const popupMessage = document.getElementById("popup-message");
const popupBox = document.getElementById("popup-box");
const closeBtn = document.getElementById("close-popup");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const subject = encodeURIComponent("Pesan dari " + name);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    const to = "IrfanAqila31@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${subject}&body=${body}`;

    // Buka Gmail
    window.open(gmailUrl, "_blank");

    // Kosongkan form
    contactForm.reset();

    // Tampilkan popup dengan animasi
    popupMessage.classList.remove("hidden");
    setTimeout(() => {
      popupBox.classList.remove("opacity-0", "scale-95");
      popupBox.classList.add("opacity-100", "scale-100");
    }, 50);

    // Tutup otomatis setelah 17 detik
    // setTimeout(closePopup, 17000);
  });
}

// Fungsi tutup popup
function closePopup() {
  popupBox.classList.remove("opacity-100", "scale-100");
  popupBox.classList.add("opacity-0", "scale-95");
  setTimeout(() => {
    popupMessage.classList.add("hidden");
  }, 400);
}

// Tombol “Tutup” bisa menutup popup
closeBtn.addEventListener("click", closePopup);
