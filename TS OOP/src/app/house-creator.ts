import { ClassicHouse, House, ModernHouse, NeoHouse } from './entities/house';
import { HouseInterface, HouseType } from './types';

export class HouseCreator {
  protected static createStandartHouse(houseType: HouseType, maxFloor: number, color: string): HouseInterface {
    switch (houseType) {
      case 'neo':
        return new NeoHouse(maxFloor, color);
      case 'modern':
        return new ModernHouse(maxFloor, color);
      case 'classic':
        return new ClassicHouse(maxFloor, color);
    }
  }

  public static createClassicHouse(maxFloor: number): HouseInterface {
    return HouseCreator.createStandartHouse('classic', maxFloor, 'blue');
  }

  public static createModernHouse(maxFloor: number): HouseInterface {
    return HouseCreator.createStandartHouse('modern', maxFloor, 'pink');
  }

  public static createNeoHouse(maxFloor: number): HouseInterface {
    return HouseCreator.createStandartHouse('neo', maxFloor, 'blue');
  }

}
