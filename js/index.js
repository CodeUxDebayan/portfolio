window.alert("Enable sound for better experience");
setTimeout(function () { 

  const intro = document.getElementById("intro")
  intro.volume = 0.5;
  intro.play();
  
  }, 1000);

const main = document.getElementById('main');
main.volume = 0.5;

const items = document.getElementById('item');
items.volume = 0.5;

const menuOpen = document.getElementById('menuOpen');
menuOpen.volume = 0.2;

const menuClose = document.getElementById('menuClose');
const navHover = document.getElementById('navHover');
navHover.volume = 0.1;

const navSelect = document.getElementById('navClick');
const cv = document.getElementById('CV');
cv.volume = 0.4;

const servicesFill = document.getElementById('services-fill');
servicesFill.volume = 0.1;

$('#logo').on('click', function () {
  gsap.to('#navigation-content', 0, {
    display: "none",
    delay: .7
  });
  gsap.to('#navigation-content', 0, {
    y: '-100%',
    delay: .7
  });
  gsap.to('#header', 0, {
    display: "none"
  });
  gsap.to('#about', 0, {
    display: "none"
  });
  gsap.to('#portfolio', 0, {
    display: "none"
  });
  gsap.to('#contact', 0, {
    display: "none"
  });
  gsap.to('#blog', 0, {
    display: "none"
  });
  gsap.to('#breaker', 0, {
    display: "block"
  });
  gsap.to('#breaker-two', 0, {
    display: "block",
    delay: .1
  });
  gsap.to('#breaker', 0, {
    display: "none",
    delay: 2
  });
  gsap.to('#breaker-two', 0, {
    display: "none",
    delay: 2
  });
  gsap.to('#header', 0, {
    display: "block",
    delay: .7
  });
  gsap.to('#navigation-content', 0, {
    display: 'flex',
    delay: 2
  });
})

$(window).on('load', function () {
  gsap.to('#loader', 1, {
    opacity: 0,
    delay: 2
  });
  gsap.to('#loader', 0, {
    display: "none",
    delay: 1
  });
  gsap.to('#header', 0, {
    display: "none",
    delay: 1
  });
  gsap.to('#header', 1, {
    display: "block",
    delay: 1
  });

  gsap.to('#navigation-content', 0, {
    display: "none"
  });
  gsap.to('#navigation-content', 0, {
    display: "flex",
    delay: 1
  });
})

headerContent.addEventListener('mouseover', function () {
  main.play();
});

const itemSocial = document.querySelectorAll('.social-media');
itemSocial.forEach(item => {
  item.addEventListener('mouseover', function () {
    items.play();
  });
});

itemSocial.forEach(item => {
  item.addEventListener('click', function () {
    items.play();
  });
});

const navItems = document.querySelectorAll('.navigation-link');
navItems.forEach(navItem => {
  navItem.addEventListener('mouseenter', function () {
    navHover.play();
  });
});
navItems.forEach(navItem => {
  navItem.addEventListener('click', function () {
    navSelect.play();
  });
});

DownloadCV.addEventListener('mouseenter', function () {
  cv.play();
});

const services = document.querySelectorAll('.service');
services.forEach(service => {
  service.addEventListener('mouseenter', function () {
    servicesFill.play();
  });
});

$(function () {
  $('.menubar').on('click', function () {
    gsap.to('#navigation-content', .6, {
      y: 0
    });
    menuOpen.play();
  })
  $('.navigation-close').on('click', function () {
    gsap.to('#navigation-content', .6, {
      y: "-100%"
    });
    menuClose.play();
  });
});

