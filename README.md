# tips-and-feedback

Homework 12: Tips and Feedback
Description
This project is an Express.js application designed to manage user tips and feedback. The goal of this assignment was to extend the functionality of an existing codebase by implementing custom routing, error handling, and diagnostic logging. Key features include a wildcard route for handling 404 errors, a diagnostic API for tracking form validation failures, and dynamic rendering of feedback stored in a JSON database.

User Stories
As a developer, I want to be able to add routes to an existing application.

As a developer, I want to serve up a custom 404 page when the requested resource doesn't exist.

As a developer, I want to use the given route to get information to display on a page.

Acceptance Criteria
Routing & Navigation

[ ] Created a wildcard route (*) in server.js that serves a custom 404.html page for any undefined paths.

[ ] Developed a custom 404.html page to provide a better user experience for broken links.

[ ] Successfully tested the wildcard route by visiting non-existent paths (e.g., http://localhost:3001/test).

Diagnostics API

[ ] Created a POST route for /api/diagnostics to store information regarding invalid form submissions.

[ ] Created a GET route for /api/diagnostics that retrieves and returns the content of db/diagnostics.json.

[ ] Implemented a front-end fetch() request that triggers a POST to the diagnostics endpoint whenever a user submits an invalid form.

[ ] Verified the /api/diagnostics endpoint using Insomnia.

Data Display

[ ] Integrated logic to retrieve and display information stored in feedback.json on the feedback.html page, following the existing pattern used for tips on the homepage.

Installation
Clone the repository to your local machine.

Navigate to the project directory in your terminal.

Install the necessary dependencies:

Bash
npm install
Usage
Start the server:

Bash
npm start
Open your browser and navigate to http://localhost:3001.

Test 404: Enter a random URL (e.g., /nonsense) to see the custom 404 page.

Diagnostics: Attempt to submit an invalid form to trigger a diagnostic log entry.

Feedback: View the feedback page to see data pulled dynamically from the database.

Technologies Used
Node.js: JavaScript runtime environment.

Express.js: Web framework for routing and middleware.

JavaScript (ES6): Logic and front-end fetch requests.

HTML/CSS: Structure and styling for the feedback and 404 pages.

JSON: Used as a persistent data store for diagnostics and feedback.
