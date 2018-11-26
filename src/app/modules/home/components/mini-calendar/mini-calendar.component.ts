import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

@Component({
  selector: 'app-mini-calendar',
  templateUrl: './mini-calendar.component.html',
  styleUrls: ['./mini-calendar.component.scss']
})
export class MiniCalendarComponent implements OnInit {
  currentDate: Date = new Date();
  displayMonth: Array<any>;
  monthLabel: string;
  dayLabels = [
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
    'S'
  ];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.getMonth(this.currentDate);
  }

  getMonth(month: Date): void {
    this.displayMonth = this.calendarService.calculateMonth(month);
    this.getMonthName(month);
  }

  getMonthName(month: Date): void {
    this.monthLabel = this.calendarService.getMonthName(month, 'MMMM');
  }

}
