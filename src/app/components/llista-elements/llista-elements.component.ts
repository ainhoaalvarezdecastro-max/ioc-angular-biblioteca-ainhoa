import { Component, Input, OnChanges } from '@angular/core';
import { Element } from '../../models/element.model';
import { DADES_MOCK } from '../../mocks/dades-mock';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent implements OnChanges {

  elements: Element[] = DADES_MOCK;

  @Input() termeCerca: string = '';

  elementsFiltrats: Element[] = this.elements;

  ngOnChanges() {
    this.filtrarElements();
  }

  filtrarElements() {

    if (!this.termeCerca || this.termeCerca.length < 3) {
      this.elementsFiltrats = this.elements;
      return;
    }

    const terme = this.termeCerca.toLowerCase();

    this.elementsFiltrats = this.elements.filter(e =>
      e.nom.toLowerCase().includes(terme)
    );
  }

  trackById(index: number, element: any) {
    return element.id;
  }

}