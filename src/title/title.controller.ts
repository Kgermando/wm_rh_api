import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common'; 
import { AuthGuard } from 'src/auth/auth.guard';
import { TitleService } from './title.service';
import { TitleCreateDto } from './models/title-create.dto';
import { TitleUpdateDto } from './models/title-update.dto';


@UseGuards(AuthGuard)
@Controller('titles')
export class TitleController {
    constructor(
        private titleService: TitleService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.titleService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: TitleCreateDto
    ) {
        return this.titleService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.titleService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: TitleUpdateDto
    ) {
        await this.titleService.update(id, body);
        return this.titleService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.titleService.delete(id);
    }
}
