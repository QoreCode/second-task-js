import { House } from './entities/house';
import { Door, DoorStyle } from './entities/door';
import { Window, WindowStyle } from './entities/window';
import { SecuritySystem, SecuritySystemType } from './entities/security-system';

export class HouseBuilder {
  private house: House = new House();

  public constructor() {
    this.reset();
  }

  public addFloor() {
    this.house.addFloor();
    return this;
  }

  public addDoor(doorConfig: { size: number; style: DoorStyle }) {
    this.house.addDoor(new Door(doorConfig));
    return this;
  }

  public addWindow(windowConfig: { size: number; style: WindowStyle }) {
    this.house.addWindow(new Window(windowConfig));
    return this;
  }

  public addSecuritySystem(securitySystemConfig: { type: SecuritySystemType }) {
    this.house?.addSecuritySystem(new SecuritySystem(securitySystemConfig));
    return this;
  }

  public addColor(color: string) {
    this.house.paint(color);
    return this;
  }

  public getHouse() {
    const house = this.house;
    this.reset();
    return house;
  }

  public reset() {
    this.house = new House();
  }
}
