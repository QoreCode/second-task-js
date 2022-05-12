import type { IDoor, IDoorParams, IHouse, ISecuritySystem, ISecuritySystemParams, IWindowsConfig } from '../interfaces';
import { Door } from './door';
import { SecuritySystem } from './security-system';
import { WindowModel } from './window-model';

export class House implements IHouse {
  public maxFloor = 1;
  public color = 'black';
  public windows: WindowModel[];
  public door: IDoor;
  public securitySystem: ISecuritySystem | null = null;

  public constructor({ count, style, size }: IWindowsConfig, doorConfig: IDoorParams, securitySystemConfig?: ISecuritySystemParams) {
    this.door = new Door(doorConfig);
    this.windows = Array.from({ length: count }, () => new WindowModel({ size, style }));

    if (securitySystemConfig) {
      this.securitySystem = new SecuritySystem(securitySystemConfig);
    }
  }

  public openAllWindows(): void {
    this.windows.forEach((window) => {
      window.openWindow();
    });
  }

  public paint(color: string): void {
    this.color = color;
  }

  public addFloor(): void {
    this.maxFloor += 1;
  }
}
