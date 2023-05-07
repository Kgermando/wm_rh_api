import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common'; 
import { AuthGuard } from 'src/auth/auth.guard';
import { PosteService } from './poste.service';
import { PosteUpdateDto } from './models/poste-update.dto';
import { PosteCreateDto } from './models/poste-create.dto';


@UseGuards(AuthGuard)
@Controller('postes')
export class PosteController {
    constructor(
        private posteService: PosteService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.posteService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: PosteCreateDto
    ) {
        return this.posteService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.posteService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: PosteUpdateDto
    ) {
        await this.posteService.update(id, body);
        return this.posteService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.posteService.delete(id);
    }
}
