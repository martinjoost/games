import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ToolsModule } from '../tools/tools.module';
import { IntroComponent } from './home/home-sections/intro/intro.component';
import { SysWrapComponent } from './home/home-sections/sys-wrap/sys-wrap.component';
import { HomeLottoSliderComponent } from './home/home-sections/home-lotto-slider/home-lotto-slider.component';
import { MatCardModule } from '@angular/material/card';
import { CasinoGamesComponent } from './home/home-sections/casino-games/casino-games.component';
import { PromoBoxComponent } from './home/home-sections/promo-box/promo-box.component';
import { NewProductComponent } from './home/home-sections/new-product/new-product.component';
import { ScratchCardsComponent } from './home/home-sections/scratch-cards/scratch-cards.component';
import { SiteSafeComponent } from './home/home-sections/site-safe/site-safe.component';
import { SyndicatesComponent } from './home/home-sections/syndicates/syndicates.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    SysWrapComponent,
    HomeLottoSliderComponent,
    CasinoGamesComponent,
    PromoBoxComponent,
    NewProductComponent,
    ScratchCardsComponent,
    SiteSafeComponent,
    SyndicatesComponent
  ],
  imports: [CommonModule, HomeRoutingModule, ToolsModule, MatCardModule]
})
export class HomeModule {}
