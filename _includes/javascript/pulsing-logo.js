{% include javascript/glowing-logo.js %}

var odi_grad = gradient('#fa8100', '#000000', 128)
var text_grad = gradient('#ffffff', '#fa8100', 128)

var text = logo.text('labs').move(232, 10).fill(text_grad[0])
text.font({
  family: 'Helvetica Neue',
  size: 100,
  anchor: 'middle'
})

window.onload = function start() {
  pulse()
}

function pulse() {
  var index = 0
  var interval = 25
  window.setInterval(function () {
    text.fill(text_grad[index])
    badge.fill(odi_grad[index])
    index += 1
    if(index == odi_grad.length) {
      index = 0
    }
  }, interval)
}
