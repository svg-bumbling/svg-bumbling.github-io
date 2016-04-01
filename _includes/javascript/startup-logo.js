{% include paths/odi.js %}

var colour = '{{ site.data.attributes.defaults.colour }}'
var alt_colour = '{{ site.data.attributes.defaults.alt-colour }}'

var back = SVG('canvas')
back.viewbox({
  x: -30,
  y: -30,
  width: 527,
  height: 262
})
var border = back.path(odi_path.join(' ')).stroke({color: colour, width: 40})

var middle = back.nested()
middle.viewbox({
  x: 0,
  y: 0,
  width: 527,
  height: 262
})
var margin = middle.path(odi_path.join(' ')).stroke({color: alt_colour, width: 33})

var front = middle.nested()
front.viewbox({
  x: 0,
  y: 0,
  width: 527,
  height: 262
})
var badge = middle.path(odi_path.join(' ')).fill({color: colour})

var text = back.text('STARTUP').move(238, 34).fill(alt_colour)
text.font({
  family: 'Helvetica-Condensed',
  size: 75,
  anchor: 'middle',
  weight: 'bold',
  'letter-spacing': 4
})
