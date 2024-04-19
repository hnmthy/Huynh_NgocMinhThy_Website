gsap.registerPlugin(ScrollTrigger);

gsap.from('.bg-container',{
    y: 200,
    duration: 2.5,
    opacity: 0,
    ease: "power4.out",
    stagger: .25,
    scrollTrigger: {
        trigger:'.bg-image',
        start:"top 80%"
    }
});

gsap.from('.meal-detail',{
    xPercent: -200,
    duration: 2.5,
    scale: 0.2,
    stagger: .25,
    ease: "power4.out",
    scrollTrigger: {
        trigger:'.flex-ctn',
        markers: true,
    }
});

gsap.from('.explore',{
    xPercent: 200,
    duration: 3,
    scale: 0.4,
    stagger: .5,
    ease: "power4.out",
    scrollTrigger: {
        trigger:'.menu-ctn',
        markers: true,
    }
});

gsap.from('.text-align',{
    y: 400,
    duration: 1.75,
    opacity: 0,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger:'.text-align',
        markers: true,
    }
});

gsap.from('.img1',{
    xPercent: 200,
    duration: 2.5,
    opacity: 0,
    ease: "power3.inOut",
    scrollTrigger: {
        trigger:'.img1',
        markers: true,
    }
});

gsap.from('.img2',{
    xPercent: -200,
    duration: 2.5,
    opacity: 0,
    ease: "power3.inOut",
    scrollTrigger: {
        trigger:'.img2',
        markers: true,
    }
});

gsap.from('.a1',{
    y: () => Math.random() * 300 - 200,
    xPercent: -200,
    duration: 2.5,
    scale: 0.1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger:'.a1',
        markers: true,
    }
});

gsap.from('.a2',{
    y: () => Math.random() * 300 - 200,
    xPercent: 200,
    duration: 2.5,
    scale: 0.1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger:'.a2',
        markers: true,
    }
});
