import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  //@Input()
  dish: Dish;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let vare = this.route.snapshot.params['num'];
   // this.dish = this.dishservice.getDish(vare);  without promise
  // this.dishservice.getDish(vare).then(dish => this.dish = dish); // with promise

   this.dishservice.getDish(vare).subscribe(dish => this.dish = dish); // with observable


  }

  goBack(): void {
    this.location.back();
  }

}
