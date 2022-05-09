# Mini Twitter



This Project is a Simple ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Bootstrap along with React
5. Using Basic Routing in React

## Application functionality 

1. Ability to tweet
2. Ability to search a person (using his handle to simplify things) and follow
3. All tweets of the person one follows should come in feed
4. Registration/Authentication mechanism
5. Ability to search tweets
6. Ability to hashtag tweets and search using that


## UI Screenshots

![Screenshot 2022-05-10 at 2 27 18 AM](https://user-images.githubusercontent.com/16134007/167497268-05583dd5-ecdd-4520-9c4c-111f859ccade.png)

![Screenshot 2022-05-09 at 9 57 28 PM](https://user-images.githubusercontent.com/16134007/167497688-0bb851a9-b791-47cc-8dd0-febfce9da45b.png)

## Live Application URL

[Mini Twittwr - Live DEMO](http://65.0.71.17:3000/)

Click on the link to see the application


## Tools
Key tools used in this React project are:

| Tool             | Description   |
| :-------------:|--------------|
| [React](http://facebook.github.io/react/index.html) | A JavaScript library for building user interfaces |
| [Bootstrap](http://getbootstrap.com/) | Build responsive, mobile-first projects on the web with the world's most popular front-end component library |

### Project dependencies

just install [Node.js](https://nodejs.org/en/) in your system

## Cloning and Running the Application in local

Clone the project into local

```bash
git clone https://github.com/pratikjoil999/mini-twitter-ui.git
```

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

### The Application Runs on **localhost:3000**


## Application design

#### Components

1. **Login And Register** Component : This Components are use to register and login in to mini twitter application

2. **Dashboard** Component : This Component is basically home page of mini twitter , this page basically show all the tweets enter by user and tweet by person he/she follows. User can aslo search user follow them and able to tweet aslo. This Component is the Child Component of *Customers* Component.

3. **Tweet Search** Component : This Component is use to search the tweet of users

4. **Tweet Table** Component : This Component is use to disply all the user tweets. This Component is the Child Component of *Dashboard and Tweet Search* Component.

#### HTTP client

**Fetch** is used to make HTTP Calls

#### URL

The application has just one url /customerlist which ties to *Customers* Component

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap


## Author

[Pratik Joil](https://www.linkedin.com/in/pratik-joil/)

