interface Props {
  type: SecuritySystemType;
}

export type SecuritySystemType = 'modern' | 'amateur' | 'professional';
export type SecuritySystemStatus = 'ok' | 'warning' | 'error';

export class SecuritySystem {
  private type: SecuritySystemType = 'modern';
  private status: SecuritySystemStatus = 'ok';
  private isEnabled: boolean = false;

  public constructor({ type }: Props) {
    this.type = type;
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
    if (this.type === 'professional') {
      // код, который уведомляет пользователя на почту
    }

    if (this.type === 'modern') {
      // код, который уведомляет пользователя на телефон
    }

    if (this.type === 'amateur') {
      // код, который уведомляет пользователя мелом на доске
    }
  }
}
