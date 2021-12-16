const { keyInYN } = require("readline-sync");
const {
  levelOne,
  classPick }= require('../Levels/levelOne/levelOne.js');
const {showDialogue} = require('../CoreFunctions/coreFunctions.js')
const dialogues = {
  start:  [
    "+=======================================================================================+",
    "+---------------------------------------------------------------------------------------+",
    "+ ============//                                     ========/                     __   +",
    "+ |    _      //.———----.—---—.—.———.———.———--.-----||.       /  ______.______.____| /  +",
    "+ |.   |      ||   ____|   _   |    _  |  _  |      ||.   00  /_|  -___|       | _ | |  +",
    "+ |.   |      ||___|   |_____._|____|  |_____|___|__||.     _   |______|___|___|_____/  +",
    "+ |:   1     //                _____|  |            ||:    | |  |                       +",
    "+ |: : . .  ./                 |_______|            ||: :. | :  |                       +",
    "+ `---------’                                       `----' `--‘                         +",
    "+---------------------------------------------------------------------------------------+",
    "+---------------------------------------------------------------------------------------+",
    "+ In the land of Phimiba on the black sand coast of the Antaria, there is a cliff where +",
    "+ a small village called Stiynovelt. A valley untouched by the wars of yore for an eon. +",
    "+ Great heroes and destroyers alike have wrecked and gone asunder in the bony beaches of+",
    "+ Stiynovelt and ten thousand fold more in the windblown summit alps to the moutainous  +",
    "+ east. Here in Stiynovelt grows then mystic Ironbark tree. The last in fact. It's sap  +",
    "+ gave the first dragons their fire and their barks gave men their first swords, whose  +",
    "+ branches were cut and bent into wands and whose fruit seeds now make load for rifles. +",
    "+ We find you, dear adventurer in your forest garden, as you tend the lemongrass. As    +",
    "+ night falls, a faint and strange glow cuts the darkness. You draw nearer and discover +",
    "+ a strange bloom in your rose bush, flashing magenta and periwinkle and pulsing as a   +",
    "+ firefly does and getting brighter as you draw nearer. You reach out to the strange    +",
    "+ rose to shield your eyes from its blinding light.                                     +\n\n"
  ],  
  pickNo: [
    "+========================================================================================+",
    "+ You choose not to pick the beautiful dying flower but nurture it instead!            +\n\n",
    "+ Until one day...                                                                       +",
  ],
  pickYes: [
    "+========================================================================================+",
    "+ Thy name is MUD. Prithee maketh haste hence and returneth to thy hutch.                +",
  ]  
};

const startQuest = () => {
  const start = keyInYN('Do you pick the flower?')
  // let i = 1
  let i = 0

  if (!start) {
    const dialogueLength = dialogues.pickNo.length//3
    const timer = setInterval(() => {
      if (i === dialogueLength){
        levelOne(showDialogue,classPick)
        clearInterval(timer);
      }
        // levelOne(); } 
        else if (i === (dialogueLength-1)){
          setTimeout(()=>{console.log(dialogues.pickNo[dialogues.pickNo.length-1])}, 500)
          i++
        }
      else { 
        console.log(dialogues.pickNo[i])
        i++; }
    }, 250)}

  else {
    const len = dialogues.pickYes.length
    const timer = setInterval(() => {
      i++
      if (i === len){
        clearInterval(timer)
      } else {
        console.log(dialogues.pickYes[i])
        //trigger restart
      }
    });
  };
};

///write a conditional looking at the truthiness of the heroName

const showDialogue_start = () => {
  let i = 0;
  const len = dialogues.start.length;

  const timer = setInterval(() => { 
    console.log(dialogues.start[i]);
    // console.log(`startQuest6`)
      i++;
      if (i === len){
        clearInterval(timer);
        startQuest()
      }
      // i === len ? clearInterval(timer) : null
  }, 250);
};

const start = () => {
  // showDialogue_start()
  // setTimeout(start_Quest, 250)  
  showDialogue_start() 
  // console.log(`start dialogue`)
  // setTimeout(()=>{startQuest()}, 8000)  
};

// start();

module.exports = {start};
