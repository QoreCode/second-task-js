import {HouseStyle, SecurityType} from '../interfaces';
import { Door } from './door';
import { WindowModel } from './window-model';

export class House extends Door {
  public maxFloor = 1;
  public color = 'black';

  public windows: WindowModel[] = [];

  public constructor(
    windowsConfig: { count: number, size: number; style: HouseStyle },
    doorConfig: { size: number; style: HouseStyle },
    securitySystemConfig?: { type: SecurityType },
  ) {

    super();

    if (securitySystemConfig) {
      this.securitySystemNotCreated = true;
      this.securitySystemType = securitySystemConfig.type;
    }

    for(let i=0;i<windowsConfig.count;i++){
      const window = new WindowModel();
      window.size = windowsConfig.size;
      window.style = windowsConfig.style;
      this.windows.push(window);
    }

    this.doorSize = doorConfig.size;
    this.doorStyle = doorConfig.style;
  }

  public openAllWindows(): void {
    this.windows.forEach(w => w.openWindow());
  }

  public paint(color: string): void {
    this.color = color;
  }

  public addFloor(): void {
    this.maxFloor += 1;
  }
}
