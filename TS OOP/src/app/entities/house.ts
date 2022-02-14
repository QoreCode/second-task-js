import { Door } from './door';
import { WindowModel } from './window-model';

export class House {
  public maxFloor = 1;
  public color = 'black';
  public windows: WindowModel[] = [];
  public door: Door | null = null;

  public setFloors(floorsCount: number): void {
    this.maxFloor = floorsCount;
  }

  public setWindows(windows: WindowModel[]): void {
    this.windows = windows;
  }

  public setDoor(door: Door): void {
    this.door = door;
  }

  public openAllWindows(): void {
    this.windows.forEach(window => window.openWindow());
  }

  public paint(color: string): void {
    this.color = color;
  }

  public addFloor(): void {
    this.maxFloor += 1;
  }
}
