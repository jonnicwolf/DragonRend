import {dice} from "../CoreFunctions"

const health = () => {
    let roll = dice(6, 1);
    if (roll >= passVal) {
        console.log(`${heroStat.health} health before`);
        heroStat.health + reward;
        console.log(`${heroStat.health} health after`);
        console.log(
        "+--------------------------------------------------------------------------------------+"
        );
        console.log(`+ You rolled {roll}`);
        console.log(
        `+ You gain ${reward} heart points. Health is now ${heroStat.health} +`
        );
    } else if (roll < passVal) {
        heroStat.health - risk;
        console.log(
        "+--------------------------------------------------------------------------------------+"
        );
        console.log("+ You rolled ${roll}+");
        console.log(
        `+ you lose ${reward} heart points. Health is now ${heroStat.health} +`
        );
    } else {
        console.log(
        "+--------------------------------------------------------------------------------------+"
        );
        console.log(`Whoa something went really wrong here`);
    }
}
export {
    health
}