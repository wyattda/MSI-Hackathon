# Copyright © 2019 Motorola Solutions, Inc. ALL RIGHTS RESERVED.
# MSI Job Openings
- We are hiring!!!! 
- Directory contains PDF full of job ids and public link to against each of ids have job details..
- Go though job openings and fill out the [Google Forms](https://goo.gl/forms/po3EOlbtH7RJndw93) if interested.

# How to start?
## Step 1: Internet Access

```
SSID: M-Guest
Password: GalvinBros-1928!
```
## Step 2: Connecting to the CrimeReports API
Authentication Bearer Token: 
```
eyJhbGciOiJSUzI1NiIsImtpZCI6InNpZ25pbmdrZXkiLCJ4NXQiOiJzWWsya0g1d0h4NnhJRVdCYldUN0JRVTBmLUEifQ.eyJzY29wZSI6WyJDUkJ1bGtBUEkiLCJDUk5vdGlmeSJdLCJjbGllbnRfaWQiOiJDcmltZVJlcG9ydHNEZXZUZXN0IiwiaXNzIjoiaHR0cHM6Ly9pZG1tYXN0ZXIuaW13Lm1vdG9yb2xhc29sdXRpb25zLmNvbTo0NDMiLCJleHAiOjE1NTA4MDIwOTN9.DyECrREGCqTHFK4RpSZMgXOFXAb8jtFb8SKFQlsItpf9ri3XnoCuLOumTu4m8B-bzLZClJeNYdylbqW56ZNIRwpJysrzWsSvCr9nNQWJs3S9PpBgKJ0p8ZvBESzjrfkG8Nad63uYcYgDRTYlCyTjwUvSjAvstv8LjENThFTRFVxI9sX9wzVZQjjnil2tGpdg582cQCZqayU2J4qluATXg6eM9pnGKQUbDWsN6ed-dB8POsQurFc28PLTngXWXRF4yDFCDsWR0tI2WNBP_kM4el4uQc2BQnP6WWKClR5ANrE0iZf55WlfTpI5mr9MzHrzCjOKF2exd0mVIZRnsdysDw
```

## CrimeReports API
Swagger Document: https://api.master.commandcentral.com/api/cr/v1/docs


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
