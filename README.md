# Hospital-api
  Create an api of hospital using nodejs, mongodb and javascript
  
# Requirement

  Nodejs
  
  MongoDB
  
# Routes

  # Register a new doctor
  
  -> method : POST
  
  -> routes : doctors/register
  
  ->register using username and password
  
  -> success or failure message will be display in json format
  
  Doctor login and returns the JWT to be used
  
  -> method : POST
  
  ->login using username and password
  
  -> routes : doctors/login
  
  -> success or failure message will be display in json format
  
  # Register a new patient 
  
  -> method : POST
  
  -> routes : patients/register
  
  ->register using mobile number
  
  -> success or failure message will be display in json format
  
  # Create patient report
  
  -> method : GET
  
  ->routes : patients/:id/create_reports
  
  -> success or failure message will be display in json format
  
  # List all the reports of a patient oldest to latest
  
  ->method : GET
  
  ->routes : /patients/:id/all_reports
  
  -> success or failure message will be display in json format
  
  # List all the reports of all the patients filtered by a specific status
  
  ->method : GET
  
  ->routes : /reports/:status
  
  -> success or failure message will be display in json format
  
  
  
  
  
  
  
  
  
  
  
  
