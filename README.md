# Rest API - Node.js
Rest API using plain node.js. NO DEPENDENCIES.

This API can display the list of persons, which can be updated or deleted
* API deployed @ https://restapi-123.herokuapp.com/

## About the project
This project is entirely made for studies propuses. It has callback hells, lot's of pre ECMA 5 constructs and no framework. 
## How To Run
Download Node.js from the [official  site](https://nodejs.org/en/download/) or from [here](https://github.com/creationix/nvm) (like I did), and run the following at the terminal:

```
node index.js
```
### Project Structure
 * **index.js** : Main project file, it has it initialize all the necessary files.
 * **model/peopledetails.js**:  Contains logic for CRUD operations which uses MongoDb cloud Atlas as database
 * **routes/people.js**: All the routes of the REST api,middleware and necessary CRUD operations performed 

 
### Endpoints 
 

 - **/people/** : 
    - Method: **POST**
      - Description: Create a new user.
      - Body: name, age, hobby

    - Method: **GET**
      - Description: Return a user data.
     

    - Method: **UPDATE**
      - Description: Update the user's fields.
      - Body: name, age, hobby

    - Method: **DELETE**
      - Description: Delete a given user.
      
