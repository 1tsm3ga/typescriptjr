
export class Forth{
    private privNumber: number = 0;
    public pubString: string;
    protected strProtect: string = "any value";
    static sameNumber: number = 0;

    //the type names are named like that, so it is easier to follow along the code

    constructor(){
        this.pubString = "";
    }

    get number(): number {
        return this.privNumber;
    }
    set number(number: number){
        this.privNumber = number;
    }
    printPublicString(): void{
        console.log(this.pubString);
    }
}