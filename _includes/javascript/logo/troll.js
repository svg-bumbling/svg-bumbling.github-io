{% include javascript/logo/plain.js %}

var what = getUrlVars()['what']
var who = getUrlVars()['who']

var text = logo.text(what + ' for ' + who)

text.fill('{{ site.data.attributes.defaults.alt-colour }}')
text.move(234, 90)
text.font({
  family: 'Helvetica Neue',
  size: 35,
  anchor: 'middle',
  weight: 'bold',
  leading: 0.9
})

{% include javascript/functions/get-url-car-crash.js %}
