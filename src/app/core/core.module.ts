import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolsModule } from '../tools/tools.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MainWrapComponent } from './shell/main-wrap/main-wrap.component';
import { MainNavComponent } from './shell/shell-tools/main-nav/main-nav.component';
import { MainNavBarComponent } from './shell/shell-tools/main-nav-bar/main-nav-bar.component';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NotFoundComponent,
    MainWrapComponent,
    MainNavComponent,
    MainNavBarComponent
  ],
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule, ToolsModule],
  exports: [ShellComponent]
})
export class CoreModule {}
