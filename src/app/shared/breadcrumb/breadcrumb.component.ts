import { Component, inject, Input, OnInit, } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreadcrumbService } from '../../features/products/services/breadcrumb.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent  {
  image = '/products/ChevronRight.svg';
}

