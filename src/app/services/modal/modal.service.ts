import { ModalComponent } from '../../shared/modal/component/modal.component';
import {
  Injectable,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  createDynamiComponent(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = this.viewContainerRef.createComponent(factory);
    componentRef.changeDetectorRef.detectChanges();
  }
}
