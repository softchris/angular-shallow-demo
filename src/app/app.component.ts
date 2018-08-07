import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  description = '';
  products = [{
    name: 'test'
  },
  {
    name: 'test2'
  }];

  constructor(private appService: AppService) {

    // setTimeout(() => {
    //   this.title = 'app2';
    // }, 2000);
  }

  async ngOnInit() {
    const data = await this.appService.getData();
    this.title = data['title'];
  }

  click() {
    this.description = 'clicked';
  }

  select(product) {
    console.log('product selected');
  }
}
