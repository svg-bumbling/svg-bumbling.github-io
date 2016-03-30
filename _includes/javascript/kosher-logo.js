{% include paths/odi.js %}

var colour = '{{ site.data.attributes.defaults.colour }}'
var logo = SVG('canvas')
logo.viewbox({
  x: 0,
  y: 0,
  width: 467,
  height: 202
})

var badge = logo.path(odi_path.join(' ')).fill(colour)
