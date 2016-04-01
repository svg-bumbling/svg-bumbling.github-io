{% include paths/odi.js %}

var colour = '{{ site.data.attributes.defaults.colour }}'
var alt_colour = '{{ site.data.attributes.defaults.alt-colour }}'
var logo = SVG('canvas')
logo.viewbox({
  x: 0,
  y: 0,
  width: 467,
  height: 202
})

var badge = logo.path(odi_path.join(' ')).fill(colour)
var circle = logo.circle(175).fill(alt_colour).move(13, 13)
var text = logo.text('NODE').move(102, 38).fill(colour)
text.font({
  family: 'Helvetica-Condensed',
  size: 70,
  anchor: 'middle',
  weight: 'bold'
})

var node = logo.group()
node.add(badge)
node.add(circle)
node.add(text)
