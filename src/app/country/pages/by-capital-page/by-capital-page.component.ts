import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
// import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string|null>(null);
  countries = signal<RESTCountry[]>([]);

  onSearch(query: string) {
    if ( this.isLoading() ) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe( (countries) => {
      this.isLoading.set(false);
      this.countries.set(countries);

      console.log(countries);
    });
  }
/*   query = toSignal

  searchByApi = computed(() => {
    return this.countryService.searchByCapital(this.query())
  }) */
}
