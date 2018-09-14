//4. Ogres
const adventurer = {
	name: "Arthur Dent",
	hitpoints: 42,
	attack: function() {
		ogre.hitpoints -= 6;
		return "You dealt 6 damage to " + ogre.name + ". " + ogre.name + " has " + ogre.hitpoints + " hit points remaining.";
	}
}

const ogre = {
	name: "Agrajag",
	hitpoints: 25,
	attack: function() {
		const dmg = Math.round(Math.random()*15);
		adventurer.hitpoints -= dmg;
		return ogre.name + " dealt " + dmg + " damage to you. You have " + adventurer.hitpoints + " hit points remaining.";
	}
}

const introMessage = () => {
	return "You are " + adventurer.name + ", intrepid explorer of space. You encounter a misshapen being that calls itself " + ogre.name + " and seems to know you. A fight commences.";
}

const continuePrompt = () => {
	return "You and " + ogre.name + " stand bloodied but unbroken. If you wish to continue this fight in pursuit of glorious victory, type 'game.run();' and hit 'return'. If you wish to end this senseless violence, simply close your browser window. In either case, shake your head in disappointment at the shambles that the fourth wall has become.";
}

const winMessage = () => {
	return "You have defeated " + ogre.name + "! As a reward, please enjoy this fine Vogon poetry.";
}

const lossMessage = () => {
	return ogre.name + " has defeated you! It may be of some small consolation to know that your importance to the universe was utterly insignificant in the first place.";
}

const mutualDefeatMessage = () => {
	return "You and " + ogre.name + " have slain each other. Please reflect on what a waste of time this has been.";
}

const game = {
	round: 0,
	run: function() {
		if(game.round === 0) {
			console.log(introMessage());
		}
		console.log(adventurer.attack());
		console.log(ogre.attack());
		if(adventurer.hitpoints <= 0 && ogre.hitpoints <= 0) {
			console.log(mutualDefeatMessage());
		} else if(adventurer.hitpoints <= 0) {
			console.log(lossMessage());
		} else if(ogre.hitpoints <= 0) {
			console.log(winMessage());
		} else {
			console.log(continuePrompt());
		}
		game.round++;
	}
}