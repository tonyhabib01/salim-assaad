import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id;
  response;
  isLoaded = false;
  apiUrl = 'http://salim-assaad.herokuapp.com/index.php/api/product/';
  // apiUrl = 'http://localhost:1234/s-a/s_a/public/index.php/api/product/';

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getProduct(this.id);
  }

  getProduct(id): void
  {
    this.httpClient.get(this.apiUrl + this.id).subscribe( response => {
      this.response = response;
      this.isLoaded = true;
      if (this.response.status !== 200) {
        this.router.navigateByUrl('/');
      }
    });
  }

}
