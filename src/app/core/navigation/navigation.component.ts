import {Component} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";
import {NAVIGATION_LINKS} from "../../constant/constant";
import {INavigation} from "../../models/link.interface";

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  standalone: true,
  imports: [MatTabsModule, RouterOutlet, RouterLink, NgForOf],
})

export class NavigationComponent {
  links: INavigation[] = NAVIGATION_LINKS;
  activeLink: INavigation = this.links[0];
}
