import {Injectable} from '@angular/core';

@Injectable()
export class PreviousWorkImageService{
  visibleImages = [];

  getImages(): any[] {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number): object {
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {id: 1, url: './assets/img/scenery/image1.jpg'},
  {id: 2, url: './assets/img/scenery/image4.jpg'},
  {id: 3, url: './assets/img/scenery/image6.jpg'},
  {id: 4, url: './assets/img/scenery/image5.jpg'},
  {id: 5, url: './assets/img/scenery/image1.jpg'},
  {id: 6, url: './assets/img/scenery/image4.jpg'},
  {id: 7, url: './assets/img/scenery/image6.jpg'},
  {id: 8, url: './assets/img/scenery/image5.jpg'},
  {id: 9, url: './assets/img/scenery/image1.jpg'},
];
