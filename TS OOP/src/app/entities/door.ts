import {HouseStyle} from '../interfaces';

export class Door {
  public doorSize = 0;
  public doorStyle: HouseStyle = HouseStyle.NEO;
  public open = false;

  public openDoor(): void {
    // код, который открывает дверь
  }

  public closeDoor(): void {
    // код, который закрывает дверь
  }
}
