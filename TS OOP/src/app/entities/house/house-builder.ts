import { House } from './house';
import { Door } from '../house-openings/door';
import { Window } from '../house-openings/window';
import { SecuritySystem } from '../security-systems/security-system';
import { HouseElementStyle } from '../styles/house-element-style';

export class HouseBuilder {

  private _house: House;
  private _style: HouseElementStyle;

  public constructor() {
    this._house = new House();
    this._style = HouseElementStyle.Neo;
  }

  public checkHouse() {
    if (!this._house.door) {
      throw new Error("House without door!");
    }
    if (!this._house.floorCount) {
      throw new Error("House without floors!");
    }
    if (!this._house.color) {
      throw new Error("You forgot to paint your house!");
    }
    // TODO: More checks ?
  }

  public switchToStyle(style: HouseElementStyle): HouseBuilder {
    this._style = style;
    return this;
  }

  public build(): House {
    this.checkHouse();
    return this._house;
  }

  public setFloorCount(floorCount: number): HouseBuilder {
    this._house.floorCount =  floorCount;
    return this;
  }

  public addFloor(): HouseBuilder {
    this._house.addFloor();
    return this;
  }

  public addDoor(size: number): HouseBuilder {
    if (this._house.door) {
      throw new Error("House already has a door!");
    }
    this._house.door = new Door(this._style, size);
    return this;
  }

  public addWindow(size: number): HouseBuilder {
    this._house.addWindow(new Window(this._style, size));
    return this;
  }

  public addWindows(count: number, size: number): HouseBuilder {
    if (!Number.isInteger(count) || count < 1) {
      throw new Error("Wrong window count!");
    }
    for (let i = 0; i < count; i++) {
      this._house.addWindow(new Window(this._style, size));
    }
    return this;
  }

  public paint(color: string): HouseBuilder {
    this._house.color = color;
    return this;
  }

  public addSecuritySystem<T extends SecuritySystem>(type: (new () => T)): HouseBuilder {
    if (this._house.securitySystem) {
      throw new Error("House already has a security system!");
    }
    this._house.securitySystem = new type();
    return this;
  }

  
}


