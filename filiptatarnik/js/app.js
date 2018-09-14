////------------Apply - Ogres -----------//

//create adventurer object
//create ogre object
//give both adventurer  and ogre object properties
//give both adventurer and ogre methods

//created ogre object and gave him two properties
const ogre = {
	name: 'oof',
	hitpoints: 100,
	oofAttack () {
		const clubDamage = Math.floor(Math.random()*10)
		// what does this need to do?
		// attack hero
		// hero's hitpoints should decrease
		console.log(`oof attacked for ${clubDamage} hit points against our hero`);
		console.log(`heros hitpoints is now ${hero.hitpoints - clubDamage}`);
	}
};

console.log(ogre);

//created a hero object and gave him two properties
const hero = {
	name: 'fil',
	hitpoints: 100,
	heroAttack () {
		const heroDamage = 10;
		// what does this need to do?
		// attack ogre
		// ogre's hitpoints should decrease
		console.log(`hero attacked for ${heroDamage} hitpoints!`);
		console.log(`ogre's hitpoints is now ${ogre.hitpoints - heroDamage}`);
	}
};
console.log(hero);

// const beginBattle = 


//make a for loop that randomly chooses which method to use, console logs the hp of the object.
//check if hp === 0, if not, run loop again
//if hp === 0  you die && other hero wins
//

//create a varible that checks whose turn it is
// const checkTurn;
// //make a for loop to see 
// for (i = 0;i<hero.hitpoints; i++){
// 	console.log("ogre at");
// }
	//we need a loop that will loop through both methods and console log each attack
	//we need to make a for loop that checks both objects hitpoints property
	//if the hitpoints are equal to 0, game over
	// if the hitpoints aren't 0, next turn
	// 


