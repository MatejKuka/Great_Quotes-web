class Quote {
    id: number;
    text: string;
    author: string;

    constructor(id: number, todoText: string, authorText: string) {
        this.id = id;
        this.text = todoText;
        this.author = authorText;
    }
}

export default Quote;