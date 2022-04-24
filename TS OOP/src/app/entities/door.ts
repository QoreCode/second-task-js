import {HouseStyle} from '../interfaces';

export interface IDoorConfig {
  size: number;
  style: HouseStyle
}

export class Door {
  public doorSize = 0;
  public doorStyle: HouseStyle = HouseStyle.NEO;
  public open = false;

  constructor(config?: Partial<IDoorConfig>) {
    this.doorStyle = config?.style ?? this.doorStyle;
    this.doorSize = config?.size ?? this.doorSize;
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
