import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

//import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
//  dishes: Dish[] = DISHES;
dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
  //  this.dishes = this.dishService.getDishes();   // without promise
  /*this.dishService.getDishes()
  .then(dishes => this.dishes = dishes);*/ // with promise

  this.dishService.getDishes().subscribe(dishes => this.dishes = dishes); // with observable

  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
