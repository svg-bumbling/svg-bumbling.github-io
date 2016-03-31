{% include javascript/logo-with-word.js %}

var group = logo.group()
group.add(badge)
group.add(text)

window.onload = function start() {
  move();
}

function move() {
  var rotation = 1

  window.setInterval(function () {
    rotation_rand = Math.random()
    if(rotation_rand > 0.5) {
      rotation += 10
    } else if (rotation_rand < 0.5) {
      rotation -= 10
    }
    group.animate().rotate(rotation)
  }, 10 )
}
