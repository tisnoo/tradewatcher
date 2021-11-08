import axios from "axios";
import CryptoOverViewModel from "../models/cryptoOverview";

export const getCryptoMarketData = async () => {
 try{
    const resp = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    const data = resp.data;

    const formattedData = formatMarketData(data);

    return formattedData;
 }catch(e){
     console.log(e);
 }
}

const formatMarketData = (data: Array<any>) => {
    return data.map((value) => new CryptoOverViewModel(value["image"], value["id"],value["ath"],value["current_price"],value["price_change_24h"],value["symbol"],value["name"]));
}

