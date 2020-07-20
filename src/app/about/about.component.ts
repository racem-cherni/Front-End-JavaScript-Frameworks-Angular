import { Component, OnInit , Inject  } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut , expand } from '../animations/app.animation';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
   // tslint:disable-next-line: use-host-property-decorator
   host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]


})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  leaderErrMess: string;


  constructor(private leaderservice: LeaderService,
    @Inject('BaseURL') private BaseURL
    ) { }

  ngOnInit() {
  //  this.leaders = this.leaderservice.getLeaders(); without promise

   // this.leaderservice.getLeaders().then(leaders => this.leaders = leaders); with promise

    this.leaderservice.getLeaders().subscribe(leaders => this.leaders = leaders , errmess => this.leaderErrMess = <any>errmess);


    }
  }


