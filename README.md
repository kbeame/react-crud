# react-crud
# The Difference Between React and Angular:
The biggest Difference that I have found between React and Angular (aside from Angular having
two way data binding) is that in Angular you must have a lot more content within your HTML file that allows
for the custom elements that you create to display in the DOM. While Angular lazy loads, React only
loads the content that has changed, meaning that on a change it doesn't need to re-load the enture page.
In React you write out HTML elements in the javascript file and render that my pinpointing the DOM that you
want them to display within. There is less content from create directly written in the HTML file.

# How to populate database (while POST isn't working):
Clone down the master branch to your local machine.
Open it in Atom.
In terminal *npm i* to pull down dependencies.
Create a database folder and turn on mongodb by typing:
*mongod --dbpath=./db*
Start both the client and server side servers:
* *nodemon server.js*
* *nodemon app/client_server.js*

### How to POST:
Using Httpie in terminal:
```
http :5555/api/pet name=ringo nickName=star
```

In browser go to http://localhost:5000/ so view my client side app.

### How to lint


## Resources Used:
### Most Useful:
https://egghead.io/lessons/react-react-in-7-minutes
https://facebook.github.io/react/docs/tutorial.html
https://github.com/reactjs/react-tutorial/blob/master/public/scripts/example.js
https://github.com/kbeame/rest_api/blob/angular1/kat/app/index.html (my own rest api)
https://github.com/ktrain/todo-react/blob/master/views/home.html
https://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount

### Other resources used:
https://github.com/sahat/newedenfaces-react/tree/master/public
https://facebook.github.io/react/docs/thinking-in-react.html
https://blog.risingstack.com/using-react-with-webpack-tutorial/
https://www.codementor.io/reactjs/tutorial/react-js-flux-architecture-tutorial
StackOverflow (always)
