# stacksource-challenge

 A REST api written using Nodejs and Expressjs for StackSource http://careers.stacksource.com/swe/challenge/

# Running the project

 1. Clone the project down onto your machine
 2. Run `npm install`
 3. Run `npm run dev` and you should see it's listening on port 8000 in the console

# Interacting with the application

There are 4 routes defined within the express application

 - **Get** `http://localhost:8000/has/:zip` which will return true or false depending on if the zip you provided is stored in the server zipcode Set.
 - **Post** `http://localhost:8000/insert/:zip` which will insert the provided zip into the server's zipcode Set.
 - **Delete** `http://localhost:8000/delete/:zip` which will delete the provided zip from the server's zipcode Set.
 - **Get** `http://localhost:8000/display` which will return all the zips currently stored in the server and it will group up contiguous zips.
