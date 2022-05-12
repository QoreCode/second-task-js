import { House } from './entities/house';

export class HouseCreator {
  private static createHouse(house: House, maxFloor: number): House {
    if (maxFloor > 1) {
      for (let i = 1; i < maxFloor; i++) {
        house.addFloor();
      }
    }

    return house;
  }

  public static createModernHouse(maxFloor = 1): House {
    const house = new House({ count: 3, size: 20, style: 'modern' }, { size: 40, style: 'modern' }, { type: 'modern' });
    house.paint('pink');

    return this.createHouse(house, maxFloor);
  }

  public static createNeoHouse(maxFloor = 1): House {
    const house = new House({ count: 4, size: 30, style: 'neo' }, { size: 60, style: 'neo' }, { type: 'professional' });
    house.paint('blue');

    return this.createHouse(house, maxFloor);
  }

  public static createClassicHouse(maxFloor = 1): House {
    const house = new House({ count: 2, size: 15, style: 'classic' }, { size: 40, style: 'classic' }, { type: 'amateur' });
    house.paint('blue');

    return this.createHouse(house, maxFloor);
  }
}
