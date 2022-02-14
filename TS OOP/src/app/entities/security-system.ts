export type SecuritySystemType = 'modern' | 'amateur' | 'professional';

export class SecuritySystem {
  protected securitySystemType: SecuritySystemType;
  private status: 'ok' | 'warning' | 'error' = 'ok';
  private enabled = false;
  private securitySystemNotCreated = true; // Зачем это нужно?

  constructor(securitySystemType: SecuritySystemType = 'modern') {
    this.securitySystemType = securitySystemType;
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
