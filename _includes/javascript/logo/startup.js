{% include paths/odi.js %}

var colour = '{{ site.data.attributes.defaults.colour }}'
var alt_colour = '{{ site.data.attributes.defaults.alt-colour }}'

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

var text = logo.text('STARTUP').move(238, 34).fill(alt_colour)
text.font({
  family: 'Helvetica-Condensed',
  size: 75,
  anchor: 'middle',
  weight: 'bold',
  'letter-spacing': 4
})

var group = logo.group()
group.add(border)
group.add(margin)
group.add(badge)
group.add(text)
