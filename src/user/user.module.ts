/* eslint-disable prettier/prettier */
import { UserEntity } from './user.entity';
import { UserController } from '@app/user/user.controller';
import { Module } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from './guards/auth.guard';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, AuthGuard],
  exports: [UserService],
})
export class UserModule {}

