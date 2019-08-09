import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesData } from './database/companies_data';


import { CompaniesService } from './services/companies.service';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

import { HttpClientModule } from '@angular/common/http';
import { ResultsDropdownComponent } from './components/results-dropdown/results-dropdown.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    CompaniesComponent,
    SearchResultsComponent,
    ResultsDropdownComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(CompaniesData),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
