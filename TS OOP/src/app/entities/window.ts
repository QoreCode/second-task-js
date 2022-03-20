interface Props {
  size: number;
  style: WindowStyle;
}

export type WindowStyle = 'neo' | 'classic' | 'modern';

export class Window {
  private size: number = 0;
  private style: WindowStyle = 'neo';
  private isOpen: boolean = false;

  public constructor({ size, style }: Props) {
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
