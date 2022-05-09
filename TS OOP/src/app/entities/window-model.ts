import { Style } from '../types/style';

export class WindowModel {
  public size = 0;
  public style: Style = 'neo';
  public open = false;

  public openWindow(): void {
    // код, который открывает дверь
  }

  public closeWindow(): void {
    // код, который закрывает дверь
  }
}
