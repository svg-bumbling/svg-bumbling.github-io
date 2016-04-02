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
var back = logo.path(odi_path.join(' ')).fill(colour)
var front = logo.path(odi_path.join(' ')).fill(alt_colour)
front.transform({scale: 0.7})

var text = logo.text('CONNECT').move(240, 72).fill(colour)
text.font({
  family: 'Helvetica Neue',
  size: 40,
  anchor: 'middle',
  weight: 'bold',
  'letter-spacing': 5
})

var connect = logo.group()
group.add(back)
group.add(front)
group.add(text)
