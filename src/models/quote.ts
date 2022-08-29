class Quote {
    id: number;
    text: string;
    author: string;
    keyFB: string = "";

    constructor(id: number, todoText: string, authorText: string) {
        this.id = id;
        this.text = todoText;
        this.author = authorText;
    }
    set setKeyFB(keyInput: string){
        this.keyFB = keyInput;
    }
}

export default Quote;