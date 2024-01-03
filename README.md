  #
 PracticaMDB
This backend practice project utilizes various technologies to build a simple application:

dotenv: Loads environment variables for application configuration.


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
The project is organized around classes that represent entities related to the management of an application. Below is a brief description of each class and its associated components:


***Classes***

**Author**: Represents an author of books.

Controllers: AuthorController
Routes: authorRoutes
Attributes: rip, desc

**Employee**: Represent the employees of the library.
Controllers: EmployeeController
Routes: employeeRoutes
Attributes: officeHours


**Client**: Represents a client of the application.
Controllers: ClientController
Routes: clientRoutes
Attributes: idClient, promotion


**Book**: Details about a book and its relationship with author and client.
Controllers: BookController
Routes: bookRoutes
Attributes: title, genre, author, client


**Membership**: Manages membership levels for clients.
Controllers: MembershipController
Routes: membershipRoutes
Attributes: client, level


**Person**: Base class for authors and clients, contains shared attributes.
Controllers: PersonController
Routes: personRoutes
Attributes: first name, last name

**Library**: This class represents the categorization of each book into its respective genre, utilizing a library as a repository for the books.
Controllers: libraryController
Routes: libraryRouter
Atributes: numLib, books and manager

**Promotion**: Details the promotions within the bookstore, including the promotion name and the discount. 
Controllers: promotionController
Routes: promotionRouter
Atributer: nameProm, percentDis

This project is ideal for learning and practicing backend development with TypeScript and Express, as well as designing MongoDB databases using mongoose.

