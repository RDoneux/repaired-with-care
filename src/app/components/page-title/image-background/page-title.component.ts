import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent implements OnInit {
  @Input({ required: true }) titleText!: string;
  @Input({ required: true }) imageSrc!: string;
  @Input() type: 'landing' | 'default' = 'default';

  imageSourceDesktop: string = '';
  imageSourceMobile: string = '';

  ngOnInit(): void {
    const parts: string[] = this.imageSrc.split('.');
    this.imageSourceDesktop = `${parts[0]}__desktop.${parts[1]}`;
    this.imageSourceMobile = `${parts[0]}__mobile.${parts[1]}`;
  }
}
