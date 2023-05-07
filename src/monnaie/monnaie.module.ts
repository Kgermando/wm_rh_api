import { Module } from '@nestjs/common';
import { MonnaieController } from './monnaie.controller';
import { MonnaieService } from './monnaie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Monnaie } from './models/monnaie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Monnaie]),
    CommonModule,
  ],
  controllers: [MonnaieController],
  providers: [MonnaieService]
})
export class MonnaieModule {}
