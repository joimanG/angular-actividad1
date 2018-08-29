import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialComponentComponent } from './my-material-component/my-material-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { DearPuppyComponentComponent } from './dear-puppy-component/dear-puppy-component.component';
import { JoimanComponentComponent } from './joiman-component/joiman-component.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/';
import {MatInputModule} from '@angular/material/input';


const appRoutes: Routes = [
  {path: 'first-page', component: FirstComponentComponent},
  {path: 'second-page', component: SecondComponentComponent},
  {path: 'dear-puppy', component: DearPuppyComponentComponent},
  {path: 'joiman', component: JoimanComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyMaterialComponentComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    DearPuppyComponentComponent,
    JoimanComponentComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
