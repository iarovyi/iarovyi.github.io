var particlesConfig = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ddd" //"#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#888888" //"#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5, //10
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40, //80
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150, //300
      "color": "#777", //"#ffffff"
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6, //12
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      //"bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,//800
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,//800
        "size": 40,//80
        "duration": 2,
        "opacity": 8,//0.8
        "speed": 3
      },
      "repulse": {
        "distance": 200 //400
        //"duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,

  //comment out
  /*"config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }*/
};

particlesJS('particles-js', particlesConfig);

$('#cvBtn').on('click', function () {
  var win = window.open('/CV_Sergii_Yarovyi.pdf', '_blank');
  win.focus();
});