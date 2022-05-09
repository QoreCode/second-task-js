import { SystemStatus, SystemType } from '../types/system';

export class SecuritySystem {
  public securitySystemType: SystemType = 'modern';
  public status: SystemStatus = 'ok';
  public enabled = false;
  public securitySystemNotCreated = true;

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
    if (this.securitySystemType === 'professional') {
      // код, который уведомляет пользователя на почту
    }

    if (this.securitySystemType === 'modern') {
      // код, который уведомляет пользователя на телефон
    }

    if (this.securitySystemType === 'amateur') {
      // код, который уведомляет пользователя мелом на доске
    }
  }
}
