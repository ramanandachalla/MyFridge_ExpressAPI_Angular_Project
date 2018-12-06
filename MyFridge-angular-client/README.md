# MyFridge
MyFridge Web application with CURD Operations and Front End is Angular CLI
==========================================================================
Name: Ramananda Challa
ID: Rchalla9600

MyFridge Web application have two parts. One is server side and another is front end side. The server side using express API calls interact with mongo database and angular cli frond end used server side api calls and perform CRUD operations of Food Items.

## Installation Details
- Clone this repository called MyFridge
- Install Mongo database
- Create Mongo database called 'MyFridge'
- Go to MyFridge folder in server side and Install all packages included in package.json using 'npm install' and run on application using 'npm start'
- Navigate to `http://localhost:3000/api` see the api calls funtionality in POSTMAN.
- Go to MyFridge-angular-client folder click on 'npm install' install all packages.
- Execute command ng server --open. It will automatically open the browser with angular front end and running in 4200 port number.
- The URL should be like http://localhost:4200/ 

## Usage Instructions Details
All folders are build with MVC pattern. But the schema mentioned food.js in models inside app_api.  
All api calls are implemented in food.js inside app_api/controllers folder.
All routing configurations mentioned in app_api/foods.js file. 
All angular compoemnts like angular services, angular route, angular components are created and configured.

Open application within browser redirect to home page URL:`http://localhost:4200/`. 

The home page have list food items with view, edit and delete options.

If you want to add new food item go to right side menu 'Add New Food Item'.

Single Page can be used to all add and update items.

github Respository 'MyFridge' URL:https://github.com/ramanandachalla/MyFridge_ExpressAPI_Angular_Project.git