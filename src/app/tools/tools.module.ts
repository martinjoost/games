import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

//COMPONENTS
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { FeaturedListComponent } from './featured-list/featured-list.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeIntroSliderComponent } from './sliders/home-intro-slider/home-intro-slider.component';
import { SpecialLottoSliderComponent } from './sliders/special-lotto-slider/special-lotto-slider.component';
import { StandardSliderComponent } from './sliders/standard-slider/standard-slider.component';
import { LottoSliderComponent } from './sliders/lotto-slider/lotto-slider.component';
import { LoginComponent } from './login/login.component';
import { LogoutDialogComponent } from './dialogs/logout-dialog/logout-dialog.component';
import { TerminsAndConditionsTemplateSheetComponent } from './templatesheets/termins-and-conditions-template-sheet/termins-and-conditions-template-sheet.component';
import { PrivatePolicyTemplateSheetComponent } from './templatesheets/private-policy-template-sheet/private-policy-template-sheet.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { SkinBoxComponent } from './skin-box/skin-box.component';
import { ConfirmComponent } from './login/confirm/confirm.component';

@NgModule({
  declarations: [
    MainWrapperComponent,
    FeaturedListComponent,
    MainNavigationComponent,
    HomeIntroSliderComponent,
    SpecialLottoSliderComponent,
    StandardSliderComponent,
    LottoSliderComponent,
    LoginComponent,
    LogoutDialogComponent,
    TerminsAndConditionsTemplateSheetComponent,
    PrivatePolicyTemplateSheetComponent,
    SpinnerComponent,
    SimpleModalComponent,
    SkinBoxComponent,
    ConfirmComponent,
    RecoveryComponent,
    SkinBoxComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    NgxUsefulSwiperModule,
    MatCardModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ],
  exports: [
    MainWrapperComponent,
    FeaturedListComponent,
    MainNavigationComponent,
    HomeIntroSliderComponent,
    SpecialLottoSliderComponent,
    StandardSliderComponent,
    LottoSliderComponent,
    LoginComponent,
    NgxUsefulSwiperModule,
    SpinnerComponent,
    SimpleModalComponent,
    RecoveryComponent,
    SkinBoxComponent
  ]
})
export class ToolsModule {}
