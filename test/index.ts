import { expect } from 'chai'
import Phase from '../src/phase'

describe('Phase', () => {

  let phase

  beforeEach(() => {
    phase = new Phase
  })

  describe('setState', () => {

    it('should set state of instance', () => {

      phase.setState({count: 1})

      expect(phase.store['count']).to.equal(1)

    })

  })

})
