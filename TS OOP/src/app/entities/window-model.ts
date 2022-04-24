import {HouseStyle} from '../interfaces';

export class WindowModel {
  public size = 0;
  public style: HouseStyle = HouseStyle.NEO;
  public open = false;

  public openWindow(): void {
    // код, который открывает дверь
  }

  public closeWindow(): void {
    // код, который закрывает дверь
  }
}
