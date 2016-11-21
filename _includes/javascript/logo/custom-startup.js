{% include paths/odi.js %}

var colour = '{{ site.data.attributes.defaults.colour }}'
var alt_colour = '{{ site.data.attributes.defaults.alt-colour }}'

var alt_colour = '#000000'
var colour = '#ffffff'

var first = getUrlVars()['first']
var second = getUrlVars()['second']
var colour = getUrlVars()['primary']
var alt_colour = getUrlVars()['secondary']

var logo = SVG('canvas')
logo.viewbox({
  x: -30,
  y: -30,
  width: 527,
  height: 262
})
var border = logo.path(odi_path.join(' ')).stroke({color: colour, width: 40})
var margin = logo.path(odi_path.join(' ')).stroke({color: alt_colour, width: 33})
var badge = logo.path(odi_path.join(' ')).fill({color: colour})

var text = logo.text(first + ' ' + second).move(238, 50).fill(alt_colour)

text.font({
  family: 'Helvetica-Condensed',
  size: 50,
  anchor: 'middle',
  weight: 'bold',
  'letter-spacing': 1
})

var group = logo.group()
group.add(border)
group.add(margin)
group.add(badge)
group.add(text)

{% include javascript/functions/get-url-car-crash.js %}
