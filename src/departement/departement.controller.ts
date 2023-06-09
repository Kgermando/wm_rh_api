import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { DepartementService } from './departement.service'; 
import { AuthGuard } from 'src/auth/auth.guard';
import { DepartementCreateDto } from './models/departement.create.dto';
import { DepartementUpdateDto } from './models/departement.update.dto';


@UseGuards(AuthGuard)
@Controller('departements')
export class DepartementController {
    constructor(
        private departementService: DepartementService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.departementService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: DepartementCreateDto
    ) {
        return this.departementService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.departementService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: DepartementUpdateDto
    ) {
        await this.departementService.update(id, body);
        return this.departementService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.departementService.delete(id);
    }
} 
