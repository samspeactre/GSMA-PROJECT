import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterModule } from '@angular/router';
import { CopyrightComponent } from '../../view/copyright/copyright.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule, CopyrightComponent,],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements AfterViewInit {
  activeLink: string = 'dashbord';

  constructor(private router: Router) { }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  @ViewChild('layout', { static: false }) layoutDiv!: ElementRef;

  ngAfterViewInit(): void {
    this.layoutDiv.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    const layout = this.layoutDiv.nativeElement;
    const maxScrollTop = layout.scrollHeight - layout.offsetHeight;

    if (layout.scrollTop > maxScrollTop) {
      layout.scrollTop = maxScrollTop;
    }
  }
}
