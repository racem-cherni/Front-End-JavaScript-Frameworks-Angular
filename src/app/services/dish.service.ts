import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  //service
  /*getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0] ;

  }


  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }

  */

  //service with promise immediately
  /*getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: String): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }*/

  // service with promise with delay
  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: string): Promise<Dish> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
  }

  constructor() { }
}
