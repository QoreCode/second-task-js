import {Door} from "./entities/door";
import {House} from "./entities/house";
import {SecuritySystemType} from "./entities/security-system";
import {WindowModel} from "./entities/window-model";

interface DoorConfig {
  size: number;
  style: 'neo' | 'classic' | 'modern'
}

interface WindowsConfig {
  count: number;
  size: number;
  style: 'neo' | 'classic' | 'modern'
}

interface SecuritySystemConfig {
  type: SecuritySystemType
}

export class HouseBuilder {
  private house!: House;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.house = new House();
  }

  public buildWindows(config: WindowsConfig): HouseBuilder {
    this.house.setWindows(
      Array.from({ length: config.count })
        .map(() => new WindowModel(config.size, config.style))
    );

    return this;
  }

  public buildDoor(config: DoorConfig): HouseBuilder {
    this.house.setDoor(
      new Door(config.size, config.style)
    );

    return this;
  }

  public buildFloors(count = 1): HouseBuilder {
    this.house.setFloors(count);

    return this;
  }

  public setSecuritySystemType(type: SecuritySystemType): HouseBuilder {
    if (!this.house.door) {
      throw new Error("Can't set security system cause door not set");
    }

    this.house.door.setSecuritySystem(type);

    return this;
  }

  public setColor(color: string): HouseBuilder {
    this.house.paint(color);

    return this;
  }

  public getHouse(): House {
    return this.house;
  }
}

export class HouseDirector {
  constructor(private builder: HouseBuilder) {}

  public createModernHouse(maxFloor = 1): House {
    return this.builder
      .buildWindows({count: 3, size: 20, style: 'modern'})
      .buildDoor({size: 40, style: 'modern'})
      .buildFloors(maxFloor)
      .setSecuritySystemType('modern')
      .setColor('pink')
      .getHouse();
  }

  public createNeoHouse(maxFloor = 1): House {
    return this.builder
      .buildWindows({count: 4, size: 30, style: 'neo'})
      .buildDoor({size: 40, style: 'modern'})
      .buildFloors(maxFloor)
      .setSecuritySystemType('professional')
      .setColor('blue')
      .getHouse();
  }

  public createClassicHouse(maxFloor = 1): House {
    return this.builder
      .buildWindows({count: 2, size: 15, style: 'classic'})
      .buildDoor({size: 40, style: 'classic'})
      .buildFloors(maxFloor)
      .setSecuritySystemType('amateur')
      .setColor('blue')
      .getHouse();
  }

  public createCustomHouse(
    windowsConfig: WindowsConfig,
    doorConfig: DoorConfig,
  ): House {
    return this.builder
      .buildWindows(windowsConfig)
      .buildDoor(doorConfig)
      .getHouse()
  }
}
