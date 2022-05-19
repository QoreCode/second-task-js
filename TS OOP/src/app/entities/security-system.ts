import type { ISecuritySystem, ISecuritySystemParams, SecuritySystemType, Status } from '../interfaces';
import { Notification } from './notification';

export class SecuritySystem implements ISecuritySystem {
  private securitySystemType: SecuritySystemType = 'modern';
  private status: Status = 'ok';
  private enabled = false;

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
