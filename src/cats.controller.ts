
import { Controller, Get, Query, Redirect, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version: string) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    
    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
}