$(function () {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
    document.body.appendChild(css);
  };
})
$(function () {

  $('#about-link').on('click', function () {
    gsap.to('#navigation-content', 0, {
      display: "none",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      y: '-100%',
      delay: .7
    });
    gsap.to('#header', 0, {
      display: "none"
    });
    gsap.to('#blog', 0, {
      display: "none"
    });
    gsap.to('#portfolio', 0, {
      display: "none"
    });
    gsap.to('#breaker', 0, {
      display: "block"
    });
    gsap.to('#breaker-two', 0, {
      display: "block",
      delay: .1
    });
    gsap.to('#contact', 0, {
      display: "none"
    });
    gsap.to('#breaker', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#breaker-two', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#about', 0, {
      display: "block",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      display: 'flex',
      delay: 2
    });
  })
  $('#contact-link').on('click', function () {
    gsap.to('#navigation-content', 0, {
      display: "none",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      y: '-100%',
      delay: .7
    });
    gsap.to('#header', 0, {
      display: "none"
    });
    gsap.to('#about', 0, {
      display: "none"
    });
    gsap.to('#blog', 0, {
      display: "none"
    });
    gsap.to('#portfolio', 0, {
      display: "none"
    });
    gsap.to('#breaker', 0, {
      display: "block"
    });
    gsap.to('#breaker-two', 0, {
      display: "block",
      delay: .1
    });
    gsap.to('#breaker', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#breaker-two', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#contact', 0, {
      display: "block",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      display: 'flex',
      delay: 2
    });
  })
  $('#portfolio-link').on('click', function () {
    gsap.to('#navigation-content', 0, {
      display: "none",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      y: '-100%',
      delay: .7
    });
    gsap.to('#header', 0, {
      display: "none"
    });
    gsap.to('#about', 0, {
      display: "none"
    });
    gsap.to('#contact', 0, {
      display: "none"
    });
    gsap.to('#blog', 0, {
      display: "none"
    });
    gsap.to('#breaker', 0, {
      display: "block"
    });
    gsap.to('#breaker-two', 0, {
      display: "block",
      delay: .1
    });
    gsap.to('#breaker', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#breaker-two', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#portfolio', 0, {
      display: "block",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      display: 'flex',
      delay: 2
    });
  })
  $('#blog-link').on('click', function () {
    gsap.to('#navigation-content', 0, {
      display: "none",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      y: '-100%',
      delay: .7
    });
    gsap.to('#header', 0, {
      display: "none"
    });
    gsap.to('#about', 0, {
      display: "none"
    });
    gsap.to('#portfolio', 0, {
      display: "none"
    });
    gsap.to('#contact', 0, {
      display: "none"
    });
    gsap.to('#breaker', 0, {
      display: "block"
    });
    gsap.to('#breaker-two', 0, {
      display: "block",
      delay: .1
    });
    gsap.to('#breaker', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#breaker-two', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#blog', 0, {
      display: "block",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      display: 'flex',
      delay: 2
    });
  })
  $('#home-link').on('click', function () {
    gsap.to('#navigation-content', 0, {
      display: "none",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      y: '-100%',
      delay: .7
    });
    gsap.to('#header', 0, {
      display: "none"
    });
    gsap.to('#about', 0, {
      display: "none"
    });
    gsap.to('#portfolio', 0, {
      display: "none"
    });
    gsap.to('#contact', 0, {
      display: "none"
    });
    gsap.to('#blog', 0, {
      display: "none"
    });
    gsap.to('#breaker', 0, {
      display: "block"
    });
    gsap.to('#breaker-two', 0, {
      display: "block",
      delay: .1
    });
    gsap.to('#breaker', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#breaker-two', 0, {
      display: "none",
      delay: 2
    });
    gsap.to('#header', 0, {
      display: "block",
      delay: .7
    });
    gsap.to('#navigation-content', 0, {
      display: 'flex',
      delay: 2
    });
  })

})
$(function () {
  var body = document.querySelector('body');
  var $cursor = $('.cursor')

  function cursormover(e) {

    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: .002
    })
  }

  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1
    })

  }

  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: .6
    })
  }
  $(window).on('mousemove', cursormover);
  $('.menubar').hover(cursorhover, cursor);
  $('a').hover(cursorhover, cursor);
  $('.navigation-close').hover(cursorhover, cursor);

})




