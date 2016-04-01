{% include javascript/logo/glowing.js %}

{% include javascript/common/get-word.js %}

var text = logo.text(word.toUpperCase()).move(232, 30).fill('{{ site.data.attributes.defaults.alt-colour }}')
text.font({
  family: 'Helvetica-Condensed',
  size: 85,
  anchor: 'middle',
  weight: 'bold'
})
