/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { JWT_SECRET } from './../../config';
import { NestMiddleware } from '@nestjs/common'
import { NextFunction, Response } from 'express';
import { ExpressRequest } from '@app/types/expressRequest.interface';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, _: Response, next: NextFunction) {
    // _ means unused variable
    if(!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];
    
    try {
      const decode = verify(token, JWT_SECRET)
      const user = await this.userService.findById(decode.id);
      req.user = user
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}