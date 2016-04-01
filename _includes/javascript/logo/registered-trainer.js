{% include javascript/logo/plain.js %}
logo.viewbox({
  x: 0,
  y: 0,
  width: 477,
  height: 212
})

var text = logo.text('TRAINER').move(242, 25).fill('{{ site.data.attributes.defaults.alt-colour }}')
text.font({
  family: 'Helvetica-Condensed',
  size: 85,
  anchor: 'middle',
  weight: 'bold'
})

var rect = logo.rect(166, 50).move(300, 160).fill('{{ site.data.attributes.defaults.third-color }}')
rect.radius(10)

var registered = logo.text('REGISTERED').move(384, 164).fill('{{ site.data.attributes.defaults.alt-colour }}')
registered.font({
  family: 'Helvetica-Condensed',
  size: 30,
  anchor: 'middle',
})
