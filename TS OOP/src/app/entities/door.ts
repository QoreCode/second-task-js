import {HouseStyle} from '../interfaces';
import { SecuritySystem } from './security-system';

export class Door extends SecuritySystem {
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
