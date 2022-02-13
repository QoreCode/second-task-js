import { SecuritySystemInterface, SecuritySystemStatus, SecuritySystemType } from '../types';

export abstract class SecuritySystem implements SecuritySystemInterface {
  public readonly securitySystemType: SecuritySystemType;
  protected status: SecuritySystemStatus;

  protected enabled = false;

  constructor(securitySystemType: SecuritySystemType = 'modern') {
    this.securitySystemType = securitySystemType;
    this.status = 'ok';
  }

  public getStatus(): SecuritySystemStatus {
    //
    return this.status;
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

  protected abstract pushStatusNotification(): void;
}

export class AmateurSecuritySystem extends SecuritySystem {
  constructor() {
    super('amateur');
  }
  pushStatusNotification(): void {
    // код, который уведомляет пользователя мелом на доске
  }
}

export class ModernSecuritySystem extends SecuritySystem {
  constructor() {
    super('modern');
  }
  protected pushStatusNotification(): void {
    // код, который уведомляет пользователя на телефон
  }
}

export class ProfessionalSecuritySystem extends SecuritySystem {
  constructor() {
    super('professional');
  }
  protected pushStatusNotification(): void {
    // код, который уведомляет пользователя на почту
  }
}
