import {SecuritySystem, SecuritySystemType} from './security-system';

type DoorStyle = 'neo' | 'classic' | 'modern';

export class Door extends SecuritySystem {
  private open = false;

  constructor(
    private readonly doorSize = 0,
    private readonly doorStyle: DoorStyle
  ) {
    super();
  }

  public openDoor(): void {
    // код, который открывает дверь
  }

  public closeDoor(): void {
    // код, который закрывает дверь
  }

  public setSecuritySystem(type: SecuritySystemType): void {
    this.securitySystemType = type;
  }
}
