import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports:[ RouterOutlet, HeaderComponent,BreadcrumbComponent, FooterComponent ],
    templateUrl:'./main-layout.component.html',
    styleUrl:'./main-layout.component.scss',
  })
  export class MainLayoutComponent {}