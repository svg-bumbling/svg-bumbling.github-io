var colour = '{{ site.data.attributes.defaults.colour }}'
var string = getUrlVars()['string']
if(string === undefined) {
  string = '© 1982 Sinclair Research Ltd'
}

$.getJSON('http://uncleclive.herokuapp.com/' + string, function(json) {
  var data = json.data
  var logo = SVG('canvas')
  logo.viewbox({
    x: 0,
    y: 0,
    width: data[0].length,
    height: data.length
  })

  for(i = 0; i < data.length; i++) {
    var row = data[i]
    for(j = 0; j < row.length; j++) {
      if(row[j] == 1) {
        var x = logo.rect(1, 1).move(j, i)
        x.fill(colour)
      }
    }
  }
})

{% include javascript/functions/get-url-car-crash.js %}
