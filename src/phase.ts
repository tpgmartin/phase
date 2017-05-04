export default class Phase {

  store: object

  constructor () {
    this.store = {}
  }

  setState (state: object) {
    Object.assign(this.store, state)
  }

}
