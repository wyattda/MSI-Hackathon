import { Component, OnInit } from '@angular/core';
import { TokenValidatorService } from '../token-validator.service';
import { CrimeReportsBulkAPIService } from '../crime-reports-bulk-api.service'
import { Validators } from '@angular/forms';

@Component({
  selector: 'interaction-panel',
  templateUrl: './interaction-panel.component.html',
  styles: ['./interaction-panel.component.css']
})
export class InteractionPanelComponent implements OnInit {
  public accessToken: string = 'Replace me!';


  public agenciesLoading: boolean = false;
  public agenciesLoaded: boolean = false;
  public incidentsLoading: boolean = false;
  public incidentsLoaded: boolean = false;

  public agencies: Array<object> = [];
  public incidents: Array<object> = [];
  public currentAgency: object = null;
  public currentIncident: object = null;

  constructor(private validator: TokenValidatorService, private crBulk: CrimeReportsBulkAPIService) {
  }

  ngOnInit() {
  }

  public agencyChange(change) {
    this.currentAgency = this.agencies.find(a => a['id'].toString() === change);
    this.incidents = [];
    this.incidentsLoaded = false;
  }

  public incidentChange(change) {
    this.currentIncident = this.incidents.find(a => a['id'].toString() === change);
  }

  public tokenIsValid() { // TODO: address the redundant work here
    return this.validator.validateToken(this.accessToken);
  }

  public async loadAgencies() {
    this.agenciesLoading = true;
    try {
      this.agencies = await this.crBulk.getAgencies(this.accessToken);
      this.agenciesLoading = false;
      this.agenciesLoaded = true;
      this.currentAgency = this.agencies[0];
    } catch (err) {
      this.agenciesLoading = false;
      alert(err.message);
    }
  }

  public async loadIncidents() {
    this.incidentsLoading = true;
    try {
      this.incidents = await this.crBulk.getIncidents(this.accessToken, this.currentAgency['id']);
      this.incidentsLoading = false;
      this.incidentsLoaded = true;
      this.currentIncident = this.incidents[0];
    } catch (err) {
      this.incidentsLoading = false;
      alert(err.message);
    }
  }
}
