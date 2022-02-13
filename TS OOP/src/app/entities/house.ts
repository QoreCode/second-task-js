import { DoorInterface, HouseInterface, HouseType, SecuritySystemInterface, WindowModelInterface, WindowsParams } from '../types';
import { ClassicDoorModel, ModernDoorModel, NeoDoorModel } from './door';
import { AmateurSecuritySystem, ModernSecuritySystem, ProfessionalSecuritySystem } from './security-system';
import { ClassicWindowModel, ModernWindowModel, NeoWindowModel } from './window-model';

export class House implements HouseInterface {
  protected maxFloor = 1;
  protected color = 'black';
  public readonly windows: WindowModelInterface[];
  public readonly door: DoorInterface;
  public readonly securitySystem?: SecuritySystemInterface;
  public readonly securitySystemNotCreated: boolean = true;
  public readonly type: HouseType = 'classic';

  constructor(
    type: HouseType = 'classic',
    windows: WindowModelInterface[],
    door: DoorInterface,
    maxFloor: number,
    color?: string,
    securitySystem?: SecuritySystemInterface
  ) {
    this.type = type;
    if (securitySystem) {
      this.securitySystemNotCreated = false;
    }
    this.windows = windows;
    this.door = door;
    this.maxFloor = maxFloor;
    if (color) {
      this.color = color;
    }
  }

  public openAllWindows(): void {
    this.windows.forEach((window: WindowModelInterface) => window.openWindow());
  }

  public paint(color: string): void {
    this.color = color;
  }

  public addFloor(): void {
    this.maxFloor += 1;
  }
}

export class NeoHouse extends House {
  constructor(maxFloor: number, color?: string, windowsCount = 4, windowsSize = 30, doorSize = 60) {
    const windows = [];
    for (let i = 0; i < windowsCount; i++) {
      windows.push(new NeoWindowModel(windowsSize));
    }
    super('neo', windows, new NeoDoorModel(doorSize), maxFloor, color, new ProfessionalSecuritySystem());
  }
}

export class ClassicHouse extends House {
  constructor(maxFloor: number, color?: string, windowsCount = 2, windowsSize = 15, doorSize = 40) {
    const windows = [];
    for (let i = 0; i < windowsCount; i++) {
      windows.push(new ClassicWindowModel(windowsSize));
    }
    super('classic', windows, new ClassicDoorModel(doorSize), maxFloor, color, new AmateurSecuritySystem());
  }
}

export class ModernHouse extends House {
  constructor(maxFloor: number, color?: string, windowsCount = 3, windowsSize = 20, doorSize = 40) {
    const windows = [];
    for (let i = 0; i < windowsCount; i++) {
      windows.push(new ModernWindowModel(windowsSize));
    }
    super('modern', windows, new ModernDoorModel(doorSize), maxFloor, color, new ModernSecuritySystem());
  }
}
