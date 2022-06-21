import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './../../shared/shared.module';
import { COOPERADOS_ROUTE } from './../../core/routes/cooperados.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooperadosComponent } from './cooperados.component';
import { CooperadoStepperComponent } from './components/cooperado-stepper/cooperado-stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioConsultaCpfComponent } from './components/formulario-consulta-cpf/formulario-consulta-cpf.component';

@NgModule({
  declarations: [CooperadosComponent, CooperadoStepperComponent, FormularioConsultaCpfComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(COOPERADOS_ROUTE),
    NgxMaskModule.forRoot(),
  ],
})
export class CooperadosModule {}
