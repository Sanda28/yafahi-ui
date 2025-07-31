document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("sidebarToggleTop");
    const sidebar = document.getElementById("sidebar");

    // Buat overlay sekali saja
    let overlay = document.getElementById("overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    }

    toggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});
