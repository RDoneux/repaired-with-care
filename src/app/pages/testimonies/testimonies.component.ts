import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Testimony } from './i-testimony';
import { TimerService } from 'src/app/services/timer.service';

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

  testimonies: Testimony[] = [
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo. Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo. Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo. Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo. Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Rob Doneux',
    },
    {
      content:
        'Dolor qui ullamco fugiat duis. Dolor tempor cillum exercitation occaecat et ad in dolore magna. Aliqua nostrud elit ea sunt sint laborum minim Lorem officia nulla et voluptate tempor tempor.',
      author: 'Jack Doneux',
    },
    {
      content:
        'Excepteur esse amet labore incididunt laboris qui voluptate officia. Incididunt id amet reprehenderit tempor irure ipsum eu esse velit pariatur ipsum. Laboris laborum deserunt fugiat et ullamco laboris reprehenderit aliqua.',
      author: 'Megan Doneux',
    },
    {
      content:
        'Duis est aliquip nisi ullamco culpa eiusmod et nulla ipsum enim mollit. Sunt consectetur elit velit nisi dolore exercitation tempor.',
      author: 'Jo Hunter',
    },
    {
      content:
        'Adipisicing qui exercitation ut pariatur do amet adipisicing. Officia dolore dolor cupidatat ad irure occaecat. Irure deserunt sunt elit consequat enim aliqua ipsum minim sit mollit officia magna Lorem mollit. Qui occaecat amet tempor anim nulla quis laborum ut tempor dolor.',
      author: 'Peter Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Sara Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Rob Doneux',
    },
    {
      content:
        'Dolor qui ullamco fugiat duis. Dolor tempor cillum exercitation occaecat et ad in dolore magna. Aliqua nostrud elit ea sunt sint laborum minim Lorem officia nulla et voluptate tempor tempor.',
      author: 'Jack Doneux',
    },
    {
      content:
        'Excepteur esse amet labore incididunt laboris qui voluptate officia. Incididunt id amet reprehenderit tempor irure ipsum eu esse velit pariatur ipsum. Laboris laborum deserunt fugiat et ullamco laboris reprehenderit aliqua.',
      author: 'Megan Doneux',
    },
    {
      content:
        'Duis est aliquip nisi ullamco culpa eiusmod et nulla ipsum enim mollit. Sunt consectetur elit velit nisi dolore exercitation tempor.',
      author: 'Jo Hunter',
    },
    {
      content:
        'Adipisicing qui exercitation ut pariatur do amet adipisicing. Officia dolore dolor cupidatat ad irure occaecat. Irure deserunt sunt elit consequat enim aliqua ipsum minim sit mollit officia magna Lorem mollit. Qui occaecat amet tempor anim nulla quis laborum ut tempor dolor.',
      author: 'Peter Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Sara Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Rob Doneux',
    },
    {
      content:
        'Dolor qui ullamco fugiat duis. Dolor tempor cillum exercitation occaecat et ad in dolore magna. Aliqua nostrud elit ea sunt sint laborum minim Lorem officia nulla et voluptate tempor tempor.',
      author: 'Jack Doneux',
    },
    {
      content:
        'Excepteur esse amet labore incididunt laboris qui voluptate officia. Incididunt id amet reprehenderit tempor irure ipsum eu esse velit pariatur ipsum. Laboris laborum deserunt fugiat et ullamco laboris reprehenderit aliqua.',
      author: 'Megan Doneux',
    },
    {
      content:
        'Duis est aliquip nisi ullamco culpa eiusmod et nulla ipsum enim mollit. Sunt consectetur elit velit nisi dolore exercitation tempor.',
      author: 'Jo Hunter',
    },
    {
      content:
        'Adipisicing qui exercitation ut pariatur do amet adipisicing. Officia dolore dolor cupidatat ad irure occaecat. Irure deserunt sunt elit consequat enim aliqua ipsum minim sit mollit officia magna Lorem mollit. Qui occaecat amet tempor anim nulla quis laborum ut tempor dolor.',
      author: 'Peter Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Sara Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Rob Doneux',
    },
    {
      content:
        'Dolor qui ullamco fugiat duis. Dolor tempor cillum exercitation occaecat et ad in dolore magna. Aliqua nostrud elit ea sunt sint laborum minim Lorem officia nulla et voluptate tempor tempor.',
      author: 'Jack Doneux',
    },
    {
      content:
        'Excepteur esse amet labore incididunt laboris qui voluptate officia. Incididunt id amet reprehenderit tempor irure ipsum eu esse velit pariatur ipsum. Laboris laborum deserunt fugiat et ullamco laboris reprehenderit aliqua.',
      author: 'Megan Doneux',
    },
    {
      content:
        'Duis est aliquip nisi ullamco culpa eiusmod et nulla ipsum enim mollit. Sunt consectetur elit velit nisi dolore exercitation tempor.',
      author: 'Jo Hunter',
    },
    {
      content:
        'Adipisicing qui exercitation ut pariatur do amet adipisicing. Officia dolore dolor cupidatat ad irure occaecat. Irure deserunt sunt elit consequat enim aliqua ipsum minim sit mollit officia magna Lorem mollit. Qui occaecat amet tempor anim nulla quis laborum ut tempor dolor.',
      author: 'Peter Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Sara Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Rob Doneux',
    },
    {
      content:
        'Dolor qui ullamco fugiat duis. Dolor tempor cillum exercitation occaecat et ad in dolore magna. Aliqua nostrud elit ea sunt sint laborum minim Lorem officia nulla et voluptate tempor tempor.',
      author: 'Jack Doneux',
    },
    {
      content:
        'Excepteur esse amet labore incididunt laboris qui voluptate officia. Incididunt id amet reprehenderit tempor irure ipsum eu esse velit pariatur ipsum. Laboris laborum deserunt fugiat et ullamco laboris reprehenderit aliqua.',
      author: 'Megan Doneux',
    },
    {
      content:
        'Duis est aliquip nisi ullamco culpa eiusmod et nulla ipsum enim mollit. Sunt consectetur elit velit nisi dolore exercitation tempor.',
      author: 'Jo Hunter',
    },
    {
      content:
        'Adipisicing qui exercitation ut pariatur do amet adipisicing. Officia dolore dolor cupidatat ad irure occaecat. Irure deserunt sunt elit consequat enim aliqua ipsum minim sit mollit officia magna Lorem mollit. Qui occaecat amet tempor anim nulla quis laborum ut tempor dolor.',
      author: 'Peter Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Sara Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Rob Doneux',
    },
    {
      content:
        'Dolor qui ullamco fugiat duis. Dolor tempor cillum exercitation occaecat et ad in dolore magna. Aliqua nostrud elit ea sunt sint laborum minim Lorem officia nulla et voluptate tempor tempor.',
      author: 'Jack Doneux',
    },
    {
      content:
        'Excepteur esse amet labore incididunt laboris qui voluptate officia. Incididunt id amet reprehenderit tempor irure ipsum eu esse velit pariatur ipsum. Laboris laborum deserunt fugiat et ullamco laboris reprehenderit aliqua.',
      author: 'Megan Doneux',
    },
    {
      content:
        'Duis est aliquip nisi ullamco culpa eiusmod et nulla ipsum enim mollit. Sunt consectetur elit velit nisi dolore exercitation tempor.',
      author: 'Jo Hunter',
    },
    {
      content:
        'Adipisicing qui exercitation ut pariatur do amet adipisicing. Officia dolore dolor cupidatat ad irure occaecat. Irure deserunt sunt elit consequat enim aliqua ipsum minim sit mollit officia magna Lorem mollit. Qui occaecat amet tempor anim nulla quis laborum ut tempor dolor.',
      author: 'Peter Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Sara Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Rob Doneux',
    },
    {
      content:
        'Dolor qui ullamco fugiat duis. Dolor tempor cillum exercitation occaecat et ad in dolore magna. Aliqua nostrud elit ea sunt sint laborum minim Lorem officia nulla et voluptate tempor tempor.',
      author: 'Jack Doneux',
    },
    {
      content:
        'Excepteur esse amet labore incididunt laboris qui voluptate officia. Incididunt id amet reprehenderit tempor irure ipsum eu esse velit pariatur ipsum. Laboris laborum deserunt fugiat et ullamco laboris reprehenderit aliqua.',
      author: 'Megan Doneux',
    },
    {
      content:
        'Duis est aliquip nisi ullamco culpa eiusmod et nulla ipsum enim mollit. Sunt consectetur elit velit nisi dolore exercitation tempor.',
      author: 'Jo Hunter',
    },
    {
      content:
        'Adipisicing qui exercitation ut pariatur do amet adipisicing. Officia dolore dolor cupidatat ad irure occaecat. Irure deserunt sunt elit consequat enim aliqua ipsum minim sit mollit officia magna Lorem mollit. Qui occaecat amet tempor anim nulla quis laborum ut tempor dolor.',
      author: 'Peter Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Sara Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Rob Doneux',
    },
    {
      content:
        'Dolor qui ullamco fugiat duis. Dolor tempor cillum exercitation occaecat et ad in dolore magna. Aliqua nostrud elit ea sunt sint laborum minim Lorem officia nulla et voluptate tempor tempor.',
      author: 'Jack Doneux',
    },
    {
      content:
        'Excepteur esse amet labore incididunt laboris qui voluptate officia. Incididunt id amet reprehenderit tempor irure ipsum eu esse velit pariatur ipsum. Laboris laborum deserunt fugiat et ullamco laboris reprehenderit aliqua.',
      author: 'Megan Doneux',
    },
    {
      content:
        'Duis est aliquip nisi ullamco culpa eiusmod et nulla ipsum enim mollit. Sunt consectetur elit velit nisi dolore exercitation tempor.',
      author: 'Jo Hunter',
    },
    {
      content:
        'Adipisicing qui exercitation ut pariatur do amet adipisicing. Officia dolore dolor cupidatat ad irure occaecat. Irure deserunt sunt elit consequat enim aliqua ipsum minim sit mollit officia magna Lorem mollit. Qui occaecat amet tempor anim nulla quis laborum ut tempor dolor.',
      author: 'Peter Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Sara Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Rob Doneux',
    },
    {
      content:
        'Dolor qui ullamco fugiat duis. Dolor tempor cillum exercitation occaecat et ad in dolore magna. Aliqua nostrud elit ea sunt sint laborum minim Lorem officia nulla et voluptate tempor tempor.',
      author: 'Jack Doneux',
    },
    {
      content:
        'Excepteur esse amet labore incididunt laboris qui voluptate officia. Incididunt id amet reprehenderit tempor irure ipsum eu esse velit pariatur ipsum. Laboris laborum deserunt fugiat et ullamco laboris reprehenderit aliqua.',
      author: 'Megan Doneux',
    },
    {
      content:
        'Duis est aliquip nisi ullamco culpa eiusmod et nulla ipsum enim mollit. Sunt consectetur elit velit nisi dolore exercitation tempor.',
      author: 'Jo Hunter',
    },
    {
      content:
        'Adipisicing qui exercitation ut pariatur do amet adipisicing. Officia dolore dolor cupidatat ad irure occaecat. Irure deserunt sunt elit consequat enim aliqua ipsum minim sit mollit officia magna Lorem mollit. Qui occaecat amet tempor anim nulla quis laborum ut tempor dolor.',
      author: 'Peter Doneux',
    },
    {
      content:
        'Tempor dolore pariatur ut adipisicing occaecat sit deserunt qui commodo commodo.',
      author: 'Sara Doneux',
    },
  ];

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
