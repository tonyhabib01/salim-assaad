import {Component, Input, OnInit} from '@angular/core';
import {PreviousWorkImageService} from './shared/previous-work-image.service';

@Component({
  selector: 'app-previous-work-image',
  templateUrl: './previous-work-image.component.html',
  styleUrls: ['./previous-work-image.component.css']
})
export class PreviousWorkImageComponent implements OnInit {

  @Input() currentImage;
  constructor(private ImageService: PreviousWorkImageService) { }

  ngOnInit(): void {
  }

}
