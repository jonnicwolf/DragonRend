const dodge = (risk) => {
    const dice = dice(6,1);
    if (dice > 3){
        console.log(`+ Successful dodge!+`);
        return true;
    }
    else if (dice === 3){
        console.log(`+ You tripped during your dodge and took ${risk} damage!    +`);
        return hero.health - risk;
    }
    else {
        return false;
    };
};

