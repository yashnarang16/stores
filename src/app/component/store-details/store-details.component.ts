import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cloneDeep } from 'lodash';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  public details: any = [];
  public originalDetails: any = [];
  public isDisabled: Boolean = true;
  public selectedStore: string;
  constructor(public route: ActivatedRoute, public storeService: StoreService) { }

  ngOnInit() {
    this.selectedStore = this.route.snapshot.params['id'] || '';
    this.originalDetails = this.route.snapshot.data['stores-details'];
    this.details =  cloneDeep(this.originalDetails);
  }

  toggle() {
  this.isDisabled = !this.isDisabled;
  }

  update() {
   const updatedTime = this.getUpdatedTime() || [];
   this.storeService.updateStoreHours(this.selectedStore, updatedTime).subscribe(res => {
     if (res) {
       this.originalDetails = cloneDeep(res);
     }
   });
  }

  getUpdatedTime() {
    const arr = [];
    this.details.forEach(d => {
      this.originalDetails.forEach(od => {
        if (d.id === od.id && (d.from_hour !== od.from_hour || d.to_hour !== od.to_hour)) {
            arr.push(od);
        }
      });
    });
    return arr;
  }

}
