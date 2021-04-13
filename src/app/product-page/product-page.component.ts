import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  $: any;
  constructor(private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
