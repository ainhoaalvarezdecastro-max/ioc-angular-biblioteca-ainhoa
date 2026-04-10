import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferitsService } from '../../serveis/preferits.service';
import { ReactiveFormsModule, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html',
  styleUrls: ['./preferits-panel.component.scss']
})
export class PreferitsPanelComponent implements OnInit {
  
  notesPerElement: { [key: string]: string[] } = {};

  preferitsService = inject(PreferitsService);
  private fb = inject(FormBuilder);

  formulari = this.fb.group({
    notes: this.fb.array([])
  });

  get notes(): FormArray {
    return this.formulari.get('notes') as FormArray;
  }
  
  getControl(index: number) {
    return this.notes.at(index);
  }

  afegirControl() {
    this.notes.push(
      this.fb.control('', [
        Validators.required,
        Validators.minLength(3)
      ])
    );
  }

  afegirControlsInicials() {
    this.preferitsService.preferits().forEach(() => {
      this.afegirControl();
    });
  }

  ngOnInit() {
    const preferits = this.preferitsService.preferits();

    preferits.forEach((element) => {
      this.afegirControl();
      this.notesPerElement[element.id] = [];
    });
  }

  guardarNota(index: number) {
    const nota = this.notes.at(index).value;
    const element = this.preferitsService.preferits()[index];

    if (!nota || nota.length < 3) return;

    this.notesPerElement[element.id].push(nota);

    this.notes.at(index).reset();
  }
  eliminarNota(elementId: string, index: number) {
    this.notesPerElement[elementId].splice(index, 1);
  }

}