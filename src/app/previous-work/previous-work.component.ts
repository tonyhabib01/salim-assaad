import { Component, OnInit } from '@angular/core';
import {PreviousWorkImageService} from '../previous-work-image/shared/previous-work-image.service';

@Component({
  selector: 'app-previous-work',
  templateUrl: './previous-work.component.html',
  styleUrls: ['./previous-work.component.css']
})
export class PreviousWorkComponent implements OnInit {

  visibleImages = [];
  constructor(private imageService: PreviousWorkImageService) {
    this.visibleImages = imageService.getImages();
  }

  ngOnInit(): void {
  }

}
