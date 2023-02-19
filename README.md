# 📒 Note-Taker

## Description

simple note-taking application using Express.js. It allows clients to create and save notes by sending a POST request to /api/notes, and delete notes by sending a DELETE request to /api/notes/:id, where :id is the ID of the note to be deleted. Clients can also retrieve a list of all notes by sending a GET request to /api/notes.

The implementation uses a db.json file to store the notes. When a client creates a new note, the note is added to the db.json file with a unique ID generated using the uuidv4 library. When a client deletes a note, the note with the corresponding ID is removed from the db.json file. When a client retrieves a list of notes, the notes are read from the db.json file and returned in JSON format.

Overall, this implementation provides a simple way for clients to manage notes through basic CRUD (Create, Read, Update, Delete) operations.

## Technologies Used:

1. Node.js
2. JavaScript
3. Express.js
4. CSS/Bootstrap
5. uuid

## installiation

1. Make sure that you have Node.js installed on your machine. You can download and install it from the official website: https://nodejs.org/en/download/

2.Create a new directory for your application and navigate into it using a command prompt or terminal.

3.Run the following command to initialize a new Node.js project and create a package.json file:
npm init -y

4. Install the required dependencies (express, path, fs, and uuid) by running the following command:npm install express path fs uuid

5.Create a db directory in the root of your project, and create a db.json file inside it.

6.Copy the code for the note-taking application into a new file (e.g. app.js) in the root of your project.

7. Start the application by running the following command: node app.js

8. The application should now be running and listening for requests on port 3001. You can access it in your web browser at http://localhost:3001.

# Usage

1. To create a new note, click on the "Get Started" button on the landing page. This will take you to the note-taking page.

2. On the note-taking page, you can enter a title and text for your note in the appropriate input fields.

3. Once you have entered the title and text for your note, click on the save icon (a floppy disk icon) in the top right corner of the page. This will save your note to the application.

4. To view all of your saved notes, click on the note icon (a list icon) in the top right corner of the page. This will take you to the notes page, where you can see a list of all the notes you have created.

5. To view the contents of a particular note, click on its title in the notes list. This will display the note text on the page.

6. To delete a note, click on the red trash can icon next to its title in the notes list. This will remove the note from the application.

# Video

https://www.youtube.com/watch?v=LdXplx1rzVo

# Contact-Details

1. linkedin: ://www.linkedin.com/in/kayhan-mamak-5423b4262/
2. Github: https://github.com/byunn90
3. Email: Kayhan_mamak@hotmail.com
