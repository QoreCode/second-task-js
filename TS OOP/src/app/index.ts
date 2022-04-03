// вы можете редактировать этот файл, но его не нужно рефакторить)

import { DBConnection } from './data-access/db-connection';
import { HouseElementStyle } from './entities/styles/house-element-style';
import { HouseBuilder } from './entities/house/house-builder';
import { PredefinedHouseDirector } from './entities/house/predefined-house-director';
import { DBConnectionProvider } from './data-access/db-connection-provider';

// --------- user1 --------- //

async function user1ClientFlow() {
  const connection = DBConnectionProvider.getConnection();

  const house1 = PredefinedHouseDirector.createClassicHouse(2);
  const house2 = PredefinedHouseDirector.createModernHouse(4);

  await connection.save(house1);
  await connection.save(house2);

  console.log(`user1 house1`, house1);
  console.log(`user1 house2`, house2);
}

// --------- user2 --------- //

async function user2ClientFlow() {
  const connection = DBConnectionProvider.getConnection();

  const house1 = PredefinedHouseDirector.createNeoHouse(1);

  const house2 = new HouseBuilder()
    .addFloor()
    .addFloor()
    .addFloor()
    .switchToStyle(HouseElementStyle.Modern)
    .addWindows(2, 30)
    .switchToStyle(HouseElementStyle.Neo)
    .addDoor(60)
    .paint('blue')
    .build();

  const house3 = PredefinedHouseDirector.createClassicHouse(3);

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



