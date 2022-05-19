// WindowModel
export type Style = 'neo' | 'classic' | 'modern';

export interface IWindowModel {
  size: number;
  style: Style;
  isOpen: boolean;
}

export type WindowModelParams = Omit<IWindowModel, 'isOpen'>;
export interface IWindowsConfig extends WindowModelParams {
  count: number;
}

// SecuritySystem
export type SecuritySystemType = 'modern' | 'amateur' | 'professional';
export type Status = 'ok' | 'warning' | 'error';

export interface ISecuritySystemParams {
  type: 'modern' | 'amateur' | 'professional';
}

export interface ISecuritySystem {
  enableSecuritySystem(): void;

  disableSecuritySystem(): void;

  diagnosingSecuritySystem(): void;
}

// Door
export type DoorStyle = 'neo' | 'classic' | 'modern';

export interface IDoorParams {
  size: number;
  style: DoorStyle;
}

export interface IDoor {
  openDoor(): void;

  closeDoor(): void;
}

// House
export interface IHouse {
  maxFloor: number;
  color: string;
  windows: IWindowModel[];
  door: IDoor;
  securitySystem: ISecuritySystem | null;

  openAllWindows(): void;

  paint(color: string): void;

  addFloor(): void;
}
