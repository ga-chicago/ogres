
const ogre = {
		name: 'Shrek the Third',
		hitPoints: 3,
		clubThump: () => {
			
			const clubDamage = (Math.floor(Math.random() * 8)); 
			return clubDamage; //do I need this? it works so don't touch for now

			// console.log(`Unga unga! That club thumb did ${clubDamage} damage to your sheild! Watch out - you've only got ${adventurer.shield - clubDamage} left!`)



		}

//		layers = tktkt
//		clubThump = method () => {
//			generate a random number
//			save as const clubDmg
//			return (adventurer.shield - dmg);
//		console.log('Unga unga! That club thump did ${clubDmg} damage!')
//	} 

};

const adventurer = {
		name: 'Starby Sparklehorse',
		hitPoints: 10,
		swordPoke: 1	

			// console.log(`Huzzah! You've smote of the beast one of his precious layers - only ${ogre.layers - 1} to go!`);

// 		shield= tktkt
//		swordPoke = method () => {
//			const swordDmg = tktk
//			return (ogre.layers - dmg);
//		console.log('Huzzah! You cut away ${swordDmg} layers - just ${ogre.layers} more to go! ')
//	}

};

//ok so now we need a loop to make them fight: 

const readyToRumble = (name1, health1, damage1, name2, health2, damage2) => { 	
		
	const gameOn = (health2 > 0 && health1 > 0);

	while (gameOn === true) { //resyntax this 

		for (i = health2; i > 0; i--) { //calculates the hero's health

			let newHealth2 = health2 - damage1;
		
			console.log(`Unga unga! That club thump did ${damage1} damage! You've only got ${newHealth2} health left!`)

				if (health2 === 0) {
					console.log(`Alas, yer adventurin' days are over. Rest in peace, young ${name2}, and may ye have better luck o' the next world...`)
				} 
					return `adventurer.health = ${newHealth2}`; // this is not doing what I want it to 
		};  

		for (i = health1; i > 0; i--) { //calulates the ogre's health
						
			let newHealth1 = health1 - damage2;

			console.log(`Huzzah! You've smote off of yon beast's precious layers - only ${newHealth1} to go!`)

				if (health1 === 0) {
					console.log(`Avast, ye've smote him to teh core! ${name1} shall be the last o' his line. A'though he were just mindin' his business in yonder field, a beast o' these wilds, so who be the real villain here?`)
				} 
					else return `ogre.health = ${newHealth1}`; // same here
		}
	}
};

// console.log(readyToRumble(ogre.hitPoints, ogre.clubThump(), adventurer.hitPoints, adventurer.swordPoke)); // <=== don't need this anymore

// agh I feel like I'm really close. gonna re-draft below:

//ok fight loop v 2.0: 






console.log(readyToRumble(ogre.name, ogre.hitPoints, ogre.clubThump(), adventurer.name, adventurer.hitPoints, adventurer.swordPoke));