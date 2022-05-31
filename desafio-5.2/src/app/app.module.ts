import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CodigoConvitePipe } from './pipes/codigo-convite.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteFilhoComponent,
    ComponentePaiComponent,
    ListaNumerosComponent,
    QuadradoComponent,
    CuboComponent,
    TestesPipeComponent,
    CpfPipe,
    CnpjPipe,
    CodigoConvitePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
