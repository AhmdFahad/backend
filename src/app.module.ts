import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendanceController } from './attendance/attendance.controller';

@Module({
  imports: [],
  controllers: [AppController, AttendanceController],
  providers: [AppService],
})
export class AppModule {}
