import { Component, OnInit, Input , ViewChild , Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';



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
  comment: Comment;

  commentForm: FormGroup;
  @ViewChild('fform') commentFormDirective;



  formErrors = {
    'comment': '',
    'author': ''
  };

  validationMessages = {
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 1 characters long.'
    },
    'author': {
      'required':      ' Author Name is required.',
      'minlength':     'Author Name must be at least two characters long.',
      'maxlength':     'Author Name cannot be more than 25 characters long.'
    },
  };
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location, private fb: FormBuilder , @Inject('BaseURL') public BaseURL) {
      this.createForm();
    }

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
  createForm(){
    this.commentForm = this.fb.group({
      rating: 5,
      comment: ['', [Validators.required,  Validators.minLength(1)] ],
      author: ['', [Validators.required, Validators.minLength(2)] ],
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }
  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit() {
    this.comment = this.commentForm.value;   // data model = form model
    this.comment.date = new Date().toISOString();
    this.dish.comments.push(this.comment);
    console.log(this.comment);
    this.commentForm.reset({
      rating: 5,
      comment: '',
      author: '',
    });

  }

}
