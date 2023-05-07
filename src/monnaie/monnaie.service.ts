import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Monnaie } from './models/monnaie.entity';

@Injectable()
export class MonnaieService extends AbstractService {
    constructor(
        @InjectRepository(Monnaie) private readonly monnaieRepository: Repository<Monnaie>
    ) {
        super(monnaieRepository); 
    }
}
