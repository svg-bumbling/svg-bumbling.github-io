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

    it('behaves sensibly at the bottom edge', function() {
      spyOn(Math, 'random').and.returnValue(0)
      expect(drift('000000')).toEqual('010000')
    })
  })

  describe('gradient', function() {
    it('handles the simplest case', function() {
      expect(gradient('#000000', '#ffffff', 0)).toEqual (
        [
          '#000000',
          '#ffffff'
        ]
      )
    })

    it('inserts a single step', function() {
      expect(gradient('#000000', '#ffffff', 1)).toEqual (
        [
          '#000000',
          '#808080',
          '#ffffff',
          '#808080'
        ]
      )
    })

    it('inserts 3 steps', function() {
      expect(gradient('#000000', '#ffffff', 3)).toEqual (
        [
          '#000000',
          '#404040',
          '#808080',
          '#bfbfbf',
          '#ffffff',
          '#bfbfbf',
          '#808080',
          '#404040'
        ]
      )
    })

    it('gets bytes', function() {
      expect(bytes('#abcdef')).toEqual(
        [
          'ab',
          'cd',
          'ef'
        ]
      )
    })

    describe('byte_gradient', function() {
      it('gets the simplest byte gradient', function() {
        expect(byte_gradient('00', 'ff', 0)).toEqual(
          [
            '00',
            'ff'
          ]
        )
      })

      it('gets a byte gradient with 1 step', function() {
        expect(byte_gradient('00', '20', 1)).toEqual(
          [
            '00',
            '10',
            '20'
          ]
        )
      })

      it('gets a reversed gradient with 1 step', function() {
        expect(byte_gradient('20', '00', 1)).toEqual(
          [
            '20',
            '10',
            '00'
          ]
        )
      })

      it('gets a gradient that does not go to zero', function() {
        expect(byte_gradient('30', '50', 0)).toEqual(
          [
            '30',
            '50'
          ]
        )
      })

      it('gets a gradient with 3 steps', function() {
        expect(byte_gradient('40', '60', 3)).toEqual(
          [
            '40',
            '48',
            '50',
            '58',
            '60'
          ]
        )
      })

      it('gets a reversed gradient with 12 steps', function() {
        expect(byte_gradient('ee', 'dd', 12)).toEqual(
          [
            'ee',
            'ed',
            'eb',
            'ea',
            'e9',
            'e7',
            'e6',
            'e5',
            'e4',
            'e2',
            'e1',
            'e0',
            'de',
            'dd' ]
        )
      })
    })
  })
})
