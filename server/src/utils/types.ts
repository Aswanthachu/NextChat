import {Session} from 'next-auth';
import { PrismaClient } from '@prisma/client';

export interface graphQLContext{
    session:Session | null;
    prisma:PrismaClient;
}

// user
export interface CreateUsernameResponse{
    success?:boolean;
    error?:string;
}