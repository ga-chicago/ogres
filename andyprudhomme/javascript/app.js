// Battle between Ogre and adventurer
// Properties for each -- hitpoints, attack (use a method), name
// Before we start the program, let's just briefly define the two objects
// Make hitpoints subtracted random??? Math.floor(Math.random()*Something)
const ogre = {
	name: "Evil Shrek",
	hitPoints: 500,
	bite: function() {
// what do we want to happen here? we definitely want adventurer hitpoints to decrease.
		adventurer.hitPoints -= Math.floor(Math.random()*100);
		console.log(`Oh no! ${ogre.name} bit ${adventurer.name}, and ${adventurer.name} only has ${adventurer.hitPoints} health left!!!`);
	}
}

const adventurer = {
	name: "Ron Swanson",
	hitPoints: 500,
	chokeHold: function() {
		ogre.hitPoints -= Math.floor(Math.random()*100);
		console.log(`Nice chokehold, ${adventurer.name}!!!!!`);
		console.log(`${ogre.name} only has ${ogre.hitPoints} health left. Kill him!!!!`)
	}
}

// const battleRoyale = () => {
	// Want a loop that will run 3 times until Evil Shrek dies. Once Evil Shrek dies, we want to announce that Ron has won the game, and that the game is over
	// Each time the loop runs, we should call adventurer.chokeHold followed by ogre.bite, and then a message "On to round i!"
// 		while(ogre.hitPoints > 0 && adventurer.hitPoints > 0) {
// 			let i = 1;
// 		adventurer.chokeHold();
// 		ogre.bite();
// 		console.log(`The score after Round ${i} is: ${adventurer.name}: ${adventurer.hitPoints}, ${ogre.name}: ${ogre.hitPoints}`);
// 		console.log(`On to the next round!`);
// 		i++;
// } 
//  console.log("GAME OVER");
// };

const battleRoyale = () => {
	// Want a loop that will run until one of themdies. Once Evil Shrek dies, we want to announce that Ron has won the game, and that the game is over, AND VICE VERSA..because I'm randomizing it
	// Each time the loop runs, we should call adventurer.chokeHold followed by ogre.bite, and then a message with the score
	// Also type a message with the round? or on to next round
	// for loop or while loop
	// use while loop in order to make the battle responsive to HP left...
	// How do I tweak this to never return a negative value for HP??? maybe instead of subtracting hitpoints within the methods, I can create a damage variable that removes HP. Though that would still lead to the same issue within the while loop
		while(ogre.hitPoints > 0 && adventurer.hitPoints > 0) {
		adventurer.chokeHold();
		ogre.bite();
		console.log(`The score is: ${adventurer.name}: ${adventurer.hitPoints}, ${ogre.name}: ${ogre.hitPoints}`);
		console.log(`On to the next round!`);
} if(adventurer.hitPoints > 0) {
 console.log(`GAME OVER, ${adventurer.name} is the winner!`);
} else {
	console.log(`GAME OVER, ${ogre.name} ate ${adventurer.name} #sadface`)
}
};

battleRoyale();