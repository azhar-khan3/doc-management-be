import { Controller, Get, Patch, Param, Delete, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { RoleGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorators/roles.decorators';

@Controller('users')
@UseGuards(RoleGuard)
@Roles('admin')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id/role')
  updateRole(@Param('id') id: string, @Body() body) {
    return this.service.updateRole(id, body.role);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
