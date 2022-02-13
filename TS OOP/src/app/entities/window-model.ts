import { WindowModelInterface, WindowStyleType } from '../types';

export class WindowModel implements WindowModelInterface {
  public readonly size: number;
  public readonly style: WindowStyleType;
  public readonly isOpen;

  constructor(style: WindowStyleType, size = 0, isOpen = false) {
    this.size = size;
    this.style = style;
    this.isOpen = isOpen;
  }

  public openWindow(): void {
    // код, который открывает дверь
  }

  public closeWindow(): void {
    // код, который закрывает дверь
  }
}

export class ModernWindowModel extends WindowModel {
  constructor(size = 0, isOpen = false) {
    super('modern', size, isOpen);
  }
}

export class ClassicWindowModel extends WindowModel {
  constructor(size = 0, isOpen = false) {
    super('classic', size, isOpen);
  }
}

export class NeoWindowModel extends WindowModel {
  constructor(size = 0, isOpen = false) {
    super('neo', size, isOpen);
  }
}
