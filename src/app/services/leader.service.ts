import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  /*getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: string): Leader {
  return LEADERS.filter((leader) => (leader.id === id))[0] ;
}

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }*/
  ///service with promise

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
}
getFeaturedLeader(): Promise<Leader> {
  return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
}

getLeader(id: string): Promise<Leader> {
  return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]) ;
}


}
