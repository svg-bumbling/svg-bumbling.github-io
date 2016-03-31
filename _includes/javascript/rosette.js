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

$('#canvas')
var outer = logo.path(rosette_paths[0].join(' ')).fill(colour)
//var outer = logo.path(rosette_paths[1]).fill(other_colour)
