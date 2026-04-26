import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../serveis/element.service';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [CommonModule, ScrollingModule, TargetaElementComponent],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.scss'
})
export class CatalegComponent implements OnInit {

  constructor(public elementService: ElementService) {}

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }

  trackById(index: number, element: any) {
    return element.id;
  }

}