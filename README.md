( Simple APIS data fetching project using react js )

Project link => https://shadyagmy.github.io/APIS-data-fetching/

project explanation : 
- I connect my react app with two apis link :  https://jsonplaceholder.typicode.com/users and https://jsonplaceholder.typicode.com/posts
through fetch method which run in componentDidMount() function after the App.js has rendered.
- After that i update the state of App.js to contain the two appis as two array of objects called users and posts.
- Then in the render method i map through each array (users and posts) and in each iteration i called the relative component with passsing the props to it to render the components in same order of map method iteration.

There is two branches for this project one for building and editing in the project and the other is for the deploying on a server  

