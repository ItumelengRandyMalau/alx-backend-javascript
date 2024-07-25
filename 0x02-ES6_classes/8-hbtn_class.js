export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    }
    if (typeof location === 'string') {
      this._location = location;
    }
  }

  // eslint-disable-next-line consistent-return
  [Symbol.toPrimitive](value) {
    if (value === 'number') {
      return this._size;
    }
    if (value === 'string') {
      return this._location;
    }
  }
}
