// вы можете редактировать этот файл, но его не нужно рефакторить)

import { DBConnection } from './db-connection';
import {HouseBuilder, HouseDirector} from './house-builder';

// --------- user1 --------- //

async function user1ClientFlow() {
  const connection = new DBConnection('localhost', 'root', '1111', 'prod');

  const houseDirector = new HouseDirector(new HouseBuilder());

  const house1 = houseDirector.createClassicHouse(2);
  const house2 = houseDirector.createModernHouse(4);

  await connection.save(house1);
  await connection.save(house2);

  console.log(`user1 house1`, house1);
  console.log(`user1 house2`, house2);
}

// --------- user2 --------- //

async function user2ClientFlow() {
  const connection = new DBConnection('localhost', 'root', '1111', 'prod');

  const houseDirector = new HouseDirector(new HouseBuilder());

  const house1 = houseDirector.createNeoHouse(1);

  // custom
  const house2 = houseDirector.createCustomHouse(
    {count: 2, size: 30, style: 'modern'},
    {size: 60, style: 'neo'}
  );

  house2.paint('blue');
  house2.addFloor();
  house2.addFloor();
  house2.addFloor();

  const house3 = houseDirector.createClassicHouse(3);

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



