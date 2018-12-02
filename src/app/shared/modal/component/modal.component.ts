import { NewEventComponent } from './../../../modules/home/components/new-event/new-event.component';
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponent: any;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.createDynamicComponent();
  }

  createDynamicComponent(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      NewEventComponent
    );
    const componentRef = this.dynamicComponent.createComponent(factory);

    componentRef.changeDetectorRef.detectChanges();
  }
}
