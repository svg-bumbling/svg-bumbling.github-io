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
  var start_bytes = bytes(start)
  var end_bytes = bytes(end)
  var grad = []

  var red = byte_gradient(start_bytes[0], end_bytes[0], steps)
  var green = byte_gradient(start_bytes[1], end_bytes[1], steps)
  var blue = byte_gradient(start_bytes[2], end_bytes[2], steps)

  for(i = 0; i < red.length; i++) {
    grad.push('#' + red[i] + green[i] + blue[i])
  }

  forward = grad.slice(0)
  forward.pop()
  back = grad.reverse().slice(0)
  back.pop()
  return forward.concat(back)
}

function bytes(hex) {
  return hex.split('#')[1].match(/.{2}/g)
}

function byte_gradient(start, end, steps) {
  reversed = false
  if(start > end) {
    var tmp = start
    start = end
    end = tmp
    reversed = true
  }

  start_int = parseInt(start, 16)
  end_int = parseInt(end, 16)

  interval = end_int - start_int
  increment = interval / (steps + 1)
  accumulator = start_int

  grad = [start]
  for(i = 0; i <= steps; i++) {
    grad.push(String('0' + Math.round(accumulator += increment).toString(16)).slice(-2))
  }

  if(reversed == true) {
    grad = grad.reverse()
  }

  return grad
}
