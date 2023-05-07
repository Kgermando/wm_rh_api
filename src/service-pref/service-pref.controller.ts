import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common'; 
import { AuthGuard } from 'src/auth/auth.guard';
import { ServicePrefService } from './service-pref.service';
import { ServicePrefCreateDto } from './models/service-pref-create.dto';
import { ServicePrefUpdateDto } from './models/service-pref-update.dto';


@UseGuards(AuthGuard)
@Controller('service-prefs')
export class ServicePrefController {
    constructor(
        private servicePrefService: ServicePrefService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.servicePrefService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: ServicePrefCreateDto
    ) {
        return this.servicePrefService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.servicePrefService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: ServicePrefUpdateDto
    ) {
        await this.servicePrefService.update(id, body);
        return this.servicePrefService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.servicePrefService.delete(id);
    }
}
