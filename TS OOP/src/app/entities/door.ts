import {HouseStyle} from '../interfaces';

export interface IDoorConfig {
  size: number;
  style: HouseStyle
}

export class Door {
  public config: IDoorConfig = {
    size: 0,
    style: HouseStyle.NEO
  }

  public open = false;

  constructor(config: IDoorConfig) {
    this.config = {
      ...this.config,
      ...config
    }
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
