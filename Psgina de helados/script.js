let isMobile = window.innerWidth < 768;

gsap.to(".text", {
    y: isMobile ? 150 : 300,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});