import { Controller, Post, Body, Logger } from '@nestjs/common';

import { getDistance } from 'geolib';

@Controller('attendance')
export class AttendanceController {
    private companyLocation = { latitude: 31.99881050956366, longitude: 35.88089398887972 };

    @Post()
    checkAttendance(
        @Body('latitude') latitude: number,
        @Body('longitude') longitude: number,
    ) {
        const distance = getDistance(
            { latitude, longitude },
            this.companyLocation,
        );

        const radius = 100;

        if (distance <= radius) {
            Logger.log(`User is within ${distance} meters of the company.`)
            return { message: 'Attendance marked successfully', distance };
        } else {
            Logger.log(`User is too far from the company. Distance: ${distance} meters.`)
            return { message: 'You are too far from the company', distance };
        }
    }
}
