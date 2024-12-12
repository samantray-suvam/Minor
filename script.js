Shery.makeMagnet(".magnet");
Shery.mouseFollower();
Shery.hoverWithMediaCircle(".hh", {
    videos:["./space.mp4", "./space2.mp4", "./space3.mp4"],
});

gsap.to(".fleftm", {
    scrollTrigger: {
        trigger: "#fimage",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    },
    y: "-300%",
    ease: Power1,
});

let sections = document.querySelectorAll(".fleftm");
Shery.imageEffect(".images",{
    style: 5,
    config: {onMouse: {value: 1}},
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress+index);
                },
            });
        });
    },
});