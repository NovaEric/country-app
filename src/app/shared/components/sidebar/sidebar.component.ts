import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  public props: string[] = [
    'countries/by-capital',
    'countries/by-country',
    'countries/by-region'
  ]

}
