import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  public store: any;
  constructor(public storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getAllStores().subscribe(res => {
      console.log(res);
      this.store = res;
    });
  }

}
