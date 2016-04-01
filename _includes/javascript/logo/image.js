{% include javascript/logo/glowing.js %}

var image = logo.image('https://farm2.staticflickr.com/1446/25137519363_368d730c65_h.jpg')
image.size(650, 650).y(-180).x(-80)
image.clipWith(badge)

var text = logo.text('snake').move(232, 10).fill('{{ site.data.attributes.defaults.colour }}')
text.font({
  family: 'Helvetica Neue',
  size: 100,
  anchor: 'middle'
})
