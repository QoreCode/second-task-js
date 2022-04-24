import {HouseStyle} from '../interfaces';

export interface IWindowConfig {
  size: number;
  style: HouseStyle
}

export class WindowModel {
  public config: IWindowConfig = {
    size: 0,
    style: HouseStyle.NEO
  }

  public open = false;

  constructor(config: IWindowConfig) {
    this.config = {
      ...this.config,
      ...config
    }
  }

  public openWindow(): void {
    // код, который открывает дверь
    this.open = true;
  }

  public closeWindow(): void {
    // код, который закрывает дверь
    this.open = false;
  }
}
