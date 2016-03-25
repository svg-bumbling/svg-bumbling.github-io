describe('svg', function() {
  beforeEach(function() {
    spyOn(Math, 'random').and.returnValue(0.5)
  })

  describe('step', function() {
    it('steps up from 0', function() {
      expect(step('0')).toEqual('1')
    })

    it('steps down from f', function() {
      expect(step('f')).toEqual('e')
    })

    it('moves one step otherwise', function() {
      expect(step('7')).toEqual('6')
    })
  })
})
