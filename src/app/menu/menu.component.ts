import { Component, OnInit , Inject } from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
//  dishes: Dish[] = DISHES;
dishes: Dish[];


  constructor(private dishService: DishService,
     @Inject('BaseURL') public BaseURL) { } // when you have a service, you are injecting
                                                                                        //  services like this here,
                                                                                        // but when you have a value,
                                                                                          // then you inject the value
                                                                                         // by using the "@Inject" decorator.

  ngOnInit() {
  //  this.dishes = this.dishService.getDishes();   // without promise
  /*this.dishService.getDishes()
  .then(dishes => this.dishes = dishes);*/ // with promise

  this.dishService.getDishes().subscribe(dishes => this.dishes = dishes); // with observable

  }

}
