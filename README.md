**App Summary**
Snapshot is a website for browsing curated photos.

#Technology
Built in React using Pexels API

#Features

- Users can see an initial set of curated photos on the home screen
- Users are able to access the the photographer’s name and url for every photo
- Users can paginate the list of curated photos
- Users can use a text input to search for photos that match their interests
- Users can see the results of a search in the photo viewing area
- Users can paginate search results if needed

#Environment Variables
To run this application, you will need to secure a Pexels API key and add the following variable to your .env file

REACT_APP_API_KEY=YOUR_API_KEY

To get a key:

1. Create a free Pexels account at https://www.pexels.com/onboarding
2. Click “I want to download”
3. Complete the form. Make sure you use a valid email address
4. Confirm your email
5. Visit the Image & Video API section of your account
6. Provide a description and a URL. These can be fake, feel free to use the examples below or
   write your own
7. Example description: “I’m using the API for programming practice projects”
   Example URL: https://example.com

#Installation Steps

1. Clone the project repository
2. Install related dependencies with command 'npm install'
3. Create an account and retrieve an API key for Pexel API (see detailed steps in Environment Variables)
4. Create .env file at the root of the project
5. Save your API key to a variable called REACT_APP_API_KEY in your .env
6. Run command 'npm start' in your terminal to view project in your browser
