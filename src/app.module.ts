import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LookupModule } from './lookup/lookup.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `${process.env.MONGO_URI}?serverSelectionTimeoutMS=2000&authSource=admin`,
    ),
    LookupModule,
  ],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
