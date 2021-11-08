export default class CryptoOverViewModel {
    image: string;
    id: string;
    ath: string;
    currentPrice: string;
    priceChange24H: string;
    symbol: string;
    name: string;

    constructor(image: string, id: string, ath:string, currentPrice:string, priceChange24H: string, symbol: string, name: string){
        this.image = image;
        this.id = id;
        this.ath = ath;
        this.currentPrice = currentPrice;
        this.priceChange24H = priceChange24H;
        this.symbol = symbol;
        this.name = name;
    }
    

}