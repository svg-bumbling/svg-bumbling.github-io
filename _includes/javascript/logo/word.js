{% include javascript/logo/glowing.js %}

{% include javascript/common/get-word.js %}

var text = logo.text(word).move(232, 10).fill('{{ site.data.attributes.defaults.alt-colour }}')
text.font({
  family: 'Helvetica Neue',
  size: 100,
  anchor: 'middle'
})
