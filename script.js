AOS.init();

var typed = new Typed(".typing", {

    strings: [

        "AI Engineer",
        "Machine Learning Enthusiast",
        "Business Analyst",
        "SQL Developer",
        "Dashboard Developer"

    ],

    typeSpeed: 80,
    backSpeed: 50,
    loop: true

});

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#00f7ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        }

    }

});

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", () => {

    const navbar =
    document.getElementById("navbar");

    navbar.classList.toggle(

        "nav-scrolled",

        window.scrollY > 50

    );

});