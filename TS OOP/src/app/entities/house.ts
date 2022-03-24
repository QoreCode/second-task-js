import { Door } from './door';
import { WindowModel } from './window-model';

export class House extends Door {
  public maxFloor = 1;
  public color = 'black';
  public window1: WindowModel | null = null;
  public window2: WindowModel | null = null;
  public window3: WindowModel | null = null;
  public window4: WindowModel | null = null;

  public constructor(
    windowsConfig: { count: number, size: number; style: 'neo' | 'classic' | 'modern' },
    doorConfig: { size: number; style: 'neo' | 'classic' | 'modern' },
    securitySystemConfig?: { type: 'modern' | 'amateur' | 'professional' },
  ) {

    super();

    if (securitySystemConfig) {
      this.securitySystemNotCreated = true;
      this.securitySystemType = securitySystemConfig.type;
    }

    if (windowsConfig.count >= 1) {
      this.window1 = new WindowModel();
      this.window1.size = windowsConfig.size;
      this.window1.style = windowsConfig.style;
    }

    if (windowsConfig.count >= 2) {
      this.window2 = new WindowModel();
      this.window2.size = windowsConfig.size;
      this.window2.style = windowsConfig.style;
    }

    if (windowsConfig.count >= 3) {
      this.window3 = new WindowModel();
      this.window3.size = windowsConfig.size;
      this.window3.style = windowsConfig.style;
    }

    if (windowsConfig.count >= 4) {
      this.window4 = new WindowModel();
      this.window4.size = windowsConfig.size;
      this.window4.style = windowsConfig.style;
    }

    this.doorSize = doorConfig.size;
    this.doorStyle = doorConfig.style;
  }

  public openAllWindows() {
    this.window1?.openWindow();
    this.window2?.openWindow();
    this.window3?.openWindow();
    this.window4?.openWindow();
  }

  public paint(color: string) {
    this.color = color;
  }

  public addFloor() {
    this.maxFloor += 1;
  }
}
