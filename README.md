# Assignment 2

## _Steps to run the project_

1. Go to the project in cmd and run `npm install` to install all the dependencies.

2. You can run `npm install --force` to forcefully install all the dependencies if you find any error installing the dependent packages.

3. Then copy the **.env.example** file and rename it to **.env** and fill out all the environment variables like below:

```
PORT=[Port you want to run your project] //example: 5000

DB_USER= [Your mongodb username] //example: root

DB_PASS=[Your mongodb password for the username] //example: 123456

DB_NAME=[Your mongodb database name for the project] //example: assignment2

DB_HOST=[Your mongodb cluster and projectid found in mongoatlas connect string after @ ] //example: assignment2.mz6y1wn
```

4. Now run the command below
   `npm run dev`
   and your project will on the mentioned port in env like
   `localhost:500`
