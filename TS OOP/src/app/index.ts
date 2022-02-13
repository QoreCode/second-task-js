// вы можете редактировать этот файл, но его не нужно рефакторить)

import connection from './db-connection';
import { NeoDoorModel } from './entities/door';
import { House } from './entities/house';
import { ModernWindowModel } from './entities/window-model';
import { HouseCreator } from './house-creator';

// --------- user1 --------- //

async function user1ClientFlow(): Promise<void> {
  const house1 = HouseCreator.createClassicHouse(2);
  const house2 = HouseCreator.createModernHouse(4);

  await connection.save(house1);
  await connection.save(house2);

  console.log(`user1 house1`, house1);
  console.log(`user1 house2`, house2);
}

// --------- user2 --------- //

async function user2ClientFlow(): Promise<void> {
  const house1 = HouseCreator.createNeoHouse(1);

  // custom
  const house2 = new House(undefined, [new ModernWindowModel(30), new ModernWindowModel(30)], new NeoDoorModel(60), 3, 'blue');

  const house3 = HouseCreator.createClassicHouse(3);

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
