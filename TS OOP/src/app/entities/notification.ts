import type { SecuritySystemType } from '../interfaces';

export class Notification {
  static send(systemType: SecuritySystemType): void {
    if (systemType === 'professional') {
      // код, который уведомляет пользователя на почту
    }

    if (systemType === 'modern') {
      // код, который уведомляет пользователя на телефон
    }

    if (systemType === 'amateur') {
      // код, который уведомляет пользователя мелом на доске
    }
  }
}
