/* eslint-disable prettier/prettier */
import { UserEntity } from '@app/user/user.entity';
import { Request } from 'express';

export interface ExpressRequest extends Request {
  user?: UserEntity
}

// lecture 19 13:00
