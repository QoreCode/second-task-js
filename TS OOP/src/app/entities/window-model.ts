export type WindowType = 'neo' | 'classic' | 'modern';

export class WindowModel {
  private open = false

  constructor(
    private readonly size = 0,
    private readonly style: WindowType = 'neo',
  ) {}

  public openWindow(): void {
    // код, который открывает дверь
  }

  public closeWindow(): void {
    // код, который закрывает дверь
  }
}
