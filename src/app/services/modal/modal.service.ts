import {
  Injectable,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalComponent$: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor() {}

  createModal(component: any): void {
    this.modalComponent$.next(component);
  }

  closeModal(): void {
    this.modalComponent$.next();
  }
}
