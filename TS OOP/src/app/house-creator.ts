import { House } from './entities/house';
import { Style } from './interfaces';

class Builder {
  protected house: House;

  constructor(house: House) {
    this.house = house;
  }

  public getHouse(): House {
    return this.house;
  }

  public setFloorsAmount(maxFloor: number): void {
    for (let i = 1; i < maxFloor; i += 1) {
      this.house.addFloor();
    }
  }
}

class ModernHouseBuilder extends Builder {
  constructor() {
    super(new House({ count: 3, size: 20, style: 'modern' }, { size: 40, style: 'modern' }, { type: 'modern' }));
  }

  public paint(): void {
    this.house.paint('pink');
  }
}

class NeoHouseBuilder extends Builder {
  constructor() {
    super(new House({ count: 4, size: 30, style: 'modern' }, { size: 60, style: 'neo' }, { type: 'professional' }));
  }

  public paint(): void {
    this.house.paint('blue');
  }
}

class ClassicHouseBuilder extends Builder {
  constructor() {
    super(new House({ count: 2, size: 15, style: 'modern' }, { size: 40, style: 'classic' }, { type: 'amateur' }));
  }

  public paint(): void {
    this.house.paint('blue');
  }
}

type HouseBuilders = ModernHouseBuilder | NeoHouseBuilder | ClassicHouseBuilder;

const mapper = {
  modern: ModernHouseBuilder,
  neo: NeoHouseBuilder,
  classic: ClassicHouseBuilder,
};

export class HouseCreator {
  private static createHouse(houseType: Style, maxFloor: number): House {
    // const builder: HouseBuilders = new (<any>window)[`${houseType.charAt(0).toUpperCase()}${houseType.slice(1)}`]();
    const builder: HouseBuilders = new mapper[houseType]();
    builder.paint();
    builder.setFloorsAmount(maxFloor);
    return builder.getHouse();
  }

  public static createModernHouse(maxFloor = 1): House {
    return this.createHouse('modern', maxFloor);
  }

  public static createNeoHouse(maxFloor = 1): House {
    return this.createHouse('neo', maxFloor);
  }

  public static createClassicHouse(maxFloor = 1): House {
    return this.createHouse('classic', maxFloor);
  }
}
