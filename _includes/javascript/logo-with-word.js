{% include javascript/glowing-logo.js %}

{% include javascript/common/get-word.js %}

var text = logo.text(word).move(232, 10).fill('{{ site.data.attributes.defaults.text-colour }}')
text.font({
  family: 'Helvetica Neue',
  size: 100,
  anchor: 'middle'
})
