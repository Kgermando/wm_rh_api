import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common'; 
import { AuthGuard } from 'src/auth/auth.guard';
import { SiteLocationService } from './site-location.service';
import { SiteLocationCreateDto } from './models/site-location-create.dto';
import { SiteLocationUpdateDto } from './models/site-location-update.dto';


@UseGuards(AuthGuard)
@Controller('site-locations')
export class SiteLocationController {
    constructor(
        private siteLocationService: SiteLocationService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.siteLocationService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: SiteLocationCreateDto
    ) {
        return this.siteLocationService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.siteLocationService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: SiteLocationUpdateDto
    ) {
        await this.siteLocationService.update(id, body);
        return this.siteLocationService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.siteLocationService.delete(id);
    }
}
