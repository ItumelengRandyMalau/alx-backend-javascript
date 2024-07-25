export default class Car {
	  constructor(brand, motor, color) {
		      this._brand = brand;
		      this._motor = motor;
		      this._color = color;
		    }

	  cloneCar() {
		      const clonedCar = new this.constructor[Symbol.species]();
		      return clonedCar;
		    }

	  static get [Symbol.species]() {
		      return this;
		    }
}
