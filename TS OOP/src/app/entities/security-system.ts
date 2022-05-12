import type { ISecuritySystem, ISecuritySystemParams, SecuritySystemType, Status } from '../interfaces';
import { Notification } from './notification';

export class SecuritySystem implements ISecuritySystem {
  public securitySystemType: SecuritySystemType = 'modern';
  public status: Status = 'ok';
  public enabled = false;
  public isCreatedSecuritySystem = false;

  constructor({ type }: ISecuritySystemParams) {
    this.securitySystemType = type;
  }

  public enableSecuritySystem(): void {
    // код, который включает систему
  }

  public disableSecuritySystem(): void {
    // код, который выключает систему
  }

  public diagnosingSecuritySystem(): void {
    // код, который диагностирует систему

    this.pushStatusNotification();
  }

  protected pushStatusNotification(): void {
    Notification.send(this.securitySystemType);
  }
}
