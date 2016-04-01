{% include javascript/glowing-logo.js %}

{% include javascript/common/get-word.js %}

var text = logo.text(word.toUpperCase()).move(232, 10).fill('{{ site.data.attributes.defaults.alt-colour }}')
text.font({
  family: 'Helvetica-Condensed',
  size: 105,
  anchor: 'middle',
  weight: 'bold'
})
