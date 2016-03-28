function step(value) {
  if(value == '00') {
    return '01'
  }
  if(value == 'ff') {
    return 'fe'
  }

  if(Math.random() > 0.5) {
    return String('0' + (parseInt(value, 16) + 1).toString(16)).slice(-2)
  } else {
    return String('0' + (parseInt(value, 16) - 1).toString(16)).slice(-2)
  }
}

function drift(hex) {
  var bytes = hex.match(/.{2}/g)
  var index = 2
  if(Math.random() < (1/3)) {
    index = 0
  } else if(Math.random() < (2/3)) {
    index = 1
  }

  bytes[index] = step(bytes[index])

  return bytes.join('')
}

function gradient(start, end, steps) {
  grad = [start]

  start_bytes = bytes(start)
  end_bytes = bytes(end)

  for(i = steps; i > 0; i--) {
s = ''
for(j = 0; j < 3; j++) {
  s += String(Math.round((parseInt(end_bytes[j], 16) - parseInt(start_bytes[j], 16)) / (i + 1)).toString(16)).slice(-2)
}
grad.push('#' + s)
}
  grad.push(end)


    for(i = 0; i < steps; i++) {
      s = ''
      for(j = 0; j < 3; j++) {
        s += String(Math.round((parseInt(end_bytes[j], 16) - parseInt(start_bytes[j], 16)) / (i + 2)).toString(16)).slice(-2)
      }
      grad.push('#' + s)
    }



  String(((parseInt(end_bytes[0], 16) - parseInt(start_bytes[0], 16)) / (steps + 1)).toString(16)).slice(-2)

  return grad
}

function bytes(hex) {
  return hex.split('#')[1].match(/.{2}/g)
}

function byte_gradient(start, end, steps) {
  return [
    start,
    end
  ]
}
