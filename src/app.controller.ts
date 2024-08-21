import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';

@Controller('api')
export class AppController {
  @Get('protected')
  @UseGuards(AuthGuard)
  getProtectedRoute() {
    return { message: 'This is a protected route!' };
  }
}
