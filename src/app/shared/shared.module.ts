import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent], // Declaración del HeaderComponent
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent] // Exportamos para usarlo en otros módulos
})
export class SharedModule {}
