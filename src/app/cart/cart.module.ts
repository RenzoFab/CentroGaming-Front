import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartCounterComponent } from './components/cart-counter/cart-counter.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutPageComponent,
    CartItemComponent,
    CartCounterComponent,
    CartSummaryComponent,
  ],
  imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
