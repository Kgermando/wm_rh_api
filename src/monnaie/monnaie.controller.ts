import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common'; 
import { AuthGuard } from 'src/auth/auth.guard';
import { MonnaieUpdateDto } from './models/monnaie-update.dto';
import { MonnaieCreateDto } from './models/monnaie-create.dto';
import { MonnaieService } from './monnaie.service';

@UseGuards(AuthGuard)
@Controller('monnaies')
export class MonnaieController {
    constructor(
        private monnaieService: MonnaieService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.monnaieService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: MonnaieCreateDto
    ) {
        return this.monnaieService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.monnaieService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: MonnaieUpdateDto
    ) {
        await this.monnaieService.update(id, body);
        return this.monnaieService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.monnaieService.delete(id);
    }
}
