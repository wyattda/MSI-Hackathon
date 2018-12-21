# Copyright © 2018 Motorola Solutions, Inc. ALL RIGHTS RESERVED.
# MSI Job Openings
- We are hiring!!!! 
- Directory contains PDF full of job ids and public link to against each of ids have job details..
- Go though job openings and fill out the [Google Forms](https://goo.gl/forms/po3EOlbtH7RJndw93) if interested.

# Postman Scripts
- There is a postman script which will give you capability to hit our Crime Reports API server and get live data. 

You would need an `access-token` value which will be provided by MSI staff to you. Use that access token in `pre-request script` of the Postman Request and you are good to go. 

What API does? Look into [CommandCentral API for CrimeReports](https://api.master.commandcentral.com/api/cr/v1/docs/) documentation for more details.

```
NOTE: Postman script will only work within MSI Network. For offline work, please use Sample Data.
```

# Sample Data
- We are providing some sample data under `sample-data` directory for development purpose. You can use it when you are not in Motorola Solutions internal network.
- Sample data are provided for 3 agencies in `JSON` format. Each JSON file contains around `2000` or less `incidents/crimes` with public details.
- Please use these data for your solution.

# Example Application

See [the CR-SAMPLE folder](CR-SAMPLE/README.md) for a simple example of using the API in a browser/webapp context.
