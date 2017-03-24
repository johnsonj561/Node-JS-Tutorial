-------------------------------------------------------------------------------------
## REST Architecture
- REpresentational State Transfer
- REST is web standards based architecture that uses HTTP protocol
- every component is a resource and is accessed by common interface using HTTP methods
- introduced by Roy Fielding in 2000

### HTTP Methods
- GET - used to provide read only access to resource
- PUT - used to create new resource
- DELETE - used to remove a resource
- POST - used to update existing resource or create a new resource

-------------------------------------------------------------------------------------
## RESTful Web Services
- web service is collection of open protocols and standards used for exchanging data between
applications or systems
- software applications written in various programming languages and running on various platforms
can use web services to exchange data over networks like Internet
- interoperability (communication between languages/environments) is possible because of open standards
- RESTful Web Service is web service based on REST Architecture
- use HTTP methods to impement concept of REST Architecture
- RESTful web service usually defines a URI (Uniform Resource Identifier) that provides resource
representation such as JSON and some HTTP methods

-------------------------------------------------------------------------------------------------
## Creating a RESTful Library
- imagine we have JSON DB (MongoDB) of Users
- we create RESTful APIs as follows:
	- listUsers, GET, show list of all users
	- addUser, POST, add details of new user
	- deleteUser, DELETE, delete an existing user
	- :id, GET, show details of user

-----------------------------------------------------------------------------------------------

