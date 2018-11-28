import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { UpdatedCalendar } from 'src/app/services/calendar/interfaces/updated-calendar';

@Component({
  selector: 'app-mini-calendar',
  templateUrl: './mini-calendar.component.html',
  styleUrls: ['./mini-calendar.component.scss']
})
export class MiniCalendarComponent implements OnInit {
  today: Date = new Date();
  selectedMonth: any;
  selectedYear: any;
  displayMonth: Array<any>;
  displayLabel: string;
  dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.selectedYear = this.today.getFullYear();
    this.selectedMonth = this.today.getMonth();
    this.getMonth(this.selectedYear, this.selectedMonth, this.today);
  }

  getMonth(year: number, month: number, today: Date): void {
    const recivedMonth = this.calendarService.calculateMonth(year, month, today);

    this.displayMonth = recivedMonth.month;
    this.displayLabel = recivedMonth.label;
  }

  nextMonth(): void {
    const nextMonth = this.calendarService.nextMonth(
      this.selectedYear,
      this.selectedMonth,
      this.today
    );

    this.updateMonth(nextMonth);
  }

  prievMonth(): void {
    const prievMonth = this.calendarService.prievMonth(
      this.selectedYear,
      this.selectedMonth,
      this.today
    );

    this.updateMonth(prievMonth);
  }

  updateMonth(updatedMonth: UpdatedCalendar): void {
    this.selectedYear = updatedMonth.updatedYear;
    this.selectedMonth = updatedMonth.updatedMonth;
    this.displayMonth = updatedMonth.displayMonth.month;
    this.displayLabel = updatedMonth.displayMonth.label;

  }
}
