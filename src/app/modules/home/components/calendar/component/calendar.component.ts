import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  today: Date = new Date();
  selectedMonth: number;
  selectedYear: number;
  displayMonth: Array<Date[]>;
  displayLabel: string;
  calendarLabels = [
    'Mon.',
    'Tue.',
    'Wed.',
    'Thu.',
    'Fri.',
    'Sat.',
    'Sun.'
  ];

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.selectedYear = this.today.getFullYear();
    this.selectedMonth = this.today.getMonth();
    this.getMonth(this.selectedYear, this.selectedMonth, this.today);
  }

  getMonth(year: number, month: number, today: Date): void {
    const recivedMonth = this.calendarService.calculateMonth(year, month, today);

    this.displayMonth = recivedMonth.month;
    this.displayLabel = recivedMonth.label;
  }

}
