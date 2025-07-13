### Run the server

    node index.js

### API Endpoints

   | Method	 |Endpoint	        | Description       |
   |---------|------------------|------------------ |
   | GET	 |/api/users	    | Get all users     |
   | GET	 |/api/users/:id	| Get a user by ID  |
   | POST	 |/api/users	    | Create a new user |
   | PUT	 |/api/users/:id	| Update user by ID |
   | DELETE	 |/api/users/:id	| Delete user by ID |

   #### Example JSON for POST:
   
        {
        "name": "John Doe",
        "email": "john@example.com",
        "age": 28
        }

