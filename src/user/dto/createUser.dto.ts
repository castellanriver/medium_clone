/* eslint-disable prettier/prettier */

import { IsNotEmpty } from 'class-validator';
import { IsEmail } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  
  @IsNotEmpty()
  readonly password: string;
}