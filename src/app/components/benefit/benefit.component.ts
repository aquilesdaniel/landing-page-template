import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefit',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css',
})
export class BenefitComponent {
  @Input('img-path') imgPath: string = '';
  @Input('card-title') cardTitle: string = '';
  @Input('card-description') cardDescription: string = '';
}
