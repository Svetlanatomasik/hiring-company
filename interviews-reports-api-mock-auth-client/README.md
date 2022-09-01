# Mock API

This is an Mock API which is used for development of "Interviews Reports" app.
It supports GET, PUT, POST, and DELETE requests against the mock API and note that changes are saved to `db/db.json`.

### Getting Started
If you are not using `yarn` you can use `npm` instead.  
```
> npm install
> npm start   

Load http://localhost:3333/api/companies using browser or some rest client
```

### Endpoints 

Application endpoints based on `db/db.js` objects and support REST standards.
Meaning you can use GET, PUT, POST, PATCH and DELETE requests against provided endpoints.   
Provided endpoints are:   
* `http://localhost:3333/api/companies`   
* `http://localhost:3333/api/candidates`
* `http://localhost:3333/api/reports`   
* `http://localhost:3333/api/users`      
   
```
// Post request payload example for "reports" endpoint
{
    "candidateId": 9451057,
    "candidateName": "Zula Feeney",
    "companyId": 92859858,
    "companyName": "Volkman - Schimmel",
    "interviewDate": "Fri Jan 11 2018 15:23:09 GMT+0100 (CET)",
    "phase": "cv",
    "status": "passed",
    "note": "Suscipit dolores sed ..."
}
``` 

### Login
In order to access protected endpoints, user need to be authorized.   
There is already created user in DB which credentials can be used in order to login.    
Auth endpoint
```
POST http://localhost:3333/login
```
Request Payload
```
{
  "email": "dev@dev.com",
  "password": "developer"
}
```   
Successful login response 
```
{
  "accessToken": "ey...Yc"
}
```

Token needs to be sent as header for each http request sent to API.
```
  { Authorization: 'Bearer <USER ACCESS TOKEN>' }
```
### Additional info

Application data is in `db/db.json` file.
