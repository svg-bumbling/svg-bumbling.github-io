{% include javascript/logo/plain.js %}

{% include javascript/common/say-odi.js %}

text.fill('{{ site.data.attributes.defaults.alt-colour }}')
text.move(32, 50)
text.font({
  family: 'Helvetica Neue',
  size: 35,
  anchor: 'left',
  weight: 'bold',
  leading: 0.9
})
