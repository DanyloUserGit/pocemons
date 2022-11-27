const effective = {
    "fire" : "grass",
    "grass" : "water"
}
const neutral = {
    "grass" : "electricity",
    "fire" : "electricity"
}
const noneffective = {
    "fire" : "water",
    "water" : "electricity"
}

const Damage = (selfType, opponentType, attack, defense) => {
    let x;
    if(effective[selfType] == opponentType) {x = 2} else if(selfType == effective[opponentType]) {x=0.5};
    if(neutral[selfType] == opponentType) {x = 1} else if(selfType == neutral[opponentType]) {x=1};
    if(selfType == opponentType) x = 1;
    if(noneffective[selfType] == opponentType) {x = 0.5} else if(selfType == noneffective[opponentType]) {x=2};
    console.log(x);
    let pocemon = {
        selfType : selfType,
        opponentType : opponentType,
        attack : attack,
        defense : defense,
        damage : Math.floor((50 * (attack / defense) * x))
    }
    return (pocemon);
}

export default Damage;

// console.log(damage(effective, neutral, noneffective, "fire", "electricity", 20, 50));
