import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { ResolveEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  //service
  /*getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: string): Leader {
  return LEADERS.filter((leader) => (leader.id === id))[0] ;
}

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }*/
  ///service with promise immediately

 /* getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
}
getFeaturedLeader(): Promise<Leader> {
  return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
}

getLeader(id: string): Promise<Leader> {
  return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]) ;
}*/
//service with promise with delay
getLeaders(): Promise<Leader[]> {
  return new Promise(resolve => {
    setTimeout(() => resolve(LEADERS), 2000);
  });
}
getFeaturedLeader(): Promise<Leader> {
return  new Promise(resolve=> {
  // Simulate server latency with 2 second delay
    setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
});
}

getLeader(id: string): Promise<Leader> {
return new Promise(resolve => {
  // Simulate server latency with 2 second delay
    setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
});
}




}
