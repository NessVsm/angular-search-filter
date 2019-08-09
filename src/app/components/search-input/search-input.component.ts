import { VariablexchangeService } from './../../services/variablexchange.service';

import { Component, OnInit } from '@angular/core';
import { CompaniesService } from './../../services/companies.service';
import { Company } from './../../models/company';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  companiesShown: Array<Company>;
  companies: Company[] = [];
  company: any
  companyData: Company

  constructor(private companiesservice: CompaniesService, private varex: VariablexchangeService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companiesservice.getCompanies().subscribe(data => {
      this.companies = data
    })
  }

  mountList(id) {
    this.companiesservice.getOneCompany(id).subscribe(data => {
      this.varex.filter(data);
      this.company = data
    })


  }

}
