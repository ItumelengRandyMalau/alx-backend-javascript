
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (floors === undefined || floors === null) {
      throw new Error('floors must be defined');
    } else if (typeof floors === 'string') {
      throw new Error('floors must be a number');
    } else if (typeof floors !== 'number' || floors <= 0) {
      throw new Error('floors must be a positive number');
    } else if (!Number.isFinite(floors)) {
      throw new Error('floors must be a finite number');
    }
    this._floors = Number(floors);
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
