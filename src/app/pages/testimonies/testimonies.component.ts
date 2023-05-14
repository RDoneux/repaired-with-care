import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Testimony } from './i-testimony';
import { TimerService } from 'src/app/services/timer.service';
import testimonies from '../../../assets/documents/testimonies.json';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss'],
})
export class TestimoniesComponent {
  @ViewChild('testimonyWrapper') testimonyWrapper: ElementRef | undefined =
    undefined;

  testimonyElement: HTMLDivElement | undefined = undefined;

  titleText: string = 'Testimonies';
  imageSource: string = 'assets/images/testimonies-head.jpg';

  timerService: TimerService | undefined = undefined;
  yPositionIndex: number = 0;

  testimonies: Testimony[] = testimonies;

  ngAfterViewInit() {
    this.timerService = new TimerService(() => {
      this.yPositionIndex++;
      this.scrollTo(this.yPositionIndex);
      if (this.yPositionIndex >= this.testimonies.length / 3) {
        this.yPositionIndex = -1;
      }
    }, 5000);
  }

  onMouseEnter() {
    this.timerService?.pause();
  }
  onMouseLeave() {
    this.timerService?.resume();
  }

  scrollTo(index: number) {
    if (!this.testimonyElement) this.testimonyElement = this.findElement();
    this.testimonyElement.scrollLeft =
      (this.testimonyElement.offsetWidth + 5) * index;
  }

  scrollLeft() {
    this.yPositionIndex--;
    this.scrollTo(this.yPositionIndex);
  }
  scrollRight() {
    this.yPositionIndex++;
    this.scrollTo(this.yPositionIndex);
  }
  reset() {
    this.yPositionIndex = 0;
    this.scrollTo(this.yPositionIndex);
  }

  private findElement(): HTMLDivElement {
    return this.testimonyWrapper?.nativeElement ?? undefined;
  }
}
