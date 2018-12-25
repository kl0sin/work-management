import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { NewEventComponent } from '../../new-event/new-event.component';

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

  constructor(private calendarService: CalendarService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.selectedYear = this.today.getFullYear();
    this.selectedMonth = this.today.getMonth();
    this.getMonth(this.selectedYear, this.selectedMonth, this.today);

    this.createModal();
  }

  getMonth(year: number, month: number, today: Date): void {
    const receivedMonth = this.calendarService.calculateMonth(year, month, today);

    this.displayMonth = receivedMonth.month;
    this.displayLabel = receivedMonth.label;
  }

  createModal(): void {
    this.modalService.createModal(NewEventComponent);
  }

}
