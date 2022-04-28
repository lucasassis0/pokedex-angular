import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    TemplateComponent,
    TopbarComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TemplateComponent]
})
export class CoreModule { }
