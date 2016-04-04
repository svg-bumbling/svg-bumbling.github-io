{% include javascript/logo/plain.js %}

var who = getUrlVars()['who']
if(who === undefined) {
  who = 'everyone'
}

var text = logo.text('Knowledge for ' + who)

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
