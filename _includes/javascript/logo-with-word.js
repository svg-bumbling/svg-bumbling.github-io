{% include javascript/glowing-logo.js %}

var word = getUrlVars()['word']
if(word === undefined) {
  word = 'labs'
}

var text = logo.text(word).move(232, 10).fill('{{  site.data.attributes.defaults.text-colour }}')
text.font({
  family: 'Helvetica Neue',
  size: 100,
  anchor: 'middle'
})

{% include javascript/functions/get-url-car-crash.js %}
