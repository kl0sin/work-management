export class Day {

  day: Date;
  isInCurrentMonth: boolean;
  isToday: boolean;

  constructor(day: Date, isInCurrentMonth: boolean, today: boolean) {
    this.day = day;
    this.isInCurrentMonth = isInCurrentMonth;
    this.isToday = today;
  }

}
