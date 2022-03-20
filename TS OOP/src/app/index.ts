// вы можете редактировать этот файл, но его не нужно рефакторить)

import { DBConnection } from './db-connection';
import { HouseCreator } from './house-creator';
import { HouseBuilder } from './house-builder';
import { House } from './entities/house';

// --------- user1 --------- //

async function user1ClientFlow() {
  const connection = new DBConnection('localhost', 'root', '1111', 'prod');

  const builder = new HouseBuilder();
  const creator = new HouseCreator();
  creator.setBuilder(builder);
  const house1 = creator.createClassicHouse(2);
  const house2 = creator.createModernHouse(4);

  await connection.save(house1);
  await connection.save(house2);

  console.log(`user1 house1`, house1);
  console.log(`user1 house2`, house2);
}

// --------- user2 --------- //

async function user2ClientFlow() {
  const connection = new DBConnection('localhost', 'root', '1111', 'prod');

  const builder = new HouseBuilder();
  const creator = new HouseCreator();
  creator.setBuilder(builder);
  const house1 = creator.createNeoHouse(1);

  // custom
  const house2 = builder
    .addWindow({size: 30, style: 'modern'})
    .addWindow({size: 30, style: 'modern'})
    .addDoor({size: 60, style: 'neo'})
    .addColor('blue')
    .addFloor()
    .addFloor()
    .addFloor()
    .getHouse();

  const house3 = creator.createClassicHouse(3);

  await connection.save(house1);
  await connection.save(house2);
  await connection.save(house3);

  console.log(`user2 house1`, house1);
  console.log(`user2 house2`, house2);
  console.log(`user2 house3`, house3);
}


user1ClientFlow().then(() => {
  console.log('//--------------------//');
  user2ClientFlow();
});
