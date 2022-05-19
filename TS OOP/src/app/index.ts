// вы можете редактировать этот файл, но его не нужно рефакторить)

import { DBConnection } from './db-connection';
import { House } from './entities/house';
import { HouseCreator } from './house-creator';
import { IDoorParams, IWindowsConfig } from './interfaces';

const dbConnection = DBConnection.getDBInstance('localhost', 'root', '1111', 'prod');

// --------- user1 --------- //

async function user1ClientFlow(): Promise<void> {
  const house1 = HouseCreator.createClassicHouse(2);
  const house2 = HouseCreator.createModernHouse(4);

  await dbConnection.save(house1);
  await dbConnection.save(house2);

  console.log(`user1 house1`, house1);
  console.log(`user1 house2`, house2);
}

// --------- user2 --------- //

async function user2ClientFlow(): Promise<void> {
  const house1 = HouseCreator.createNeoHouse(1);

  // custom
  const windowConfig: IWindowsConfig = { count: 2, size: 30, style: 'modern' };
  const doorConfig: IDoorParams = { size: 60, style: 'neo' };
  const house2 = new House(windowConfig, doorConfig);
  house2.color = 'blue';
  house2.addFloor();
  house2.addFloor();
  house2.addFloor();

  const house3 = HouseCreator.createClassicHouse(3);

  await dbConnection.save(house1);
  await dbConnection.save(house2);
  await dbConnection.save(house3);

  console.log(`user2 house1`, house1);
  console.log(`user2 house2`, house2);
  console.log(`user2 house3`, house3);
}

user1ClientFlow().then(() => {
  console.log('//--------------------//');
  user2ClientFlow();
});
