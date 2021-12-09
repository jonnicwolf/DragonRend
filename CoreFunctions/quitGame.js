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
    };
};
  
modules.exports = quitGame;