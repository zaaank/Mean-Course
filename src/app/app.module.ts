import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //allows [(ngModel)] in post-create.html
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule  } from '@angular/material/input'; //za uporabo angular material
import { MatCardModule  } from '@angular/material/card';
import { MatButtonModule  } from '@angular/material/button';
import { MatToolbarModule  } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
