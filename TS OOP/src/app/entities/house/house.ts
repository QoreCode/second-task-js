import { Door } from '../house-openings/door';
import { SecuritySystem } from '../security-systems/security-system';
import { Window } from '../house-openings/window';

export class House {
  private _door?: Door;
  private _floorCount: number = 0;
  private _color?: string;
  private _windows: Window[] = [];
  private _securitySystem?: SecuritySystem;

  public openAllWindows() {
    this._windows.forEach(window => {
      window.open();
    });
  }

  public get color(): string|undefined {
    return this._color;
  }

  /**
   * 
   * @deprecated, use {@link color} instead
   */
  public paint(color: string|undefined) {
    this.color = color;
  }

  public set color(color: string|undefined) {
    this._color = color;
  }

  public get floorCount(): number {
    return this._floorCount;
  }

  public addFloor() {
    this._floorCount += 1;
  }

  public set floorCount(floorCount: number) {
    if (!Number.isInteger(floorCount) || floorCount < 1) {
      throw new Error("Wrong floor count!");
    }
    this._floorCount = floorCount;
  }

  public get windows(): ReadonlyArray<Window> {
    return this._windows;
  }

  public addWindow(window: Window) {
    this._windows.push(window);
  }

  public get door(): Door|undefined {
    return this._door;
  }

  public set door(door: Door|undefined) {
    this._door = door;
  }

  public get securitySystem(): SecuritySystem|undefined {
    return this._securitySystem;
  }

  public set securitySystem(securitySystem: SecuritySystem|undefined) {
    this._securitySystem = securitySystem;
  }
}
