import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
//service
 /* getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }*/
  /// service with promise immediately
 /* getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: string): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  }*/
    /// service with promise with delay
  /*  getPromotions(): Promise<Promotion[]> {
      return new Promise(resolve => {
        setTimeout(() => resolve(PROMOTIONS), 2000);
      });
    }

    getPromotion(id: string): Promise<Promotion> {
      return new Promise(resolve => {
        // Simulate server latency with 2 second delay
          setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
      });
    }

    getFeaturedPromotion(): Promise<Promotion> {
      return  new Promise(resolve=> {
        // Simulate server latency with 2 second delay
          setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
      });
    }*/

    // service wiht observable linked with promise

  /*  getPromotions(): Promise<Promotion[]> {
      return of(PROMOTIONS).pipe(delay(2000)).toPromise();

    }

    getPromotion(id: string): Promise<Promotion> {
      return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000)).toPromise();

    }

    getFeaturedPromotion(): Promise<Promotion> {
      return  of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000)).toPromise();
    }*/

    // service wiht observables

    getPromotions(): Observable<Promotion[]> {
      return of(PROMOTIONS).pipe(delay(2000));

    }

    getPromotion(id: string): Observable<Promotion> {
      return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));

    }

    getFeaturedPromotion(): Observable<Promotion> {
      return  of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
    }









}



