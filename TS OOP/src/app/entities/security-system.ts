import {SecurityType} from '../interfaces';

export class SecuritySystem {
  public securitySystemType: SecurityType = SecurityType.MODERN;
  public status: 'ok' | 'warning' | 'error' = 'ok';
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
    if (this.securitySystemType === SecurityType.PROFESSIONAL) {
      // код, который уведомляет пользователя на почту
    }

    if (this.securitySystemType === SecurityType.MODERN) {
      // код, который уведомляет пользователя на телефон
    }

    if (this.securitySystemType === SecurityType.AMATEUR) {
      // код, который уведомляет пользователя мелом на доске
    }
  }
}
