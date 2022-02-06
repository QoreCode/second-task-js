export class WindowModel {
  public size: number = 0;
  public style: 'neo' | 'classic' | 'modern' = 'neo';
  public open: boolean = false;

  public openWindow(): void {
    // код, который открывает дверь
  }

  public closeWindow(): void {
    // код, который закрывает дверь
  }
}
