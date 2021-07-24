export const particlesOptions = {
    "background": {
      "color": {
        "value": "transparent"
      },
      "position": "fixed"
    },
    "fullScreen": {
      "enable": true,
      "zIndex": 0
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": false,
          "mode": "push"
        },
        "onHover": {
          "enable": false,
          "mode": "repulse",
          "parallax": {
            "force": 1
          }
        }
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "maxSpeed": 20
        }
      }
    },
    "particles": {
      "color": {
        "value": "#31f2f6",
        "animation": {
          "h": {
            "speed": 20
          }
        }
      },
      "links": {
        "color": {
          "value": "#31f2f6"
        },
        "enable": true,
        "opacity": 0.4
      },
      "move": {
        "enable": true,
        "path": {},
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "speed": 1
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 80
      },
      "opacity": {
        "value": 0.5
      },
      "size": {
        "value": {
          "min": 0.1,
          "max": 3
        }
      }
    }
  }