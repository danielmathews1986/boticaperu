import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbSubject = new BehaviorSubject<BreadcrumbItem[]>([]);

  breadcrumbs$ = this.breadcrumbSubject.asObservable();

  set(items: BreadcrumbItem[]) {
    this.breadcrumbSubject.next(items);
  }

}