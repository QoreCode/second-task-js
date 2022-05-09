import { Style } from '../types/style';
import { SystemType } from '../types/system';
import { Door } from './door';
import { WindowModel } from './window-model';

export class House extends Door {
  public maxFloor = 1;
  public color = 'black';
  public windows: WindowModel[] | null = null;

  public constructor(
    windowsConfig: { count: number, size: number; style: Style },
    doorConfig: { size: number; style: Style },
    securitySystemConfig?: { type: SystemType },
  ) {

    super();

    if (securitySystemConfig) {
      this.securitySystemNotCreated = true;
      this.securitySystemType = securitySystemConfig.type;
    }

    this.windows = Array.from({ length: windowsConfig.count }, () => {
      const window = new WindowModel();
      const { size, style } = windowsConfig;

      window.size = size;
      window.style = style;

      return window;
    })

    this.doorSize = doorConfig.size;
    this.doorStyle = doorConfig.style;
  }

  public openAllWindows(): void {
    if (this.windows) {
      this.windows.forEach((item) => item.openWindow())
    }
  }

  public paint(color: string): void {
    this.color = color;
  }

  public addFloor(): void {
    this.maxFloor += 1;
  }
}
