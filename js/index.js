const main = document.getElementById("main"),
  items = (main.volume = .5, document.getElementById("item")),
  menuOpen = (items.volume = .5, document.getElementById("menuOpen")),
  menuClose = (menuOpen.volume = .2, document.getElementById("menuClose")),
  navHover = document.getElementById("navHover"),
  navSelect = (navHover.volume = .1, document.getElementById("navClick")),
  cv = document.getElementById("CV"),
  servicesFill = (cv.volume = .4, document.getElementById("services-fill")),
  itemSocial = (servicesFill.volume = .1, $("#logo").on("click", function () {
    gsap.to("#navigation-content", 0, {
      display: "none",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      y: "-100%",
      delay: .7
    }), gsap.to("#header", 0, {
      display: "none"
    }), gsap.to("#about", 0, {
      display: "none"
    }), gsap.to("#portfolio", 0, {
      display: "none"
    }), gsap.to("#contact", 0, {
      display: "none"
    }), gsap.to("#breaker", 0, {
      display: "block"
    }), gsap.to("#breaker-two", 0, {
      display: "block",
      delay: .1
    }), gsap.to("#breaker", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#breaker-two", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#header", 0, {
      display: "block",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      display: "flex",
      delay: 2
    })
  }), $(window).on("load", function () {
    gsap.to("#loader", 1, {
      opacity: 0,
      delay: 2
    }), gsap.to("#loader", 0, {
      display: "none",
      delay: 1
    }), gsap.to("#header", 0, {
      display: "none",
      delay: 1
    }), gsap.to("#header", 1, {
      display: "block",
      delay: 1
    }), gsap.to("#navigation-content", 0, {
      display: "none"
    }), gsap.to("#navigation-content", 0, {
      display: "flex",
      delay: 1
    }),
    setTimeout(function () {
      var e = document.getElementById("intro");
      e.volume = .5, e.play()
    }, 1e3);
  }), headerContent.addEventListener("mouseover", function () {
    main.play()
  }), document.querySelectorAll(".social-media")),
  navItems = (itemSocial.forEach(e => {
    e.addEventListener("mouseover", function () {
      items.play()
    })
  }), itemSocial.forEach(e => {
    e.addEventListener("click", function () {
      items.play()
    })
  }), document.querySelectorAll(".navigation-link")),
  services = (navItems.forEach(e => {
    e.addEventListener("mouseenter", function () {
      navHover.play()
    })
  }), navItems.forEach(e => {
    e.addEventListener("click", function () {
      navSelect.play()
    })
  }), DownloadCV.addEventListener("mouseenter", function () {
    cv.play()
  }), document.querySelectorAll(".service"));
