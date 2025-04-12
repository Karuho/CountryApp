import { Component } from '@angular/core';
import { RegionListComponent } from "../../components/region-list/region-list.component";

@Component({
  selector: 'app-by-region-page',
  imports: [RegionListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent { }
