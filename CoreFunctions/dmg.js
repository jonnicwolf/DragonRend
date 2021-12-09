const dice = require('./dice.js')
// const statsAPI = require('./characterStats-API.js')

const dmg = (herostat, enemy) => {
    const d6Roll = dice(6, 1)
    const critRoll = dice(3, 1)
    
    let atk, level;
    [atk, level]  = [herostat.attack,herostat.level]
    const enemyDef = enemy.defense
    
    let damage = Math.ceil(((
        (2 * level + 10) / 50) * (atk / enemyDef) + 2) * d6Roll)
    
    let critical = Math.ceil(((
        (2 * level + 10) / 50) * (atk / enemyDef) + 2) * critRoll)
    

    if (d6Roll !== 1 && d6Roll !== 6) {
        // console.log('+--------------------------------------------------------------------------------------+')
        console.log('Normal hit.')
        return damage

    } else if (d6Roll === 6) {
        let critDmg = damage + critical        
        console.log('Critical hit!')
        return critDmg

    } else if (d6Roll === 1) {
        console.log(`Your attack missed!`)
        return 0
    }
}
export = dmg;


