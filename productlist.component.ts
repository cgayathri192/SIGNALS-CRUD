import { Component, computed } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  constructor(public service:MasterService){

  }
  functionremove(slno:any){
    this.service.RemoveProduct(slno);
  }

  functionedit(slno:any){
    this.service.GetProductbyCode(slno);
  }
  toggleShoppingBag() {
    this.service.toggleShoppingBag();
  }


}
