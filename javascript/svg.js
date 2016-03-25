function step(value) {
  if(value == '0') {
    return '1'
  }
  if(value == 'f') {
    return 'e'
  }

  if(Math.random() > 0.5) {
    return (parseInt(value, 16) + 1).toString(16)
  } else {
    return (parseInt(value, 16) - 1).toString(16)
  }
}
