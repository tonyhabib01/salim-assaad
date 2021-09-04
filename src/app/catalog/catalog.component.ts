import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  firstLoad = true;
  isLoaded = false;
  response: any;
  page = 1;
  perPage = 9;
  totalPages: number;
  apiUrl = 'http://salim-assaad.herokuapp.com/index.php/api/product/list';
  // apiUrl = 'http://localhost:1234/s-a/s_a/public/index.php/api/product/list';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getProductPage(this.page);
    this.firstLoad = false;
  }

  getProductPage(page): void {
    if (this.page !== page || this.firstLoad) {
      this.page = page;
      const filter = `?filter[_page]=${this.page}&filter[_per_page]=${this.perPage}`;
      this.httpClient.get(this.apiUrl + filter).subscribe(response => {
        this.response = response;
        this.isLoaded = true;
        this.totalPages = Math.ceil(this.response.count / this.perPage);
        console.log(response);
      });
    }
  }

  getNextPage(): void {
    if (this.page < this.totalPages) {
      this.getProductPage(this.page + 1);
    }
  }

  getPreviousPage(): void {
    if (this.page > 1) {
      this.getProductPage(this.page - 1);
    }
  }

  // tslint:disable-next-line:typedef
  counter(i: number) {
    const range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);
    return range(1, i);
  }
}


