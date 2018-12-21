import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenValidatorService {
  private tokenUrl: string = 'https://idmmaster.imw.motorolasolutions.com/as/token.oauth2';
  private validatings: object = {};


  constructor(private http: HttpClient) { }

  /**
   * Validate a token and learn why it may have failed
   * @param accessToken {string}
   * @return validation {object}
   * @return validation.status {boolean}
   * @return validation.message {string} - user friendly string to present
   */
  public validateToken(accessToken: string): object {
    const messages: string[] = [];
    let scopes: boolean = false;
    let issuer: boolean = false;
    let expiration: boolean = false;
    try {
      const tokenParts = accessToken.split('.');
      if (tokenParts.length === 3) {
        const tokenData = JSON.parse(atob(tokenParts[1]));
        if (tokenData) {
          // Validate scopes
          if (tokenData.scope instanceof Array) {
            if (tokenData.scope.includes('CRBulkAPI')) {
              scopes = true;
            } else {
              messages.push('"CRBulkAPI" scope must be present');
            }
          } else {
            messages.push('The token did not have scopes');
          }
          // Validate issuer
          if (tokenData.iss) {
            if (tokenData.iss === 'https://idmmaster.imw.motorolasolutions.com:443') {
              issuer = true;
            } else {
              messages.push('Token did not have correct issuer, must be "https://idmmaster.imw.motorolasolutions.com:443"');
            }
          } else {
            messages.push('Token did not have an issuer ("iss" claim)');
          }
          // Validate expiration
          if (tokenData.exp) {
            const expTime = new Date(tokenData.exp * 1000);
            const nowTime = new Date();
            if (expTime > nowTime) {
              expiration = true;
            } else {
              messages.push('Token is expired');
            }
          } else {
            messages.push('Token did not have an expiration claim ("exp")');
          }
        } else {
          messages.push('Token did not parse into valid object');
        }
      } else {
        messages.push('Token did not have all expected parts (should be length 3 after split on ".")');
      }
    } catch (err) {
      console.error(err);
      messages.push(err.message);
    }
    const status = scopes && issuer && expiration;
    const message = messages.join(' and ')
    return { message, status };
  }
}
