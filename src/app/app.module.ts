import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { CurdComponent } from './components/curd/curd.component';
import { CurdService } from './services/curd/curd.service';
import { FireComponent } from './components/fire/fire.component';

//import { AngularFireModule } from '@angular/fire';
//import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CurdComponent,
    FireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFireDatabaseModule
  ],
  providers: [CurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
