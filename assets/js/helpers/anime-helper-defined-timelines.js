defineAnimeTimelineHelper("timelineBasics", ((e, a) => {
    const n = anime.timeline({
        easing: "easeOutExpo",
        duration: a.duration ? +a.duration : 750
    });
    return n.add({
        targets: e.querySelectorAll(".el.square"),
        opacity: [0, 1],
        translateX: 250
    }).add({
        targets: e.querySelectorAll(".el.circle"),
        translateX: 250
    }).add({
        targets: e.querySelectorAll(".el.triangle"),
        translateX: 250
    }), n
})), defineAnimeTimelineHelper("TLParamsInheritance", ((e, a) => {
    const n = anime.timeline({
        targets: e.querySelectorAll(".el"),
        delay: function(e, a) {
            return 200 * a
        },
        duration: 500,
        easing: "easeOutExpo",
        direction: "alternate",
        loop: !0
    });
    return n.add({
        translateX: 250,
        easing: "spring"
    }).add({
        opacity: .5,
        scale: 2
    }).add({
        targets: e.querySelectorAll(".el.triangle"),
        rotate: 180
    }).add({
        translateX: 0,
        scale: 1
    }), n
})), defineAnimeTimelineHelper("reveal", ((e, a) => {
    const n = "easeInExpo",
        i = "easeOutExpo",
        r = anime.timeline({ ...a,
            easing: i,
            duration: 750
        });
    return r.add({
        scaleY: {
            value: 0,
            easing: n
        },
        transformOrigin: {
            value: "50% 100%",
            easing: i
        }
    }).add({
        scaleY: {
            value: 1,
            easing: i
        },
        transformOrigin: {
            value: "50% 0%",
            easing: n
        }
    }).add({
        scaleY: {
            value: 0,
            easing: n
        },
        transformOrigin: {
            value: "50% 100%",
            easing: i
        }
    }).add({
        scaleY: {
            value: 1,
            easing: i
        },
        transformOrigin: {
            value: "50% 0%",
            easing: n
        }
    }), r
}));