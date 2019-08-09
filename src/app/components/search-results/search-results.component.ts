import { Component, OnInit } from '@angular/core';
import { CompaniesService } from './../../services/companies.service';
import { Company } from './../../models/company';
import { VariablexchangeService } from './../../services/variablexchange.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  companySelected: Company;

  constructor(private varex: VariablexchangeService) {
    this.varex.listen().subscribe((m: any) => {
      this.companySelected = m
      //console.log(m);
    })
  }
  openModal() {
    window.confirm("Tem certeza que deseja ir para a tela?")
  }

  ngOnInit() {
  }


}
