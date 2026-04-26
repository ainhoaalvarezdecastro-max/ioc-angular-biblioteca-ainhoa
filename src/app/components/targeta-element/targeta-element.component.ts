import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsService } from '../../serveis/preferits.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetaElementComponent {

  @Input() element!: ElementCataleg;

  preferitsService = inject(PreferitsService);

  togglePreferit() {
    if (this.preferitsService.esPreferit(this.element.id)) {
      this.preferitsService.eliminarPreferit(this.element.id);
    } else {
      this.preferitsService.afegirPreferit(this.element);
    }
  }

}