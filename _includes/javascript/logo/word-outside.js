{% include javascript/logo/plain.js %}
logo.viewbox({
  x: 0,
  y: 0,
  width: 990,
  height: 200
})

var image = logo.image('https://farm8.staticflickr.com/7710/17214301731_243510081f_h.jpg')
image.size(650, 650).y(-250).x(-80)
image.clipWith(badge)

{% include javascript/common/get-word.js %}

var text = logo.text(word).move(512, -147).fill('{{ site.data.attributes.defaults.colour }}')
text.font({
  family: 'Helvetica Neue',
  size: 272,
  anchor: 'left',
  weight: 200
})
