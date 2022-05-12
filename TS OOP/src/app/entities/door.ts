import { DoorStyle, IDoor, IDoorParams } from '../interfaces';

export class Door implements IDoor {
  public doorSize = 0;
  public doorStyle: DoorStyle = 'neo';
  public open = false;

  public constructor({ size, style }: IDoorParams) {
    this.doorSize = size;
    this.doorStyle = style;
  }

  public openDoor(): void {
    // код, который открывает дверь
  }

  public closeDoor(): void {
    // код, который закрывает дверь
  }
}
