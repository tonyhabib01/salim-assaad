import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-previous-work',
  templateUrl: './previous-work.component.html',
  styleUrls: ['./previous-work.component.css']
})
export class PreviousWorkComponent implements OnInit {

  isLoaded = false;
  response: any;
  apiUrl = 'http://salim-assaad.herokuapp.com/index.php/api/previous_work/list';
  // apiUrl = 'http://localhost:1234/s-a/s_a/public/index.php/api/previous_work/list';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getPreviousWorks();

  }

  // tslint:disable-next-line:typedef
  public getPreviousWorks() {
    this.httpClient.get(this.apiUrl).subscribe(response => {
      this.response = response;
      this.isLoaded = true;
    });

  }
}

'http://salim-assaad.herokuapp.com/index.php/'
