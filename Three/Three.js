//Inplementing an interface with two properties
//There's going to be an interface called: Blocks, it will have a boolean and a number
function check(Occupied) {
    if (Occupied.Occupied == true) {
        console.log("This box of ".concat(Occupied.Amount, " blocks is occupied"));
    }
    else {
        console.log("This box of ".concat(Occupied.Amount, " blocks is not occupied"));
    }
}
//The function gets called, with the box NOT being occupied and has 10 blocks inside
check({ Occupied: false, Amount: 10 });
//The Program will output to the console the "else" statement
//"This box of 10 blocks is not occupied"
