import { Component } from '@angular/core';
import { IService } from './components/service/i-service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  titleText: string = 'Services';
  imageSource: string = 'assets/images/services-head.jpg';

  services: IService[] = [
    {
      label: 'Ironing',
      description:
        'Adipisicing adipisicing et ea ullamco culpa nulla. Ullamco ad culpa consectetur ea non aute magna ipsum duis. Cupidatat qui proident elit ad. Cillum non nisi consequat nostrud culpa eiusmod excepteur aliquip Lorem sit minim ipsum consectetur id.',
    },
    {
      label: 'Repair',
      description:
        'Tempor non ipsum tempor exercitation cillum proident est. Eu est quis nisi excepteur. Pariatur labore id duis excepteur dolore laborum eiusmod enim. Sunt aliquip aliquip irure eu Lorem ullamco eiusmod dolore adipisicing proident adipisicing anim esse ipsum. Occaecat nisi commodo consequat et occaecat qui sunt pariatur exercitation deserunt quis exercitation. Sit dolor magna aliqua laboris ex consequat eu nisi est anim aliquip adipisicing. Sint veniam cupidatat fugiat commodo cupidatat anim veniam tempor nostrud mollit culpa duis duis eiusmod.Duis dolor sit adipisicing adipisicing fugiat. Reprehenderit fugiat ad non occaecat tempor labore veniam exercitation reprehenderit est excepteur minim qui. In id aute id officia amet et irure minim quis sit. Sunt amet nostrud irure excepteur ex veniam ad incididunt est voluptate consectetur anim Lorem voluptate.',
    },
    {
      label: 'Alterations',
      description:
        'Culpa qui ut minim et non dolor fugiat in. Irure occaecat ipsum minim mollit ut do anim enim Lorem. Anim id et sit deserunt dolor.Sunt commodo ipsum culpa proident ut voluptate excepteur amet voluptate aute ullamco. Officia do cillum veniam minim est Lorem esse nisi eiusmod amet. Mollit duis dolor nulla quis laborum velit pariatur est amet dolore mollit ipsum. Laboris exercitation ea veniam incididunt duis irure non occaecat in excepteur excepteur nisi ullamco. Dolor velit pariatur nostrud officia. Fugiat aute non commodo non ullamco sunt velit reprehenderit aliqua non velit.',
    },
  ];
}
