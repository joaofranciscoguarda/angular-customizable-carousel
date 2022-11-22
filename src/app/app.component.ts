import { Component } from '@angular/core';
import { images } from '../assets/images';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarouselAngular';

  images = images
}
