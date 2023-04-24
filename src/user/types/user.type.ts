/* eslint-disable prettier/prettier */
import { UserEntity } from '../user.entity'

export type UserType = Omit<UserEntity, 'hashPassword'>;