import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-references.component.html',
  styleUrl: './content-references.component.css'
})
export class ContentReferencesComponent {
  isOn: any;

  toggleState(): void {
    this.isOn = !this.isOn;
  }

  module = [
    {imgSrc: '../../../../assets/icons/pdf.svg', name: 'Leadership Suite - Impostor Syndrome in New Managers 1.0 - Infographic'},
    {imgSrc: '../../../../assets/icons/pdf.svg', name: 'Leadership Suite - Impostor Syndrome in New Managers 1.0 - Thumbnail'},
    {imgSrc: '../../../../assets/icons/pdf.svg', name: 'Leadership Suite - Impostor Syndrome in New Managers 1.0 - Workbook - Questionnaire'},
  ]
}
