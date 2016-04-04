{% include javascript/logo/word.js %}

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
      rotation += 50
    } else if (rotation_rand < 0.5) {
      rotation -= 50
    }
    group.animate().rotate(rotation)
  }, 10 )
}
