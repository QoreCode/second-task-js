import { House } from './house';
import { AmateurSecuritySystem } from '../security-systems/amateur-security-system';
import { ModernSecuritySystem } from '../security-systems/modern-security-system';
import { ProfessionalSecuritySystem } from '../security-systems/professional-security-system';
import { HouseElementStyle } from '../styles/house-element-style';
import { HouseBuilder } from './house-builder';


export class PredefinedHouseDirector {
  public static createModernHouse(maxFloor: number = 1): House {
    return new HouseBuilder()
      .setFloorCount(maxFloor)
      .switchToStyle(HouseElementStyle.Modern)
      .addWindows(3, 20)
      .addDoor(40)
      .addSecuritySystem(ModernSecuritySystem)
      .paint('pink')
      .build();
  }

  public static createNeoHouse(maxFloor: number = 1) {
    return new HouseBuilder()
      .setFloorCount(maxFloor)
      .switchToStyle(HouseElementStyle.Neo)
      .addWindows(4, 30)
      .addDoor(60)
      .addSecuritySystem(ProfessionalSecuritySystem)
      .paint('blue')
      .build();
  }

  public static createClassicHouse(maxFloor: number = 1) {
    return new HouseBuilder()
      .setFloorCount(maxFloor)
      .switchToStyle(HouseElementStyle.Classic)
      .addWindows(2, 15)
      .addDoor(40)
      .addSecuritySystem(AmateurSecuritySystem)
      .paint('blue')
      .build();
  }
}
