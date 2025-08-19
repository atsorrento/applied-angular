import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { RouterLinkActive_1 as RouterLinkActive } from '../../node_modules/@angular/router/router_module.d';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  template: `
    <div>
      <a routerLink="ui" [routerLinkActive]="['underline', 'font-bold']">UI</a>
    </div>
    <div><router-outlet /></div>
  `,
  styles: ``,
})
export class Counter {}
