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

**Cafeteria**: Manages orders and discounts in a cafe.
Controllers: CafeteriaController
Routes: cafeteriaRoutes
Attributes: order, VIP discount, account


**Client**: Represents a client of the application.
Controllers: ClientController
Routes: clientRoutes
Attributes: ID card, address, VIP status


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
Information Stored in Classes
Authors: Stores authors with attributes such as RIP (Author Identification Record) and description.

**Lounge**: This class was created so that reading sessions have a lounge, with the name of the lounge, its size, and the name of the lounge.
Controllers: controllerLounge
Routes: loungeRouter
Atributes: loungeNumber, size and loungeName

**ReadinSession**:This class was created to add reading sessions to the library; it is related to the lounge class to clarify in which lounge the session takes place.
Controllers: controllerReadingSession
Routes: readingSessionRouter
Atributer: book, date and lounge

_Clients_: Saves information about clients, including ID card, address, and VIP status.

_Books_: Records information about books, such as title, genre, author, and associated client.

_Membership_: Stores details about membership levels for clients.

_Persons_: Base class containing common attributes for authors and clients, such as first name and last name.

_Author_: A class that contains a boolean to check if the book's author is still alive, a description of the author, and how it relates to the person class. It also includes a first and last name.

_Cafeteria_: I added a cafeteria to the library that includes the customer's order and the bill to keep a record of the orders.

_Lounge_: The lounge class to specify in which lounge the reading sessions take place. It includes the name of the lounge, its size, and the name of the lounge itself.

_Reading session_: The reading session class is related to the lounge class, so in addition to containing the book to be read during the session and the date, it also includes the lounge where it will take place.



This project is ideal for learning and practicing backend development with TypeScript and Express, as well as designing MongoDB databases using mongoose.

