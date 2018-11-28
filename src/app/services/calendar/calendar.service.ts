import { Injectable } from '@angular/core';
import {
  eachDay,
  endOfISOWeek,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfISOWeek,
  startOfMonth,
  format,
} from 'date-fns';
import { Day } from 'src/app/modules/home/components/calendar/models/day';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  today: Date = new Date();

  constructor() {}

  calculateMonth(year: number, month: number, today: Date): Array<[]> {
    const tempDay = new Date(year, month);

    const tempStartOfMonth = startOfISOWeek(startOfMonth(tempDay));
    const tempEndOfMonth = endOfISOWeek(endOfMonth(tempDay));

    const tempMonth = [];
    const tempMonthRange = [];

    eachDay(tempStartOfMonth, tempEndOfMonth).forEach(day => {
      tempMonth.push(
        new Day(day, isSameMonth(day, tempDay), isSameDay(day, today))
      );
    });

    tempMonthRange.push(tempMonth.slice(0, 7));
    tempMonthRange.push(tempMonth.slice(7, 14));
    tempMonthRange.push(tempMonth.slice(14, 21));
    tempMonthRange.push(tempMonth.slice(21, 28));
    tempMonthRange.push(tempMonth.slice(28, 35));

    return tempMonthRange;
  }

  nextMonth(year: number, month: number, today: Date): any {
    let tempYear = year;
    let tempMonth = month;

    if (tempMonth >= 11 ) {
      tempYear ++;
      tempMonth = 0;
    } else {
      tempMonth ++;
    }

    const newMonth = this.calculateMonth(tempYear, tempMonth, today);

    const returnObject = {
      updatedYear: tempYear,
      updatedMonth: tempMonth,
      displayMonth: newMonth
    };

    return returnObject;
  }

  prievMonth(year: number, month: number, today: Date): any {
    let tempYear = year;
    let tempMonth = month;

    if (tempMonth <= 0 ) {
      tempYear --;
      tempMonth = 11;
    } else {
      tempMonth --;
    }

    const newMonth = this.calculateMonth(tempYear, tempMonth, today);

    console.log(newMonth);

    const returnObject = {
      updatedYear: tempYear,
      updatedMonth: tempMonth,
      displayMonth: newMonth
    };

    return returnObject;
  }

  getMonthName(month: Date, type: string): string {
    const monthLabel = format(month, type);

    return monthLabel;
  }
}
