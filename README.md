## Node-Story: Story Voice Recognition
This project is a Node.js-based application for story voice recognition. Below are the setup instructions, dependencies, and configuration steps.

## Dependencies
Node.js: Version 16.13.0
MySQL: Version 5.7
Running the Project
Install Dependencies: Make sure you have Node.js and MySQL installed.
Run the Development Server: Use the command
## npm run dev ##
to start the server.
Access the Application: The project can be accessed at http://localhost:8111/login.html.



Update Local Database Settings:
- Open db/db.js.
- Modify the dbConfig object with your local database  settings:
javascript


var dbConfig = {
  host: 'localhost',
  
  port: '3306',
  
  user: 'root', // Modify with your database username
  
  password: '', // Modify with your database password
  
  database: 'story', // Modify with your database name
};

## Import the Database Schema:
Use the storylist.sql file to create the necessary tables and schema in your local database. This can typically be done using a MySQL client or command line:

mysql -u root -p story < path/to/storylist.sql


Modifying the Application
Public HTML Configuration:
Open public/storydetail.html.

<script>
  
    // your desired model API key
  
    var APPID = "xxx";
  
    var API_SECRET = "xxx";
  
    var API_KEY = "xxx";
</script>

## Database Tables
Database Fields: For detailed information on the fields of each database table, refer to db/table.js.
