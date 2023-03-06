import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { GITHUB_OWNER, GITHUB_REPO } from '../lib/config';
import Commit from '../models/Commit';

@Injectable()
export class GithubService {
  async findAll() {
    try {
      const response = await axios.get<Commit[]>(
        `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits`,
      );

      const commitList = response.data.map((item) => {
        return {
          id: item.node_id,
          message: item.commit.message,
          author: item.commit.author.name,
          createdAt: item.commit.author.date,
        };
      });

      return commitList;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
