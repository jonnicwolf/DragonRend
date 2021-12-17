const { dialogues } = require("./dialogues");
const {
  fight,
  showDialogue,
  quitGame
} = require("../../CoreFunctions/coreFunctions");

function classPick (level_1_1,dialogGoesHere) {
  dialogGoesHere(dialogues.opening);
  const rls1 = require("readline-sync");
  let classPick = ["Sword", "Wand", "Rifle"];  
  let index = rls1.keyInSelect(classPick, "What weapon should I take?")
  
  switch (classPick[index]){
    case 0: 
      showDialogue(dialogues.classPick_sword)
      level_1_1()
      break;
    case 1:
      showDialogue(dialogues.classPick_wand)
      level_1_1();
      break;
    case 2:
      showDialogue(dialogues.classPick_rifle)
      level_1_1();
      break;
    default:
      quitGame();
  };
};

const level_1_1 = (showDialogue, lvl_1_2, lvl_1_1_2) => {
  showDialogue(dialogues.level_1_1.opening)
  let help = keyInYN("+ Qaspiel => ~Psssssssst pssst pssssssst~                                     <=+\n");
  if (help === true) {
    showDialogue(dialogues.level_1_1.help_isTrue)
    let lift = keyInYN(`+ Do you let  Qaspiel assist you down, ${nameInput}? +\n`);
    if (lift === true) {
      console.log("+ Qaspiel hops on your shoulders and flaps their little wings as you decend.           +");
      constitutionRoll(3, 10, 2);
      level_1_2();
    }
    else {
      console.log("+--------------------------------------------------------------------------------------+");
      console.log("+ Qaspiel => Ahh tough luck buddy...                                                   +");
      constitutionRoll(2, 2);
      console.log("+ Your health is now " + heroStat[0] + "!         + ");
      ();
    }
  }
  else {
    showDialogue(dialogues.level_1_1.help_isFalse)
    lvl_1_1_2();
  }
};
const level_1_2 = (showDialogue, stageThree, fight) => {
  showDialogue(dialogues.level_1_2.opening)
  
  const rls2 = require("readline-sync");
  investigate = ["Go left!", "Go right!"];
  index = rls2.keyInSelect(investigate, "Left or Right?");
 
  if (investigate[index] === investigate[0]) {
    showDialogue(dialogues.level_1_2.investigate_left)
    //mining cart ride algo
    stageThree()
  }
  else if (investigate[index] === investigate[1]) {
    showDialogue(dialogues.level_1_2.investigate_right)
    fight(heroStat, troll, 3, 5)
    //if W-> mining cart ride algo, if L-> quitGame()
    stageThree()
  }
};
const stageThree = () => {
  //riddle door to exit dungeon to levelTwo()
  console.log("you made it!");
  quitGame();
}

function levelOne (showDialogue, classPick) {  
  return classPick(showDialogue);
} 

module.exports = {
  levelOne,
  classPick
}