import type { IWindowModel, WindowModelParams } from '../interfaces';
import { Style } from '../interfaces';

export class WindowModel implements IWindowModel {
  public size = 0;
  public style: Style = "neo";
  public isOpen = false;

  constructor({ style, size }: WindowModelParams) {
    this.size = size;
    this.style = style;
  }

  public openWindow(): void {
    // код, который открывает дверь
  }

  public closeWindow(): void {
    // код, который закрывает дверь
  }
}
