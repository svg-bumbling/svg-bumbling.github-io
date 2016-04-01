{% include paths/odi.js %}

var colour = '{{ site.data.attributes.defaults.colour }}'
var alt_colour = '{{ site.data.attributes.defaults.alt-colour }}'

var logo = SVG('canvas')
logo.viewbox({
  x: -50,
  y: -50,
  width: 557,
  height: 292
})
var a = logo.path(odi_path.join(' ')).stroke({color: colour, width: 60})
var b = logo.path(odi_path.join(' ')).stroke({color: alt_colour, width: 53})
var c = logo.path(odi_path.join(' ')).stroke({color: colour, width: 32})
var d = logo.path(odi_path.join(' ')).stroke({color: alt_colour, width: 25})
var badge = logo.path(odi_path.join(' ')).fill({color: colour})

var text = logo.text('MENTORS').move(238, 34).fill(alt_colour)
text.font({
  family: 'Helvetica-Condensed',
  size: 75,
  anchor: 'middle',
  weight: 'bold',
  'letter-spacing': 4
})

var group = logo.group()
group.add(a)
group.add(b)
group.add(c)
group.add(d)
group.add(badge)
group.add(text)
