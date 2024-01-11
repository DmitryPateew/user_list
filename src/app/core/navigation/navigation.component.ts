import {Component} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";
import {NAVIGATION_LINKS} from "../../constant/constant";

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  standalone: true,
  imports: [MatTabsModule, RouterOutlet, RouterLink, NgForOf],
})

export class NavigationComponent {
  title = 'navigation';

  links = NAVIGATION_LINKS;
  activeLink = this.links[0];

  constructor(private router: Router) {
  }
}
