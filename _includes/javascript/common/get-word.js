{% include javascript/functions/get-url-car-crash.js %}

var word = getUrlVars()['word']
if(word === undefined) {
  word = 'labs'
}
