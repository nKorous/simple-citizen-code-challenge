import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrisbeeListComponent } from './frisbee-list/frisbee-list.component';
import { FrisbeeDetailComponent } from './frisbee-detail/frisbee-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';

// Material Imports
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { FrisbeeComponent } from './frisbee/frisbee.component'

@NgModule({
  declarations: [
    AppComponent,
    FrisbeeListComponent,
    FrisbeeDetailComponent,
    TopbarComponent,
    FrisbeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
