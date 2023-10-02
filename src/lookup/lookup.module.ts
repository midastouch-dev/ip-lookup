import { Module } from '@nestjs/common';
import { LookupController } from './lookup.controller';
import { LookupServices } from './lookup.services';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { IPInfo, IPInfoSchema } from 'src/schema/ipinfo.schema';

@Module({
  imports: [
        HttpModule.register({
            timeout: 10000,
            maxRedirects: 5
        }),
        MongooseModule.forFeature([{ name: IPInfo.name, schema: IPInfoSchema}])
    ],
    controllers: [LookupController],
    providers: [LookupServices],
})
export class LookupModule {}
