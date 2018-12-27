import {
  Component,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Type,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal/modal.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalOptions } from '../models/modal-options';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  viewContainerRef: any;

  component: Type<{}>;
  options: ModalOptions = new ModalOptions();

  modalComponentSubscription: Subscription;
  modalOptionsSubscription: Subscription;

  faTimes = faTimes;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.modalComponentSubscription = this.modalService.modalComponent$.subscribe(component => {
      this.component = component;
      this.createDynamicComponent(component);
    });
    this.modalOptionsSubscription = this.modalService.modalOptions$.subscribe(options => {
      if (options) {
        this.options = options;
      }
    });
  }

  createDynamicComponent(component: Type<{}>): void {
    this.changeDetectorRef.detectChanges();
    if (this.component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component
      );
      const componentRef = this.viewContainerRef.createComponent(
        componentFactory
      );
      componentRef.changeDetectorRef.detectChanges();
    }
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  overlayClose(event): void {
    if (event.target.className.includes('overlay') && this.options.overlayClose) {
      this.closeModal();
    }
  }

  ngOnDestroy(): void {
    this.modalComponentSubscription.unsubscribe();
    this.modalOptionsSubscription.unsubscribe();
  }
}
