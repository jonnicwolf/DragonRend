const showDialogue = (dialogue) => {
    let i = 0;
    const len = dialogue.length;
  
    const timer = setInterval(() => { 
        i++;
        i === len
          ? clearInterval(timer)
          : console.log(dialogue[i]);
    }, 1_000);
  };

module.exports = {
    showDialogue
}
