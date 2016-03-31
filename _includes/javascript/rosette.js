{% include paths/rosette.js %}

var colour = '{{ site.data.attributes.defaults.colour }}'
var alt_colour = '{{ site.data.attributes.defaults.alt-colour }}'
var logo = SVG('canvas')
logo.viewbox({
  x: 0,
  y: 0,
  width: 200,
  height: 170
})

var outer = logo.path(rosette_paths['outline'].join(' ')).fill(colour)
var odi = logo.path(rosette_paths['odi'].join(' ')).fill(alt_colour)
var banner = logo.path(rosette_paths['banner'].join(' ')).fill(alt_colour)

{% include javascript/common/get-word.js %}

var text = logo.text(word.toUpperCase()).move(99, 125).fill(colour)
text.font({
  family: 'Helvetica-Condensed',
  size: 30,
  anchor: 'middle'
})
