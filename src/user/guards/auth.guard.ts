/* eslint-disable prettier/prettier */
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { ExpressRequest } from '@app/types/expressRequest.interface';
import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common'

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<ExpressRequest>();

    if(request.user) {
      return true;
    }
    throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED)
  }
}