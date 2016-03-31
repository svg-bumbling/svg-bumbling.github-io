{% include paths/rosette.js %}

var colour = '{{ site.data.attributes.defaults.colour }}'
var other_colour = '{{ site.data.attributes.defaults.text_colour }}'
var logo = SVG('canvas')
logo.viewbox({
  x: 0,
  y: 0,
  width: 200,
  height: 170
})

var outer = logo.path(rosette_paths['outline'].join(' ')).fill(colour)
var odi = logo.path(rosette_paths['odi'].join(' ')).fill(other_colour)
var banner = logo.path(rosette_paths['banner'].join(' ')).fill(other_colour)
