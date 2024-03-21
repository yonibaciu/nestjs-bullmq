import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AnotherService {
  private readonly logger = new Logger(AnotherService.name);

  @Cron(CronExpression.EVERY_5_SECONDS)
  doAnotherThing() {
    this.logger.log('Doing something else...');
  }
}
