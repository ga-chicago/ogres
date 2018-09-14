/*
4. Ogres
Let's say you want to make an adventure where an adventurer and an ogre fight each other.

Spend a few minutes reading this question a couple times and thinking and pseudocoding before you actually write the code.

—> Write a very small program that will simulate a battle between your adventurer and an ogre.

The battle should play out automatically.
The ogre and adventurer will take turns attacking each other, and statistics will be shown after each attack.
The ogre's attacks should have random damage value, but the adventurer should always attack with the same value.
Whenever someone's hitpoints go below zero, the other person wins the battle.
Create objects and have them interact. Remember, you are modeling things from real life. So just like the characters you are modeling, your objects will have properties (qualities) and methods (things they can do).

how would you define your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?
how would you define an ogre? Your ogre will want hitpoints, right? (Right.)
How could you implement the "attack" functionalities? Should you do this by adding methods to the objects? Should those methods take parameters?
Use console.log() to show each attack, how many hitpoints the person being attacked loses, the updated stats for the ogre and the adventurer. At the end log the winner.
You can use a loop to make the game play out. (What kind of loop? How and when will it stop?)
Would it be helpful to create another object to control and keep track of other data that isn't specifically about the ogre or the adventurer? Like a game object maybe?
Doing this efficiently requires planning. If you just started coding immediately without thinking through what you're trying to do and planning, then you're doing it wrong. Timewise, programming is 75-90% planning, and 10-25% actually typing code.

*/

console.log("ogres")


const ogre = {
    name: "oof",
    hitpoints: 100,
    attack: function () {
        // hurt the adventurer.  how?

        // generate random value 

        // reduce adv's hp by that value

        // say what happened
    }
}

const adventurer = {
    name: "reuben",
    hitpoints: 100,
    attack: function () {
        // reduce the ogre hitpoints by "attackPower"
        ogre.hitpoints -= 10;
        // say what happened

    }
}

adventurer.attack();
console.log(ogre);
console.log(adventurer);




// make the rounds happen automatically
    // 




