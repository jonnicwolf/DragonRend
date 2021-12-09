const dice = require(`./dice.js`)
// const statsAPI = require('./characterStats-API.js')

const enemyDmg = (herostat, enemy) => {
  //dice dependencies
  const d6 = dice(6, 1)
  const d2 = dice(2, 1)

  //character dependencies
  const heroDef = herostat.defense
    
  let enemyAtk, enemyLvl;
  [enemyAtk, enemyLvl] = [enemy.attack, enemy.level]
  // console.log(enemyAtk, enemyLvl)
  let damage = Math.ceil(((
    (2 * enemyLvl + 10) / 50) * (enemyAtk / heroDef) + 2) * d6)
  // console.log(damage)
  return d2 === 2
    ? damage
    : 0
};

export = enemyDmg







