import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
enteredValue = "";
newPost = 'Nothing';
  onAddPost(){  //methoda ki se bo sprožila onclick v post-create.component.html
    //console.dir(postInput); izpiše vse od postInput elementa
   // this.newPost = postInput.value; //.value izpiše value.
   this.newPost = this.enteredValue;
  }
}
