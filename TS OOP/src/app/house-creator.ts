import {House} from './entities/house';
import {HouseStyle, SecurityType} from './interfaces';

export class HouseCreator {
  public static createModernHouse(maxFloor = 1): House {
    const house = new House(
      {count: 3, size: 20, style: HouseStyle.MODERN},
      {size: 40, style: HouseStyle.MODERN},
      {type: SecurityType.MODERN},
    );

    house.color = 'pink';

    if (maxFloor > 1) {
      for (let i = 1; i < maxFloor; i++) {
        house.addFloor();
      }
    }

    return house;
  }

  public static createNeoHouse(maxFloor = 1): House {
    const house = new House(
      {count: 4, size: 30, style: HouseStyle.MODERN},
      {size: 60, style: HouseStyle.MODERN},
      {type: SecurityType.PROFESSIONAL},
    );

    house.color = 'blue';

    if (maxFloor > 1) {
      for (let i = 1; i < maxFloor; i++) {
        house.addFloor();
      }
    }

    return house;
  }

  public static createClassicHouse(maxFloor = 1): House {
    const house = new House(
      {count: 2, size: 15, style: HouseStyle.CLASSIC},
      {size: 40, style: HouseStyle.CLASSIC},
      {type: SecurityType.AMATEUR},
    );

    house.color = 'blue';

    if (maxFloor > 1) {
      for (let i = 1; i < maxFloor; i++) {
        house.addFloor();
      }
    }

    return house;
  }
}
