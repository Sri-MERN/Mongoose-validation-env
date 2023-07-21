# Mongoose-validation-env
Validation crud on mongoose and adding env

Mongoose crud with validation and env  - File structure is very important to understand the concepts,

1.create root index.js then new folder routes withinit two new files,as index.js and user.js,

2.Then packages required are npm i Mongoose,express,mongodb,dotenv

3.configure the db within newfile as dbconfig.js then db name and url, add env file withinit assign port,
  and our dbUrl,

4.For validation add new folder schema then fileas UserSchema.js within it add required validation regux,
   we can also set our own validation

(Things to note in all required places add Mongoose,route properly and crud on Mongoose slight different
from mongodb previous verify express-mongo in repo.)

 *In post man for local host
* For get all user - http://localhost:8000
* Add new user     - http://localhost:8000
* Get user by id   - http://localhost:8000:id   
* Edit user by id  - http://localhost:8000:id
* Delete user by id- http://localhost:8000:id
* For id based operations set pathvariables in postman ,this for localhost within our system

* In render Build command - npm i --force and add variable db name and db url
* global host https: https://mongoose-validate.onrender.com
* For get all user - https://mongoose-validate.onrender.com
* Add new user     - https://mongoose-validate.onrender.com
* Get user by id   - https://mongoose-validate.onrender.com/:id
* Edit user by id  - https://mongoose-validate.onrender.com/:id
* Delete user by id- https://mongoose-validate.onrender.com/:id
