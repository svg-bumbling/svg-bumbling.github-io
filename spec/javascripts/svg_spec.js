describe('svg', function() {
  describe('step', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.5)
    })

    it('steps up from 00', function() {
      expect(step('00')).toEqual('01')
    })

    it('steps down from ff', function() {
      expect(step('ff')).toEqual('fe')
    })

    it('moves one step otherwise', function() {
      expect(step('77')).toEqual('76')
    })
  })

  describe('drift', function() {
    it('shifts one byte by one bit', function() {
      spyOn(Math, 'random').and.returnValue(0.1)
      expect(drift('abcdef')).toEqual('aacdef')
    })

    it('shifts a different byte by one bit', function() {
      spyOn(Math, 'random').and.returnValue(0.9)
      expect(drift('bcf564')).toEqual('bcf565')
    })

    it('behaves sensibly at the edge', function() {
      spyOn(Math, 'random').and.returnValue(1)
      expect(drift('ffffff')).toEqual('fffffe')
    })
  })
})
