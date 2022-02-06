import { House } from './entities/house';

export class HouseCreator {
  public static createModernHouse(maxFloor: number = 1) {
    const house = new House(
      {count: 3, size: 20, style: 'modern'},
      {size: 40, style: 'modern'},
      {type: 'modern'},
    );

    house.color = 'pink';

    if (maxFloor > 1) {
      for (let i = 1; i < maxFloor; i++) {
        house.addFloor();
      }
    }

    return house;
  }

  public static createNeoHouse(maxFloor: number = 1) {
    const house = new House(
      {count: 4, size: 30, style: 'neo'},
      {size: 60, style: 'neo'},
      {type: 'professional'},
    );

    house.color = 'blue';

    if (maxFloor > 1) {
      for (let i = 1; i < maxFloor; i++) {
        house.addFloor();
      }
    }

    return house;
  }

  public static createClassicHouse(maxFloor: number = 1) {
    const house = new House(
      {count: 2, size: 15, style: 'classic'},
      {size: 40, style: 'classic'},
      {type: 'amateur'},
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
