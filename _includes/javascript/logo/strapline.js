{% include javascript/logo/plain.js %}

var text = logo.text('Knowledge for everyone')

text.fill('{{ site.data.attributes.defaults.alt-colour }}')
text.move(34, 90)
text.font({
  family: 'Helvetica Neue',
  size: 35,
  anchor: 'center',
  weight: 'bold',
  leading: 0.9
})
