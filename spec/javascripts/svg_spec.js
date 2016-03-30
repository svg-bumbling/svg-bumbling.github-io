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

    it('understands reversed gradients', function() {
      expect(gradient('#fa8100', '#000000', 4)).toEqual(
        [
          '#fa8100',
          '#c86700',
          '#964d00',
          '#643400',
          '#321a00',
          '#000000',
          '#321a00',
          '#643400',
          '#964d00',
          '#c86700'
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
            'dd'
          ]
        )
      })
    })

    describe('straight_steps', function() {
      it('returns evenly-spaced steps', function() {
        expect(straight_steps(8, 0)).toEqual(
          [ 8 ]
        )

        expect(straight_steps(8, 1)).toEqual(
          [ 4, 4 ]
        )

        expect(straight_steps(8, 3)).toEqual(
          [ 2, 2, 2, 2 ]
        )

        expect(straight_steps(11, 3)).toEqual(
          [ 2.75, 2.75, 2.75, 2.75 ]
        )
      })
    })

    describe('sinusoidal_steps', function() {
      it('gets the simplest step set', function() {
        expect(sinusoidal_steps(32, 0)).toEqual(
          [ 32 ]
        )
      })

      it('gets a slightly more complex set', function() {
        expect(sinusoidal_steps(32, 1)).toEqual(
          [ 16, 16 ]
        )
      })

      it('deals with actual sines', function() {
        expect(sinusoidal_steps(1, 1)).toEqual(
          [
            0.5,
            0.5
          ]
        )
      })

      it('deals with scaled sines', function() {
        expect(sinusoidal_steps(2, 1)).toEqual(
          [
            1,
            1
          ]
        )
      })

      it('handles more steps', function() {
        expect(sinusoidal_steps(1, 3)).toEqual(
          [
            0.15,
            0.35,
            0.35,
            0.15
          ]
        )
      })

      it('handles an even number of steps', function() {
        expect(sinusoidal_steps(1, 4)).toEqual(
          [
            0.1,
            0.25,
            0.31,
            0.25,
            0.1
          ]
        )
      })

      it('handles an even number of steps with scale', function() {
        expect(sinusoidal_steps(7, 6)).toEqual(
          [
            0.35,
            0.97,
            1.4,
            1.56,
            1.4,
            0.97,
            0.35
          ]
        )
      })

      it('gets actual sinusoidal hex gradients', function() {
        expect(gradient('#fa8100', '#000000', 4, 'sinusoidal')).toEqual(
          [
            '#fa8100',
            '#e27500',
            '#a45400',
            '#562d00',
            '#180c00',
            '#000000',
            '#180c00',
            '#562d00',
            '#a45400',
            '#e27500'
          ]
        )
      })

      it('rounds things sanely', function() {
        expect(rounder(1.32431243214)).toEqual(
          1.32
        )
      })
    })
  })
})
