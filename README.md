# PracticaMDB

This backend practice project utilizes various technologies to build a simple application:

**dotenv**: Loads environment variables for application configuration.


**ts-node**: Executes TypeScript files directly without the need for transpilation.


**body-parser**: Middleware to facilitate data parsing in requests.


**express**: Web framework for backend application development.


**TypeScript**: Optional statically typed superset of JavaScript.

_Additionally_, dev dependencies are used to enhance the development experience with TypeScript:

**types-express**: TypeScript types for express.
types-mongoose: TypeScript types for mongoose.

***How to Set Up the Project***
Before starting the server, make sure you have MongoDB installed and running.

bash
Copy code
_brew services start mongodb-community@7.0_
After cloning the repository, you can start the services using the following command:

bash
_npm start_
This command will start the server with the version specified in the package.json file.


**Project Structure**
The project is organized around classes that represent entities related to the management of an application. Below is a brief description of each class and its associated attributes:

**Controllers and Routes**
Controllers
Controllers play a pivotal role in handling various operations on classes, including fetching all classes, fetching classes by their IDs, creating new classes, updating existing ones, and deleting classes.

**Routes**
Routes define the endpoints that correspond to the functionalities provided by the controllers. Each class is associated with its dedicated controller and route. When utilizing tools like Postman for sending requests, these routes serve as the entry points for performing actions on the respective classes.

Usage Example
To illustrate the usage of controllers and routes, consider the following example using Postman:

**GET All Classes**

Endpoint: /api/classes
Description: Retrieve all available classes.

**GET Class by ID**

Endpoint: /api/classes/:id
Description: Fetch a specific class using its unique identifier.

**POST Create Class**

Endpoint: /api/classes
Description: Create a new class.

**PUT Update Class**

Endpoint: /api/classes/:id
Description: Update an existing class using its ID.

**DELETE Delete Class**

Endpoint: /api/classes/:id
Description: Delete a class based on its ID.

***Classes***
**Author**: Represents an author of books.
Attributes: rip, desc
In this class author use the objects of the Person class(name and lastName)

**Employee**: Represent the employees of the library.
Attributes: officeHours
Employee, being a person, also uses objects from the Person class.

**Client**: Represents a client of the application.
Attributes: idClient, promotion
Client, in addition to objects from the Person class, also includes objects from the Promotion class, which are optional since a client may not always have promotions.


**Book**: Details about a book and its relationship with author and client.
Attributes: title, genre, author, client
The Book class utilizes the Author class and the optional Client class because a book may or may not be occupied by a client.

**Magazine**: Manages membership levels for clients.
Attributes: type, number


**Person**: Base class for authors and clients, contains shared attributes.
Attributes: first name, last name
Objects from the Person class are used in both Client and Employee, as well as in Author.

**Library**: This class represents the categorization of each book into its respective genre, utilizing a library as a repository for the books.
Atributes: numLib, books[] and manager
The Library class creates a 'manager' employee for obtaining information about the branch manager of the library.

**Promotion**: Details the promotions within the bookstore, including the promotion name and the discount. 
Atributer: nameProm, percentDis
Objects from the Promotion class are used in the Client class so that, when receiving information about the client, it checks whether the client has any promotions from the library.

This project is ideal for learning and practicing backend development with TypeScript and Express, as well as designing MongoDB databases using mongoose.

