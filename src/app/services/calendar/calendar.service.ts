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
import { Calendar } from './interfaces/calendar';
import { UpdatedCalendar } from './interfaces/updated-calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  today: Date = new Date();

  constructor() {}

  calculateMonth(year: number, month: number, today: Date): Calendar {
    const tempDay = new Date(year, month);
    const tempMonth = [];
    const tempMonthRange = [];
    const tempMonthLabel = format(tempDay, 'MMMM');

    const tempStartOfMonth = startOfISOWeek(startOfMonth(tempDay));
    const tempEndOfMonth = endOfISOWeek(endOfMonth(tempDay));


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

    const returnObject = {
      month: tempMonthRange,
      label: tempMonthLabel
    };

    return returnObject;
  }

  nextMonth(year: number, month: number, today: Date): UpdatedCalendar {
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

  prievMonth(year: number, month: number, today: Date): UpdatedCalendar {
    let tempYear = year;
    let tempMonth = month;

    if (tempMonth <= 0 ) {
      tempYear --;
      tempMonth = 11;
    } else {
      tempMonth --;
    }

    const newMonth = this.calculateMonth(tempYear, tempMonth, today);

    const returnObject = {
      updatedYear: tempYear,
      updatedMonth: tempMonth,
      displayMonth: newMonth
    };

    return returnObject;
  }
}
