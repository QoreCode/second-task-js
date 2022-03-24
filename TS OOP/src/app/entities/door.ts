import { SecuritySystem } from './security-system';

export class Door extends SecuritySystem {
  public doorSize = 0;
  public doorStyle: 'neo' | 'classic' | 'modern' = 'neo';
  public open = false;

  public openDoor(): void {
    // код, который открывает дверь
  }

  public closeDoor(): void {
    // код, который закрывает дверь
  }
}
