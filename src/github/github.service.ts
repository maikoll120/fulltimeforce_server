import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  findAll() {
    return `This action returns all github`;
  }
}
