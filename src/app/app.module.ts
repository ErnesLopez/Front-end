import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { PictureComponent } from './picture/picture.component';
import { AcordeonDeInformacionComponent } from './acordeon-de-informacion/acordeon-de-informacion.component';
import { CVComponent } from './cv/cv.component';
import { RedesContactoComponent } from './redes-contacto/redes-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PresentacionComponent,
    PictureComponent,
    AcordeonDeInformacionComponent,
    CVComponent,
    RedesContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
