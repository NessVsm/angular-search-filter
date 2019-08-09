import { CompaniesService } from './../../services/companies.service';
import { Company } from './../../models/company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companiesShown: Array<Company>;
  companySelected: Company;
  companies: Company[] = [];


  constructor(private companiesservice: CompaniesService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companiesservice.getCompanies().subscribe(data => {
      this.companies = data
    })
  }
}
