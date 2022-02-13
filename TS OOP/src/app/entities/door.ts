import { DoorInterface, DoorStyleType } from '../types';

export class Door implements DoorInterface {
  public readonly doorSize: number;
  public readonly doorStyle: DoorStyleType;
  public readonly isOpen: boolean;

  constructor(doorStyle: DoorStyleType, doorSize = 0, isOpen = false) {
    this.doorSize = doorSize;
    this.doorStyle = doorStyle;
    this.isOpen = isOpen;
  }

  public openDoor(): void {
    // код, который открывает дверь
  }

  public closeDoor(): void {
    // код, который закрывает дверь
  }
}

export class ModernDoorModel extends Door {
  constructor(size = 0, isOpen = false) {
    super('modern', size, isOpen);
  }
}

export class ClassicDoorModel extends Door {
  constructor(size = 0, isOpen = false) {
    super('classic', size, isOpen);
  }
}

export class NeoDoorModel extends Door {
  constructor(size = 0, isOpen = false) {
    super('neo', size, isOpen);
  }
}
