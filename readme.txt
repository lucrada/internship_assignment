The root directory contains two folders 'client' and 'server'. As the name indicates all the front-end code is inside 'client' folder and all the backend code is in 'server' folder.

client
---------

The folder structure of 'client' is basic react project folder structure where public folder contains static 
files like .html files and src folder containts all the javascript code and css.

src folder contains components, pages and styles subfolders. 

As the name indicates the component folder contains reusable components, 
in this case CityTable, Footer, Header, UserTable are the components.

pages folder contains various pages that is to be rendered according to the route. There are 5 pages in total, table1, table2, table3, table4, and table5
each page shows respective tables as given in the assignment.

styles folder contains all the css files used for all pages and components.

api.js file contains all the api calls from client side, the code for fetching all the 5 tables are inside api.js.
I had used 'fetch' function which is a native javascript function for api calls.

App.js file is where all the components and pages are held together, also the routes are declared in this file.

no changes are made into index.js file except to wrap the <App/> with <BrowserRouter></BrowserRouter>

server
-----------

the server folder contains a src folder where all the source code for backend lies.

config folder contains two files db_config.js and schema.js, the former is used to make connection to the mongodb server and to return the 
models defined in the schema.js file, the later is where all the models are defined.

routes folder contains all the routes, the routes are as follows:
    / -> return "server is up and running"
    /users/condition1 -> return table1 json data
    /users/condition2 -> return table2 json data
    /users/condition3 -> return table3 json data
    /users/condition4 -> return table4 json data
    /users/condition5 -> return table5 json data
    * -> anything other than these routes gives 404 error

each route is associated with a controller which handles the request, these controllers are defined in the contoller folder there are five controllers for handling each of the 5 requests, each controllers make use of services like getUsers and highestUsersWithAvgIncome which is defined inside services folder, these service function will interact with the database and return the data to the controller, controller then return the response back to the client.

server.js file contains usual boilerplate code for setting up express
