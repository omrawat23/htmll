// Locomotive JS

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();

// Loader

function loader() {
  var time = gsap.timeline();
  time.to("#loader #box", {
    top: "50%",
    duration: 0,
  });
  time.from("#loader .circle", {
    y: -500,
    duration: 2,
    ease: "bounce.out",
    stagger: 0.07,
    opacity: 0,
  });
  time.to("#loader", {
    height: 0,
    duration: 1,
    ease: Expo.easeInOut,
    delay: 1,
    opacity: 0,
  });
}
loader();


// For Menu Animation

function menu() {
  var flag = 0;
  document
    .querySelector("#main #navbar #menutext button")
    .addEventListener("click", function () {
      if (flag === 0) {
        var time = gsap.timeline();

        time.to("#menu #one", {
          height: "100%",
          duration: 2,
          ease: "Expo.easeInOut",
        });
        time.to("#menu #two", {
          height: "110%",
          duration: 2,
          delay: -1.6,
          ease: "Expo.easeInOut",
        });
        document.querySelector("#main #navbar #menutext button").innerHTML =
          "Close";
        flag = 1;
      } else {
        var time = gsap.timeline();

        time.to("#menu #two", {
          height: "-1%",
          duration: 2,
          ease: "Expo.easeInOut",
        });
        time.to("#menu #one", {
          height: 0,
          duration: 2,
          delay: -1.6,
          ease: "Expo.easeInOut",
        });
        document.querySelector("#main #navbar #menutext button").innerHTML =
          "Menu";
        flag = 0;
      }
    });
}
menu();

//  Txet Split H1 Page 1

function split() {
  function h1split1() {
    var clutter;
    document.querySelectorAll(".split1").forEach(function (splittext) {
      clutter = "";
      splittext.textContent.split("").forEach(function (char) {
        clutter += `<span>${char}</span>`;
      });
      splittext.innerHTML = clutter;
    });
  }
  h1split1();
  function h1split2() {
    var clutter;
    document.querySelectorAll(".split2").forEach(function (splittext) {
      clutter = "";
      splittext.textContent.split(" ").forEach(function (char) {
        clutter += `<span> ${char} </span>`;
      });
      splittext.innerHTML = clutter;
    });
  }
  h1split2();
}
split();

//  Page 1 H1 Animation 

function page1() {
  function p1Heading() {
    gsap.to("#page1 h1:nth-child(1) span", {
      scrollTrigger: {
        trigger: "#page1",
        start: "bottom bottom",
        scroller: "#main",
        scrub: 0.5,
      },
      y: -650,
      duration: 3,
      stagger: -0.2,
    });
    gsap.to("#page1 h1:nth-child(2) span", {
      scrollTrigger: {
        trigger: "#page1",
        start: "bottom 93%",
        scroller: "#main",
        scrub: 0.5,
      },
      y: -650,
      duration: 3,
      stagger: -0.2,
    });
    ScrollTrigger.create({
      trigger: "#page1",
      start: "bottom 100%",
      scroller: "#main",
      pin: true,
    });
  }
  p1Heading();

  function p1Photo() {
    gsap.to("#page1 #photo", {
      scrollTrigger: {
        trigger: "#page1 #photo",
        scroller: "#main",
        scrub: 0.5,
        start: "bottom 50%",
      },
      width: "93%",
      height: "99%",
      scale: 1.2,
      delay: 5,
      duration: 5,
    });
  }
  p1Photo();
}
page1();

function page2() {
  gsap.to("#page2 h1", {
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      scrub: 0.5,
      start: "bottom 70%",
      end: "bottom 30%",
    },
    scale: 6,
    duration: 3,
  });
}
page2();
