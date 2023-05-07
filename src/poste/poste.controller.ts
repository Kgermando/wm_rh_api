import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common'; 
import { AuthGuard } from 'src/auth/auth.guard';


@UseGuards(AuthGuard)
@Controller('postes')
export class PosteController {
    constructor(
        private apointementService: ApointementService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.apointementService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: ApointementCreateDto
    ) {
        return this.apointementService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.apointementService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: ApointementUpdateDto
    ) {
        await this.apointementService.update(id, body);
        return this.apointementService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.apointementService.delete(id);
    }
}
