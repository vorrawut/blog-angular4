import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
})
export class DashboardComponent {
  listData: any;

  constructor() {
    this.listData = [{ title: 'Windstorm' }, { title: 'Bombasto' }, { title: 'Magneta' }, { title: 'Tornado' }];

    console.log(this.listData);
    console.log(this.listData.length);
  }
  loadData() {
    // this.listData = ["3", "32"];
  }
}
