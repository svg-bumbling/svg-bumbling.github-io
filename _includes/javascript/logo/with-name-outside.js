{% include javascript/logo/plain.js %}

logo.viewbox({
  x: 0,
  y: 0,
  width: 830,
  height: 200
})

{% include javascript/common/say-odi.js %}

text.fill('{{ site.data.attributes.defaults.colour }}')

text.move(482, -10)
text.font({
  family: 'Helvetica Neue',
  size: 90,
  anchor: 'left',
  weight: 'bold',
  leading: 0.8
})
