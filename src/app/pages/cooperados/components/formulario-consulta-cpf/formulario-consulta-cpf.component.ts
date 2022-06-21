import { CpfService } from './../../../../core/services/cpf.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICpf } from 'src/app/core/interfaces/cpf';

@Component({
  selector: 'app-formulario-consulta-cpf',
  templateUrl: './formulario-consulta-cpf.component.html',
  styleUrls: ['./formulario-consulta-cpf.component.scss'],
})
export class FormularioConsultaCpfComponent implements OnInit {
  @Output() cpfListener: EventEmitter<ICpf | null> = new EventEmitter();

  form!: FormGroup;
  cpf!: ICpf;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private cpfService: CpfService) {}

  ngOnInit(): void {
    this.setForm();
  }

  getCpf(): void {
    const { cpf } = this.form.value;
    this.isLoading = true;

    setTimeout(() => {
      this.cpfService.get(Number(cpf)).subscribe((r) => {
        if (r.success) {
          this.cpf = r.data!;
          this.emitterCpf();
        } else {
          this.form.get('cpf')?.setErrors(Validators.required);
        }

        this.isLoading = false;
      });
    }, 2000);
  }

  private emitterCpf(): void {
    this.cpfListener.emit(this.cpf);
  }

  private setForm(): void {
    this.form = this.fb.group({
      cpf: [null, Validators.required],
    });
  }
}
