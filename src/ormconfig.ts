/* eslint-disable prettier/prettier */
import { ConnectionOptions } from 'typeorm';

// typeorm 0.3 version
// lecture 9,10

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: '123',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  //latest version: cli options don't need!
  cli: {
    migrationsDir: 'src/migrations',
  }
};

export default config;

// latest version of typeorm,
// we must provide full path (lecture 12 7:48)
// yarn db:create src/migrations/CreateTags
