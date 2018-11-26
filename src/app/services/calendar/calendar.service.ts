import { Injectable } from '@angular/core';
import {
  eachDay,
  endOfISOWeek,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfISOWeek,
  startOfMonth,
  format
} from 'date-fns';
import { Day } from 'src/app/modules/home/components/calendar/models/day';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  today: Date = new Date();

  constructor() {}

  calculateMonth(month: Date) {
    const startOfDates = startOfISOWeek(startOfMonth(month));
    const endOfDates = endOfISOWeek(endOfMonth(month));

    const tempMonth = [];
    const tempMonthRange = [];

    eachDay(startOfDates, endOfDates).forEach(day => {
      tempMonth.push(
        new Day(day, isSameMonth(day, month), isSameDay(day, month))
      );
    });

    tempMonthRange.push(tempMonth.slice(0, 7));
    tempMonthRange.push(tempMonth.slice(7, 14));
    tempMonthRange.push(tempMonth.slice(14, 21));
    tempMonthRange.push(tempMonth.slice(21, 28));
    tempMonthRange.push(tempMonth.slice(28, 35));

    return tempMonthRange;
  }

  getMonthName(month: Date, type: string): string {
    const monthLabel = format(month, type);

    return monthLabel;
  }
}
