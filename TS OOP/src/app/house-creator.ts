import { House } from './entities/house';
import { HouseBuilder } from'./house-builder';

export class HouseCreator {
  private builder: HouseBuilder = new HouseBuilder();

  public setBuilder(builder: HouseBuilder): void {
    this.builder = builder;
  }

  public createModernHouse(maxFloor: number = 1): House {
    this.builder
      .addDoor({size: 40, style: 'modern'})
      .addSecuritySystem({type: 'modern'})
      .addColor('pink')

    for (let i = 1; i < 3; i++) {
      this.builder.addWindow({size: 20, style: 'modern'});
    }

    if (maxFloor > 1) {
      for (let i = 1; i < maxFloor; i++) {
        this.builder.addFloor();
      }
    }

    return this.builder.getHouse();
  }

  public createNeoHouse(maxFloor: number = 1): House {
    this.builder
      .addDoor({size: 60, style: 'neo'})
      .addSecuritySystem({type: 'professional'})
      .addColor('blue')

    for (let i = 1; i < 4; i++) {
      this.builder.addWindow({size: 30, style: 'neo'});
    }

    if (maxFloor > 1) {
      for (let i = 1; i < maxFloor; i++) {
        this.builder.addFloor();
      }
    }

    return this.builder.getHouse();
  }

  public createClassicHouse(maxFloor: number = 1) {
    this.builder
      .addDoor({size: 40, style: 'classic'})
      .addSecuritySystem({type: 'amateur'})
      .addColor('blue')

    for (let i = 1; i < 2; i++) {
      this.builder.addWindow({size: 15, style: 'classic'});
    }

    if (maxFloor > 1) {
      for (let i = 1; i < maxFloor; i++) {
        this.builder.addFloor();
      }
    }

    return this.builder.getHouse();
  }
}
