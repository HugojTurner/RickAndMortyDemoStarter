# Rick and Morty Svelte Demo
### Introduction
This demo will walk you through the process of creating a Svelte app that displays characters from the show as cards using an API and create and save your own planets with a form using a connection to a MySql database.
### What you'll learn by the end of the demo
* Svelte components
* Svelte folder structure
* Layouts
* Client-side vs server-side Svelte pages
* Folder routing
* Server page functions and form actions
* Stores
* Reactivity
* Path parameters and dynamic routing
* Form validation and enhance
* Database connection
### Prerequisites
* Visual Studio Code.
* MySql Database installed.
* Download starter.
* Have Svelte for VS Code extension installed.
* Run ```rickandmortydb.sql``` script.
* A user in MySql with the following
    * user: ```dev```
    * password: ```Dev1234!```
### Helpful Resources
* Svelte official documentation [here](https://kit.svelte.dev/docs).
* Bootstrap 5.3 documentation [here](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
* Bootstrap Icons documentation [here](https://icons.getbootstrap.com/).
* Rick and Morty API [here](https://rickandmortyapi.com/documentation/#rest).
* Characters URL ```https://rickandmortyapi.com/api/character```
* Locations URL ```https://rickandmortyapi.com/api/location```
### Helpful CLI Commands
* To create a new Svelte project ```npm create svelte@latest helloworld```
* To run development server ```npm run dev```
* To run development server and automatically open browser ```npm run dev -- --open```
## Part 1 - Retrieve data from API and display to the view
## Part 2 - Create planets with form actions and save to database
## Exercise
Taking what you learned so far, try and create a new route (page) that show the locations from the the Rick and Morty API. You should create a new CardLocations component and pass in the location from the data you get back.

