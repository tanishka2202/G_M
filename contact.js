document.addEventListener("DOMContentLoaded", function () {
    // Navbar active link highlighting
    const navLinks = document.querySelectorAll(".nav_link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Contact form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });

    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Search bar functionality
    const searchInput = document.querySelector(".Search_L");
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            alert(`Searching for: ${searchInput.value}`);
        }
    });

    // Cart and User icon click events
    document.querySelectorAll(".nav_icon").forEach(icon => {
        icon.addEventListener("click", function () {
            alert("Feature coming soon!");
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