services.forEach(e => {
  e.addEventListener("mouseenter", function () {
    servicesFill.play()
  })
}), $(function () {
  $(".menubar").on("click", function () {
    gsap.to("#navigation-content", .6, {
      y: 0
    }), menuOpen.play()
  }), $(".navigation-close").on("click", function () {
    gsap.to("#navigation-content", .6, {
      y: "-100%"
    }), menuClose.play()
  })
}), $(function () {
  function i(e, t, o) {
    this.toRotate = t, this.el = e, this.loopNum = 0, this.period = parseInt(o, 10) || 2e3, this.txt = "", this.tick(), this.isDeleting = !1
  }
  i.prototype.tick = function () {
    var e = this.loopNum % this.toRotate.length,
      e = this.toRotate[e],
      t = (this.isDeleting ? this.txt = e.substring(0, this.txt.length - 1) : this.txt = e.substring(0, this.txt.length + 1), this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>", this),
      o = 200 - 100 * Math.random();
    this.isDeleting && (o /= 2), this.isDeleting || this.txt !== e ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++, o = 100) : (o = this.period, this.isDeleting = !0), setTimeout(function () {
      t.tick()
    }, o)
  }, window.onload = function () {
    for (var e = document.getElementsByClassName("txt-rotate"), t = 0; t < e.length; t++) {
      var o = e[t].getAttribute("data-rotate"),
        a = e[t].getAttribute("data-period");
      o && new i(e[t], JSON.parse(o), a)
    }
    var n = document.createElement("style");
    n.type = "text/css", n.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }", document.body.appendChild(n)
  }
}), $(function () {
  $("#about-link").on("click", function () {
    gsap.to("#navigation-content", 0, {
      display: "none",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      y: "-100%",
      delay: .7
    }), gsap.to("#header", 0, {
      display: "none"
    }), gsap.to("#portfolio", 0, {
      display: "none"
    }), gsap.to("#breaker", 0, {
      display: "block"
    }), gsap.to("#breaker-two", 0, {
      display: "block",
      delay: .1
    }), gsap.to("#contact", 0, {
      display: "none"
    }), gsap.to("#breaker", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#breaker-two", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#about", 0, {
      display: "block",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      display: "flex",
      delay: 2
    })
  }), $("#contact-link").on("click", function () {
    gsap.to("#navigation-content", 0, {
      display: "none",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      y: "-100%",
      delay: .7
    }), gsap.to("#header", 0, {
      display: "none"
    }), gsap.to("#about", 0, {
      display: "none"
    }), gsap.to("#portfolio", 0, {
      display: "none"
    }), gsap.to("#breaker", 0, {
      display: "block"
    }), gsap.to("#breaker-two", 0, {
      display: "block",
      delay: .1
    }), gsap.to("#breaker", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#breaker-two", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#contact", 0, {
      display: "block",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      display: "flex",
      delay: 2
    })
  }), $("#portfolio-link").on("click", function () {
    gsap.to("#navigation-content", 0, {
      display: "none",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      y: "-100%",
      delay: .7
    }), gsap.to("#header", 0, {
      display: "none"
    }), gsap.to("#about", 0, {
      display: "none"
    }), gsap.to("#contact", 0, {
      display: "none"
    }), gsap.to("#breaker", 0, {
      display: "block"
    }), gsap.to("#breaker-two", 0, {
      display: "block",
      delay: .1
    }), gsap.to("#breaker", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#breaker-two", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#portfolio", 0, {
      display: "block",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      display: "flex",
      delay: 2
    })
  }),
  $("#see-projects").on("click", function () {
    gsap.to("#navigation-content", 0, {
      display: "none",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      y: "-100%",
      delay: .7
    }), gsap.to("#header", 0, {
      display: "none"
    }), gsap.to("#about", 0, {
      display: "none"
    }), gsap.to("#contact", 0, {
      display: "none"
    }), gsap.to("#breaker", 0, {
      display: "block"
    }), gsap.to("#breaker-two", 0, {
      display: "block",
      delay: .1
    }), gsap.to("#breaker", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#breaker-two", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#portfolio", 0, {
      display: "block",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      display: "flex",
      delay: 2
    })
  }),  $("#home-link").on("click", function () {
    gsap.to("#navigation-content", 0, {
      display: "none",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      y: "-100%",
      delay: .7
    }), gsap.to("#header", 0, {
      display: "none"
    }), gsap.to("#about", 0, {
      display: "none"
    }), gsap.to("#portfolio", 0, {
      display: "none"
    }), gsap.to("#contact", 0, {
      display: "none"
    }), gsap.to("#breaker", 0, {
      display: "block"
    }), gsap.to("#breaker-two", 0, {
      display: "block",
      delay: .1
    }), gsap.to("#breaker", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#breaker-two", 0, {
      display: "none",
      delay: 2
    }), gsap.to("#header", 0, {
      display: "block",
      delay: .7
    }), gsap.to("#navigation-content", 0, {
      display: "flex",
      delay: 2
    })
  })
}), $(function () {
  document.querySelector("body");
  var t = $(".cursor");

  function e(e) {
    gsap.to(t, {
      scale: 1.4,
      opacity: 1
    })
  }

  function o(e) {
    gsap.to(t, {
      scale: 1,
      opacity: .6
    })
  }
  $(window).on("mousemove", function (e) {
    gsap.to(t, {
      x: e.clientX,
      y: e.clientY,
      stagger: .002
    })
  }), $(".menubar").hover(e, o), $("a").hover(e, o), $(".navigation-close").hover(e, o)
});