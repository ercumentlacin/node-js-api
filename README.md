# Node JS API

My first rest-api that I have created using Node JS with Express and postgreSQL.

## Api Endpoints

https://nodejs-first-api-ercument.herokuapp.com/

| Method | Endpoints     | Description                                                                                                                     |
| -----: | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
|    GET | `/users`      | Returns all users in the database as an array. Returns an empty array if there are no users in the system.                      |
|    GET | `/users/:id`  | Returns a user object that matches the given `id` value. Returns an error object when there is no match.                        |
|   POST | `/users`      | User login to the database is done here. The `name` field is required. Returns the entered user object if login was successful. |
|    PUT | `/users/:id`  | Editing of users in the database is done here. Returns the updated user object if changes to `name` were successful.            |
| DELETE | `/users/:id/` | Deletion of users in the database is done here. HTTP status code `204` is returned when the deletion is successful.             |
