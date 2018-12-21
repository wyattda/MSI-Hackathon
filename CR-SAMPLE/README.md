# Crime Reports API Sample Usage

This project demonstrates a simple use case of the Crimereports Bulk API that can be run in a browser.
While it likely does not (and is not intended to) provide quality Angular patterns/examples nor does it
provide an exhaustive use case for the API, it can be used as a quickstart example of consuming the API
within a web context.

For documentation of the CrimeReports Bulk API, please see [its swagger documentation](https://api.master.commandcentral.com/api/cr/v1/docs/).

## Quick start

Due to web security requirements, consuming the API in the browser will require you to serve the local project on HTTPS.
Due to current CORS configurations, you will need to serve the project at `local.master.commandcentral.com` on port 443.

Follow the instructions here to generate a server key and cert pair:
https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec

Alternatively, if you simply specify `--ssl` with `ng serve` without specifying the key and cert, it should generate its own,
but I cannot guarantee that will work. I specify a generated key and cert when running this project myself.

Additionally, edit your hosts file so that `local.master.commandcentral.com` resolves to `127.0.0.1`. For example, on a mac:
```bash
sudo vim /etc/hosts
```
and add the line:
```hosts
127.0.0.1 local.master.commandcentral.com
```
You may need to run `npm install` in the project root before it's ready.

Finally you can start the application with:
```bash
sudo ng serve --disable-host-check --port=443 --ssl=true --ssl-cert=server.crt --ssl-key=server.key
```
`--disable-host-check` will allow `ng serve` to serve other hosts other than `localhost`, specifying the port is
required for CORS to work by not having it in the origin header sent in the browser, and then the SSL options are
required to serve on HTTPS.

### Interacting with the application

You will need to provide a valid token in the UI. If you have valid client credentials, you can run:
```bash
curl -X POST \
  https://idmmaster.imw.motorolasolutions.com/as/token.oauth2 \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'cache-control: no-cache' \
  -d "grant_type=client_credentials&client_id=$1&client_secret$2=&scope=CRBulkAPI&undefined="
```
in order to obtain a token. Once you obtain a token or if you have a valid token already, you can just copy and paste it in the browser

## API Usage in this Application

This currently demonstrates a basic usage of the API to load and select [Agencies](https://api.master.commandcentral.com/api/cr/v1/docs/#/agencies/getAgencies) and then load and present a selected agency's [Incidents](https://api.master.commandcentral.com/api/cr/v1/docs/#/incidents/getIncidents).

The actual communication with the API as performed in this demo is available to see at [CrimeReportsBulkAPIService](src/app/crime-reports-bulk-api.service.ts).

### Extension

This application can be easily extended to:
* incorporate API results caching for quicker comparisons (currently, it will naively load every request)
* paginate agency or incident results through the API for higher interactivity (currently it only loads the first page of results for each endpoint)
* add inputs for users to specify filters/searches against the API in the browser
* add maps and present some of the geographic data such as agency base shapes, agency centers, and incident locations

Of course, the possibilities go far beyond these! And that is without considering any applications outside of the 
context of the browser, such as a mass download of data and performing analysis or even doing analysis in the browser.

---

# Original README from `ng new`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
