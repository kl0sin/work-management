import {
  Component,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Type,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal/modal.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  viewContainerRef: any;

  component: Type<{}>;

  modalComponentSubscription: Subscription;

  faTimes = faTimes;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalComponentSubscription = this.modalService.modalComponent$.subscribe(component => {
      this.component = component;
      this.createDynamicComponent(component);
    });
  }

  createDynamicComponent(component: Type<{}>): void {
    if (this.component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component
      );
      const componentRef = this.viewContainerRef.createComponent(
        componentFactory
      );
      componentRef.changeDetectorRef.detectChanges();
    } else {
      this.viewContainerRef.clear();
    }
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  ngOnDestroy(): void {
    this.modalComponentSubscription.unsubscribe();
  }
}
