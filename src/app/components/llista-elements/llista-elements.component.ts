import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { ElementService } from '../../serveis/element.service';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './llista-elements.component.html',
  styleUrls: ['./llista-elements.component.scss']
})
export class LlistaElementsComponent implements OnInit {

  elementService = inject(ElementService);

  ngOnInit(): void {
    console.log('LLISTA INIT');
    this.elementService.obtenirPopulars();
  }

}