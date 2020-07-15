import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  //@Input()
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
  //  let vare = this.route.snapshot.params['num']; //without observable
   // this.dish = this.dishservice.getDish(vare);  without promise
  // this.dishservice.getDish(vare).then(dish => this.dish = dish); // with promise

  // this.dishservice.getDish(vare).subscribe(dish => this.dish = dish); // with observable

   this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
   this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['num'])))
   .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });


  }
  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
