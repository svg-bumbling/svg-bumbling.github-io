{% include paths/odi.js %}

var colour = '{{ site.data.attributes.defaults.colour }}'
var logo = SVG('canvas')
logo.viewbox({
  x: 0,
  y: 0,
  width: 467,
  height: 222
})

var badge = logo.path(odi_path.join(' ')).fill(colour)
for(i = 0; i < 200; i++) {
  badge.clone().dmove(1, 1)
}
