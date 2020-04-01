![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Superwars Stage 4

Dustin and Lucus are best friends. They spend their weekends watching superhero series and playing superhero games. One Friday at school Mr.Hooper, their computer science faculty taught them HTML, CSS, and JavaScript. Dustin & Lucus realised they could build super cool super hero stuff using their knowledge. 

The subsequent weekend, they decided to do it. Lucus and Dustin are now all set to build something super cool.

Lucus always loves protagonists like most of us. But Dustin is quite crazy, he likes antagonists. So they decided to collect a bunch of their favorite Super Heroes and Super Villains names along with their pictures. Did they tell you about the game that they are gonna build? 

Okay, let us explain. They are going to facilitate the ultimate war between Super Heroes and Super Villains. As they are new to these technologies, they need a **ProGrad** to help them build this game.

## Learning Goals

After this lesson, you will be able to:

- Create a static Angular application with Angular CLI.
- Build an Angular application with components.
- Use maps and filters in your angular.
- Use class and interface in angular.


## Requirements

- Fork this repo.
- Clone this repo.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a pull request from your master branch to the original repository's master branch.

In the pull request name, add your Prograd id, name, and last name separated by a dash "-".

## Deliverables

You need to generate the starter code and fill it with the necessary code to satisfy the requirements described below.


## Starter Code

To generate the starter code, follow the steps given below

- To create a new application,
    - Open your ubuntu or cmd terminal and execute the following command
      - ```ng new app-name```
      - for example, ng new super-wars
    - To create a new component, execute the command 
      - ``` ng generate component component-name```
      - example, ng generate component contacts
      
## How to run

- To run the project go to your ubuntu terminal or VScode editor
    - open the ubuntu or cmd terminal or inside the vscode editor
    - run the command following command
    - ```ng serve --open or ng serve -o```


### Progression 1: Rethink and reuse

* Right click src folder and create a folder called supers and create an interface called SuperInterface with the following parameters
```
export interface SuperInterface{
    name: string;
}
```
* Inside the supers folder create superlist.ts and add the below code
```
import { HeroListInterface } from '../heros/herosInterface';

export const Heros : HeroListInterface[]=[
 {   name : "Spiderman"},
  {  name : "Captain America"},
  {  name : "Wonderwoman"},
  {  name : "Popcorn"},
  {  name : "Gemwoman"},
  {  name : "Bolt"},
  {  name : "Antwoman"},
  {  name : "Mask"},
  {  name : "Tiger"},
  {  name : "Captain"},
  {  name : "Catwoman"},
  {  name : "Fish"},
  {  name : "Hulk"},
  {  name : "Ninja"},
  {  name : "Black Cat"},
  {  name : "Volverine"},
  { name :  "Thor"},
  {  name : "Slayer"},
  {  name : "Vader"},
  {  name : "Slingo"}
];
```
* import the list into app.component.ts and return a list of supers object like the snippet given below
    ```
    [
        {
            id:1,
            name:"Super Man",
            strength:100,
            img:"images/hero-1.png",
            type:"hero|villain"
        }
    ]
    ```

### Progression 2: Make it subtle

Dustin and Lucus want to display the players. So help them by creating a method `viewPlayers()`, to accumulate HTML template as below and _return an HTML element_.
```
<div class="player" data-id="${players[i].id}">
    <img src="${players[i].image}">
    <div class="name">${players[i].name}</div>
    <div class="strength">${players[i].strength}</div>
</div>
```

### Progression 3: The Superwar

To begin the war there should be players, we can generate players by creating an object for the class `Superwars`, which should use `map` array method to loop through passed constant and _return `Player` Objects_. 

## Expected Output

![Superwars]()

Happy Coding ProGrad ❤️
