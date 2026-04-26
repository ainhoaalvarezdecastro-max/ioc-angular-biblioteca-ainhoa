import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ElementService } from '../../serveis/element.service';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';

@Component({
  selector: 'app-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule, TargetaElementComponent],
  templateUrl: './cerca.component.html',
  styleUrl: './cerca.component.scss'
})
export class CercaComponent {

  terme: string = '';

  constructor(public elementService: ElementService) {}

  ferCerca() {
    this.elementService.cercar(this.terme);
  }

}