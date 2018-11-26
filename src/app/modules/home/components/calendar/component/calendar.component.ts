import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();
  displayMonth: Array<any>;
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

  ngOnInit() {
    this.getMonth(this.currentDate);
  }

  getMonth(month: Date): void {
    this.displayMonth = this.calendarService.calculateMonth(month);
  }

}
