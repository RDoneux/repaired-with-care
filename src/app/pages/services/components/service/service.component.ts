import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IService } from './i-service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  @Input({ required: true }) service!: IService;

  @ViewChild('descriptionWrapper') descriptionWrapper: ElementRef | undefined =
    undefined;

  componentHeight: number = 0;
  expanded: boolean = false;

  ngAfterViewInit(): void {
    const element: HTMLDivElement = this.descriptionWrapper?.nativeElement;
    this.componentHeight = element.scrollHeight + 107;
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}
