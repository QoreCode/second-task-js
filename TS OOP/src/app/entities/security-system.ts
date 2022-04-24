import {SecurityStatus, SecurityType} from '../interfaces';

export interface ISecuritySystemConfig {
  type: SecurityType;
}

export class SecuritySystem {
  public status: SecurityStatus = SecurityStatus.OK;
  public enabled = false;

  public config: ISecuritySystemConfig = {
    type: SecurityType.MODERN
  }

  constructor(config?: Partial<ISecuritySystemConfig>) {
    this.config = {
      ...this.config,
      ...config
    }
  }

  public enableSecuritySystem(): void {
    // код, который включает систему
    this.enabled = true;
  }

  public disableSecuritySystem(): void {
    // код, который выключает систему
    this.enabled = false;
  }

  public diagnosingSecuritySystem(): void {
    // код, который диагностирует систему

    this.pushStatusNotification();
  }

  protected pushStatusNotification(): void {
    switch (this.config.type) {
      case SecurityType.PROFESSIONAL: {
        // код, который уведомляет пользователя на почту
        break;
      }
      case SecurityType.MODERN: {
        // код, который уведомляет пользователя на телефон
        break;
      }
      case SecurityType.AMATEUR: {
        // код, который уведомляет пользователя мелом на доске
        break;
      }
    }
  }
}
