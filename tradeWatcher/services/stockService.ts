// 1CF2OGSST6A9773G

// c64nlkiad3idic8sbqqg

import axios from "axios";

export const searchStockMarket = async (keywords: String) => {
 try{
    const resp = await axios.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+keywords+"&apikey=1CF2OGSST6A9773G");
    const data = resp.data;

    console.log(data);
 }catch(e){
     console.log(e);
 }
}