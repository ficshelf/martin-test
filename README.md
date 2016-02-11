# NEEDS UPDATING
------

#The Challenge: Write a game of Noughts and Crosses.

## Necessary stuff:

+ A game that 2 people can play against one another in the same browser
+ Track the player’s scores: 1 point for a win, 1/2 for a draw.
+ Readme explaining how to set up the application
+ Track your progress in a git repo

## Bonus points:

+ A computer player (extra extra points if it learns from its mistakes and improves its gameplay)
+ Allow 2 players to play against one another on 2 different computers (or 2 different browser windows)
+ A persistent scoreboard tracking the best players across sessions
+ Make it look beautiful
+ Any other features you think would be impressive

Remember that the aim here is to demonstrate how good a coder you are. We don’t want to see a code golf style entry that does all of the above in just 6 lines of code, neither do we want some frameworkless spaghetti code that is ridiculously fast and efficient but would be a nightmare to maintain. It’s true that it’s a small problem, but we want to see well thought out solutions that show you would be comfortable writing reliable and maintainable code for a much larger application.


#Architecture.

I am going to use React, Redux and Meteor.

* **React**

* **Redux**: 

The state of the application is stored in an object tree within a single store.

A single state tree also makes it easier to debug or introspect an application; it also enables us to persist our app’s state in development, for a faster development cycle.
State is read-only

The only way to mutate the state is to emit an action, an object describing what happened.

This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to mutate. Because all mutations are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

Changes are made with pure functions

To specify how the state tree is transformed by actions one writes pure reducers.

Reducers are just pure functions that take the previous state and an action, and return the next state. 

* **Meteor** 
  * user accounts
  * persistence
  * MongoDB pub/sub

And let's make it pretty:

* **Material UI**

#Let's get started

Let's download Meteor and create an empty project

```bash
$ meteor create --release 1.3-modules-beta.6 xoxoxo
$ cd xoxoxo 
$ rm -f *
```

Now, we are going to get React packages from NPM. Before that, we need to make our app into a NPM module. For that, do this:

```bash
# This will create a simple packages.json file inside your app
$ npm init -f
```

Then we can add React and Material UI NPM modules like this:

```bash
$ npm i --save react react-dom
$ npm install --save react-tap-event-plugin@^0.2.0
$ npm install --save material-ui
```

Now install the stable version of Redux:

```bash
$ npm install --save redux
```

Most likely, you’ll also need the React bindings and the developer tools.

```bash
$ npm install --save react-redux
$ npm install --save-dev redux-devtools
```

We also might want to add a few Chrome extensions to help us understand what is going on:

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi "Get React Developer Tools - Chrome Extension")

* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd "Get Redux DevTools Chrome Extension")
 





----------------- CHANGE

Now, let’s use FlowRouter and react-mounter to mount these components to the screen.
First, we need to install FlowRouter like this:

```
$ meteor add kadira:flow-router
```

Then we need to install react-mounter, which we use to mount a component to the page via NPM:

```
$ npm i --save react-mounter
```

After that, we can create a simple route and mount our components.
Let’s create this in a file called: client/routes.jsx.


```javascript
...
```


#For now we have this:

![screenshot](xoxo.png?raw=true "Screenshot 1")

