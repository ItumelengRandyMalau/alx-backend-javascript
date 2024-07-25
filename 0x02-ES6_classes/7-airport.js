export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for Symbol.toStringTag
  get [Symbol.toStringTag]() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
