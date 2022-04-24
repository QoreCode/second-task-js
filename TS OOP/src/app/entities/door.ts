import {HouseStyle} from '../interfaces';

export interface IDoorConfig {
  size: number;
  style: HouseStyle
}

export class Door {
  public open = false;

  constructor(public config: IDoorConfig) {
  }

  public openDoor(): void {
    // код, который открывает дверь
    this.open = true;
  }

  public closeDoor(): void {
    // код, который закрывает дверь
    this.open = false;
  }
}
