import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ElementService } from '../../serveis/element.service';
import { debounceTime } from 'rxjs';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrls: ['./formulari-cerca.component.scss']
})
export class FormulariCercaComponent {

  elementService = inject(ElementService);

  formulari = new FormGroup({
    termeCerca: new FormControl(
      '',
      [
        Validators.minLength(2),
        Validators.maxLength(50)
      ],
      [this.codiDisponibleValidator()]
    )
  });

  constructor() {
    this.formulari.get('termeCerca')?.valueChanges
      .pipe(
        debounceTime(400)
      )
      .subscribe((terme: string | null) => {
        console.log('BUSCANT:', terme);
        if (terme && terme.length >= 2) {
          this.elementService.cercar(terme);
        }
      });
  }
  netejar() {
    this.formulari.reset();
  }
  get termeCerca() {
    return this.formulari.get('termeCerca');
  }
  codiDisponibleValidator() {
    return (control: any) => {
      return of(control.value).pipe(
        delay(500),
        map((terme: string) => {

          if (!terme || terme.length < 2) {
            return null;
          }

          if (terme === 'zzz') {
            return { sensResultats: true };
          }

          return null;
        })
      );
    };
  }
}