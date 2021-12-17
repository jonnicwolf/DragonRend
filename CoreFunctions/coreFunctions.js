const { 
  keyInYN,
  question} = require("readline-sync");

let nameInput = question("Enter your name: ");

console.log(`Hello ${nameInput}!  Welcome to DragonRend.`);

//all random events are based of this rng 'dice'
const dice = (nat, min) => {
  return Math.floor(Math.random() * nat + min);
};

//Damage calculator
const dmg = (herostat, enemy) => {
  const d6Roll = dice(6, 1);
  const critRoll = dice(3, 1);

  let atk, level;
  [atk, level] = [herostat.attack, herostat.level];
  const enemyDef = enemy.defense;

  const damage = Math.ceil(
    (((2 * level + 10) / 50) * (atk / enemyDef) + 2) * d6Roll
  );

  const critical = Math.ceil(
    (((2 * level + 10) / 50) * (atk / enemyDef) + 2) * critRoll
  );

  if (d6Roll !== 1 && d6Roll !== 6) {
    // console.log('+--------------------------------------------------------------------------------------+')
    console.log("Normal hit.");
    return damage;
  } 
  else if (d6Roll === 6) {
    let critDmg = damage + critical;
    console.log("Critical hit!");
    return critDmg;
  }
   else if (d6Roll === 1) {
    console.log(`Your attack missed!`);
    return 0;
  }
};

//Enemy damage calculator
const enemyDmg = (herostat, enemy) => {
  const d6 = dice(6, 1);
  const d2 = dice(2, 1);
  const heroDef = herostat.defense;

  let enemyAtk, enemyLvl;
  [enemyAtk, enemyLvl] = [enemy.attack, enemy.level];
  // console.log(enemyAtk, enemyLvl)
  let damage = Math.ceil(
    (((2 * enemyLvl + 10) / 50) * (enemyAtk / heroDef) + 2) * d6
  );
  // console.log(damage)
  return d2 === 2 ? damage : 0;
};

//
const fight = (herostat, enemy, risk, experience) => {
  const victoryRes = [
      ` ||=====\ //=====+=     ======   ||=====\\  `,
      ` ||  -   | ||            //\\\    ||  -   | `,
      ` ||  |   | ||---|       //  \\\   ||  |   | `,
      ` ||  1   | ||          //====\\\  ||  1   | `,
      ` ||=====// ||======\\ ===    ====||======// `
    ]
  const deathRes = [
      `==       ==  ======== ||     || |  `,
      `||  ___  ||     ||    || |   || |  `,
      `||   |   ||     ||    ||  |  || |  `,
      `||   1   ||     ||    ||   |||| |  `,
      ` |==|+|==//  ======*= ||    ||| O  `,
    ]
  while (herostat.health > 0 || enemy.health > 0) {
    const options = ["Attack", "Dodge", "Special Attack", "Run"];
    let index = keyInSelect(options, `What's your move?`);

    switch (options[index]){
      case 0:
          const damage = dmg(herostat, enemy);
          enemy.health = enemy.health - damage;
          console.log(
              `Hero did ${damage} damage to the enemy \n
              ${herostat.health}❤️ \n${enemy.health}🖤`
          );
          if (hero.health < 1) {
              showDialogue(deathRes)            
              start();
          } else if (enemy.health < 1) {
              showDialogue(victoryRes)
          };
          break;
      case 1:        
      //lets move dodge to a global variable in fight()'s scope
          let dodge = dodge(risk);
          break;
      case 2: 
          //Special atk
          hero.level > 3
              ? true
              : console.log(`Do you even lift? Your level is too low, scrub`)
              break;
      case 3: 
          const coin = dice(2,1);
          coin === 2
              ? `Two heads are indeed better than one but a true hero never runs, the Heads beyond the skies have`
              : hero.health - 1
              break;
      default:
          quitGame();
    }
    const enDamage = enemyDmg(herostat, enemy);
    hero.health = hero.health - enDamage;

    console.log(
      `Enemy did ${enDamage} damage to our hero \nHP❤️ ${hero.health} \nHP🖤 ${enemy.health}`
    );
    if (hero.health < 1) {
      showDialogue(deathRes)
      start();
    } else if (enemy.health < 1) {
      showDialogue(victoryRes);
    }
  }
};

const quitGame = () => {
  let restart = keyInYN(
    "To the well-organised mind, death is but the next great adventure. Restart?"
  );
  console.log("Til next time " + nameInput);
  if (restart === true) {
    start();
  } else if (restart === false) {
    console.log("Til next time " + nameInput);
    process.exit();
  }
};

const showDialogue = (dialogue,callback, callback1) => {
    let i = 0;
    const len = dialogue.length;  
    const timer = setInterval(() => { 
      console.log(dialogue[i]);
        i++;
        if (i === len){
          clearInterval(timer)
          callback()
          // callback1()
        }
    }, 250);
};

const health = (passingValue, reward, risk) => {
  let roll = dice(6, 1);
  switch (roll){
    case roll >= passingValue:
      console.log(`Hero gains ${reward}💛`);
      hero.health += reward;
      break;
    case roll < passingValue:
      console.log(`+--------------------------------------------------------------------------------------+`)
      console.log(`Hero takes ${risk}🖤`);
      hero.health =- risk;
      break;
    default: 
      console.log(`Whoa something went really wrong here`);
  };
};

module.exports = {
    dice,
    dmg,
    fight,
    enemyDmg,
    nameInput,
    showDialogue,
    quitGame
}