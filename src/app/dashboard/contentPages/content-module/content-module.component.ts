import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-module',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-module.component.html',
  styleUrl: './content-module.component.css'
})
export class ContentModuleComponent {
  isOn: any;

  toggleState(): void {
    this.isOn = !this.isOn;
  }

  module = [
    {imgSrc: '../../../../assets/icons/module-icon.svg', name: 'Leadership Suite - Impostor Syndrome in New Managers', desc: ''},
    {imgSrc: '../../../../assets/icons/module-icon.svg', name: 'Leadership Suite - Impostor Syndrome in New Managers', desc: ''},
  ]

}
