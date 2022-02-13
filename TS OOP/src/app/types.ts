export type HouseType = 'neo' | 'classic' | 'modern';

export interface HouseInterface {
  type: HouseType;
  windows: WindowModelInterface[];
  door: DoorInterface;
  securitySystem?: SecuritySystemInterface;
  openAllWindows(): void;
  paint(color: string): void;
  addFloor(): void;
}

export type WindowStyleType = 'neo' | 'classic' | 'modern';

export interface WindowModelInterface {
  readonly size: number;
  readonly style: WindowStyleType;
  readonly isOpen: boolean;

  openWindow(): void;

  closeWindow(): void;
}

export type DoorStyleType = 'neo' | 'classic' | 'modern';

export interface DoorInterface {
  readonly doorStyle: DoorStyleType;
  readonly doorSize: number;
  readonly isOpen: boolean;

  openDoor(): void;

  closeDoor(): void;
}

export type SecuritySystemType = 'modern' | 'amateur' | 'professional';
export type SecuritySystemStatus = 'ok' | 'warning' | 'error';

export interface SecuritySystemInterface {
  enableSecuritySystem(): void;

  disableSecuritySystem(): void;

  getStatus(): SecuritySystemStatus;

  diagnosingSecuritySystem(): void;
}

export interface WindowsParams {
  type: WindowStyleType;
  size: number;
  count: number;
}
