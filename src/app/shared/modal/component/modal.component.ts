import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  dynamicComponent: any;

  modalComponentSubscription: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.modalComponent$.subscribe(component => {
      console.log(component);
      this.createDynamicComponent(component);
    });
  }

  createDynamicComponent(component: any): void {
    if (component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component
      );
      const componentRef = this.dynamicComponent.createComponent(
        componentFactory
      );
      componentRef.changeDetectorRef.detectChanges();
    } else {
      this.dynamicComponent.clear();
    }
  }

  closeModal(): void {
    this.modalService.closeModal();
  }
}
