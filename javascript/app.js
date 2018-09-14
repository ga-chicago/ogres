const ogre = {
	name: 'Bob the Ogre',
	enemy: '',
	HP: 94,
	AP: function() {
		return Math.floor(Math.random()*(18 + 1));
	},
	attack: function() {
		// Attack who?
		// if ogre.enemy
		// How much damage?
		// Attack reduces enemy's HP by my random AP
		let randAP = ogre.AP();
		ogre.enemy.HP = ogre.enemy.HP - randAP;
		return `${ogre.name} has inflicted ${randAP}DMG to ${ogre.enemy.name}. ${ogre.enemy.name} now has ${ogre.enemy.HP}HP left!`;
	}
};

const dude = {
	name: 'Sir Maximus the Third of His Holy Name',
	enemy: '',
	HP: 57,
	AP: 16,
	attack: function() {
		dude.enemy.HP = dude.enemy.HP - dude.AP;
		return `${dude.name} has inflicted ${dude.AP}DMG to ${dude.enemy.name}. ${dude.enemy.name} now has ${dude.enemy.HP}HP left!`;
	}
};

// FIGHT
const fight = () => {
	// dude is a buttface, he starts a fight with poor Bob who just wants to finish reading financial section of the Washinton Post
	console.log(`${dude.name} says: ${ogre.name}'s my enemy! I don't know why but he is!`);
	dude.enemy = ogre;
	// Dude becomes Bob's enemy
	console.log(`${ogre.name} says: Whu.... What now?`);
	ogre.enemy = dude;

	// BEGIN ROUND
	let round = 0;
	// WHILE both HP > 0 run loop
	while ((ogre.HP > 0) && (dude.HP > 0)) {

		console.log(`Round ${round}!`);

		console.log(`Ogre has ${dude.enemy.HP}HP`);
		console.log(`Dude has ${ogre.enemy.HP}HP`);
	}
	if (dude.enemy.HP > 0) {
		// dude inflicts damage to Bob
		console.log(dude.attack());
	} else {
		return `${dude.name} says: Ah. Yes. Another head to add to my collection.`;
	}	

	if (ogre.enemy.HP > 0) {
		// OGRE RETALIATES
		console.log(ogre.attack());;
	} else {
		return `${ogre.name} says: Finally. Can I read in peace now?`;
	}
	}
}

console.log(fight());
