import { Company } from './../models/company';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Companyfilter'
})
export class FilterPipe implements PipeTransform {

  transform(companies: Company[], searchTerm: string) {
    if (!companies || !searchTerm) {
      return null
    }

    return companies.filter(company =>
      company.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1)

  }
}
