import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegacio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navegacio.component.html',
  styleUrl: './navegacio.component.scss'
})
export class NavegacioComponent {

  constructor(public authService: AuthService) {}

}