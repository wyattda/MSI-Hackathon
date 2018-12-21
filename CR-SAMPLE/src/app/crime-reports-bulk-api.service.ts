import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrimeReportsBulkAPIService {
  private crUri:string = 'https://api.master.commandcentral.com/api/cr/v1/';
  constructor(private http: HttpClient) { }

  public async getAgencies(accessToken): Promise<Array<object>> {
    const returnedData = await new Promise((resolve, reject) => {
      this.http.put(this.crUri + 'agencies?fields=id,name,state,zip,center', {}, {
        headers: {
          'authorization': `Bearer ${accessToken}`,
          'content-type': 'application/json'
        }
      }).subscribe((data)=>{
        // console.log(data);
        resolve(data);
      }, (err)=>{
        console.error(err);
        reject(err);
      });
    });
    return returnedData['results'];
  }

  public async getIncidents(accessToken, agencyId): Promise<Array<object>> {
    const returnedData = await new Promise((resolve, reject) => {
      this.http.put(this.crUri + `incidents?agencyId=${agencyId}`, {}, {
        headers: {
          'authorization': `Bearer ${accessToken}`,
          'content-type': 'application/json'
        }
      }).subscribe((data)=>{
        console.log(data);
        resolve(data);
      }, (err)=>{
        console.error(err);
        reject(err);
      });
    });
    return returnedData['results'];
  }
}
