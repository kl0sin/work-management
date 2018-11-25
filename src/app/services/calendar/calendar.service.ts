import { Injectable } from '@angular/core';
import {
  eachDay,
  endOfISOWeek,
  endOfMonth,
  isSameMonth,
  startOfISOWeek,
  startOfMonth,
} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  calculateMonth(month) {
    const startOfDates = startOfISOWeek(startOfMonth(month));
    const endOfDates = endOfISOWeek(endOfMonth(month));

    const tempMonth = [];
    const tempMonthRange = [];

    eachDay(startOfDates, endOfDates).forEach(day => {
      tempMonth.push(day);
    });

    tempMonthRange.push(tempMonth.slice(0, 7));
    tempMonthRange.push(tempMonth.slice(7, 14));
    tempMonthRange.push(tempMonth.slice(14, 21));
    tempMonthRange.push(tempMonth.slice(21, 28));
    tempMonthRange.push(tempMonth.slice(28, 35));

    console.log(tempMonthRange);
    return tempMonthRange;
  }
}
