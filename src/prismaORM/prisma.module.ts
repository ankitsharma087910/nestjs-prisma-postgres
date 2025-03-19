import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { APP_FILTER } from "@nestjs/core";


// using global to make this module available outside this folder also 
@Global()
@Module({
    providers:[
        PrismaService,
        // {
        //     provide:APP_FILTER
        //     useClass:PrismaClientException
        // }
    ],
    exports:[PrismaService]
})

export class PrismaModule{}