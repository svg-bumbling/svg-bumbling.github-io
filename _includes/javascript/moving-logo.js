{% include javascript/glowing-logo.js %}

window.onload = function start() {
  move();
}

function move() {
  var scale = 1.0
  var rotation = 1

  window.setInterval(function () {
    scale_rand = Math.random()
    if(scale_rand > 0.5) {
      scale += 0.5
    } else if(scale_rand < 0.5) {
      scale -= 0.5
    }
    badge.animate().scale(scale)

    rotation_rand = Math.random()
    if(rotation_rand > 0.5) {
      rotation += 10
    } else if (rotation_rand < 0.5) {
      rotation -= 10
    }
    badge.animate().rotate(rotation)

  }, 10 )
}
