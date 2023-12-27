 #PracticaMDB
This backend practice project utilizes various technologies to build a simple application:

dotenv: Loads environment variables for application configuration.
ts-node: Executes TypeScript files directly without the need for transpilation.
body-parser: Middleware to facilitate data parsing in requests.
express: Web framework for backend application development.
TypeScript: Optional statically typed superset of JavaScript.
Additionally, dev dependencies are used to enhance the development experience with TypeScript:

@types-express: TypeScript types for express.
@types-mongoose: TypeScript types for mongoose.

How to Set Up the Project
Before starting the server, make sure you have MongoDB installed and running. You can start the MongoDB server with the following command if you are using Homebrew:

bash
Copy code
brew services start mongodb-community@7.0
After cloning the repository, you can start the services using the following command:

bash
npm start
This command will start the server with the version specified in the package.json file.

Project Structure
The project is organized around classes that represent entities related to the management of an application. Below is a brief description of each class and its associated components:

Classes
Author: Represents an author of books.

Controllers: AuthorController
Routes: authorRoutes
Repository: authorRepository
Attributes: rip, desc

Cafeteria: Manages orders and discounts in a cafe.
Controllers: CafeteriaController
Routes: cafeteriaRoutes
Repository: cafeteriaRepository
Attributes: order, VIP discount, account

Client: Represents a client of the application.
Controllers: ClientController
Routes: clientRoutes
Repository: clientRepository
Attributes: ID card, address, VIP status

Book: Details about a book and its relationship with author and client.
Controllers: BookController
Routes: bookRoutes
Repository: bookRepository
Attributes: title, genre, author, client

Membership: Manages membership levels for clients.
Controllers: MembershipController
Routes: membershipRoutes
Repository: membershipRepository
Attributes: client, level
Person: Base class for authors and clients, contains shared attributes.

Controllers: PersonController
Routes: personRoutes
Repository: personRepository
Attributes: first name, last name
Information Stored in Classes
Authors: Stores authors with attributes such as RIP (Author Identification Record) and description.

[WORK IN PROGRESS, CREATING MORE CLASSES AND REFINING EXISTING ONES]

Clients: Saves information about clients, including ID card, address, and VIP status.

Books: Records information about books, such as title, genre, author, and associated client.

Membership: Stores details about membership levels for clients.

Persons: Base class containing common attributes for authors and clients, such as first name and last name.

This project is ideal for learning and practicing backend development with TypeScript and Express, as well as designing MongoDB databases using mongoose.
