import { Injectable, Logger } from '@nestjs/common';
import { TRANSCODE_QUEUE } from './constants';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { Cron, CronExpression } from '@nestjs/schedule';
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async transcode() {
    await this.transcodeQueue.add({
      filename: './bobo.mp3',
    });
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  doSomethingPeriodically() {
    this.logger.log('Doing something...');
  }
}
