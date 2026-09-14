/* =====================================================
   BICUNDAS — WEBSITE SCRIPT
   Clean & Professional
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("ti-menu-2");
                icon.classList.add("ti-x");
            } else {
                icon.classList.remove("ti-x");
                icon.classList.add("ti-menu-2");
            }
        });

        /* Close menu when a link is clicked */

        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("ti-x");
                icon.classList.add("ti-menu-2");
            });
        });

        /* Close menu with Escape */

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                navLinks.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("ti-x");
                icon.classList.add("ti-menu-2");
            }
        });
    }


    /* =========================
       SMOOTH SCROLL
    ========================= */

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header = document.querySelector(".header");
            const headerHeight = header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("main section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        const scrollPosition = window.scrollY + 150;

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (!name || !email || !message) {
                return;
            }

            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const messageValue = message.value.trim();

            /* Basic validation */

            if (nameValue === "") {
                alert("Please enter your name.");
                name.focus();
                return;
            }

            if (emailValue === "") {
                alert("Please enter your email.");
                email.focus();
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {
                alert("Please enter a valid email address.");
                email.focus();
                return;
            }

            if (messageValue === "") {
                alert("Please write your message.");
                message.focus();
                return;
            }

            /* Success message */

            alert(
                "Thank you for contacting BICUNDAS. " +
                "Your message has been received."
            );

            contactForm.reset();

        });

    }


    /* =========================
       HEADER SHADOW ON SCROLL
    ========================= */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =========================
       PREVENT EMPTY HASH JUMP
    ========================= */

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", event => {
            event.preventDefault();
        });

    });

});