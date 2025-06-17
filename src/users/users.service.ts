import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(user: any) {
    return this.repo.save(user);
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  findAll() {
    return this.repo.find();
  }

async updateRole(id: string, role: 'admin' | 'editor' | 'viewer') {
  return this.repo.update(id, { role: role });
}

  remove(id: string) {
    return this.repo.delete(id);
  }
}
