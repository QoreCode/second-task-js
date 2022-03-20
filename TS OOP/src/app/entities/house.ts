import { SecuritySystem } from './security-system';
import { Window } from './window';
import { Door } from './door';

export class House {
  private maxFloor: number = 1;
  private color: string = 'black';
  private windows: Window[] | null = null;
  private doors: Door[] | null = null;
  private securitySystem: SecuritySystem | null = null;
  private securitySystemNotCreated: boolean = false;

  public openAllWindows() {
    if (!this.windows) {
      return;
    }

    this.windows.forEach((window) => {
      window.openWindow();
    });
  }

  public paint(color: string) {
    this.color = color;
  }

  public addFloor() {
    this.maxFloor += 1;
  }

  public addWindow(window: Window) {
    if (!this.windows) {
      this.windows = [];
    }
    this.windows.push(window);
  }

  public addDoor(door: Door) {
    if (!this.doors) {
      this.doors = [];
    }
    this.doors.push(door);
  }

  public addSecuritySystem(securitySystem : SecuritySystem) {
    this.securitySystemNotCreated = true;
    this.securitySystem = securitySystem;
  }
}
