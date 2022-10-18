import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrisbeeListComponent } from './frisbee-list/frisbee-list.component';
import { FrisbeeDetailComponent } from './frisbee-detail/frisbee-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';
import { ConvertCentsPipe } from './convert-cents.pipe';
import { BuyNowModalComponent } from './buy-now-modal/buy-now-modal.component'
import { FrisbeeComponent } from './frisbee/frisbee.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component'


// Material Imports
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    FrisbeeListComponent,
    FrisbeeDetailComponent,
    TopbarComponent,
    FrisbeeComponent,
    ConvertCentsPipe,
    BuyNowModalComponent,
    CartComponent,
    CartItemComponent
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
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
