class colorAleatorio{
    public r: number;
    public g: number;  
    public b: number;

    constructor(){
        this.r = Math.round(Math.random() * 255);
        this.g = Math.round(Math.random() * 255);
        this.b = Math.round(Math.random() * 255);
    }

    public getRandomColor() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
}

const myColor:colorAleatorio = new colorAleatorio();

console.log(myColor.getRandomColor());