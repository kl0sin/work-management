import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalComponent$: ReplaySubject<any> = new ReplaySubject<any>(1);
  modalOptions$: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor() {}

  createModal(component: any, options?: Object): void {
    this.modalComponent$.next(component);
  }

  closeModal(): void {
    this.modalComponent$.next();
    this.modalOptions$.next();
  }
}
