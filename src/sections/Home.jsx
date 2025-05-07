import { useState, useEffect } from "react";
 

const getCurrencySymbol = (currencyCode) => {
    const formatted = (0).toLocaleString('en', {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'symbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  
    // Remove digits and commas, keep only currency characters
    const symbol = formatted.replace(/[\d.,\s]/g, '').replace(/[A-Za-z]/g, '').trim();
  
    return symbol;
  };

 export const Home = ({setCurrencyChange}) => {
    const [amount, setAmount] = useState('');
    const [result,setResult] = useState('');
    const [rate, setRate] = useState(null);
    const [from, setFrom] = useState('CAD')
    const [to, setTo] = useState("USD")



    useEffect(() => {


        /*
        const url = `https://api.fxratesapi.com/latest?base=${from}&currencies=${to}&resolution=1m&amount=1&places=6&format=json`
        fetch(url)
        .then((res) => {
            if (!res.ok) throw new Error("Network Response was not ok");
            return res.json();
        })
        .then((data) =>{
            setRate(data["rates"][`${to}`])
            setResult(((data["rates"][`${to}`]) * amount).toFixed(2))
            console.log(result)
            */

        setRate(0.73)
        setResult(amount * 0.73)
    }, [to, from])
    

    useEffect(()=>{
        if(!amount || isNaN(amount)) return;

        if(amount == ''){
            setResult('')
        }

        setResult((rate * amount).toFixed(2))
        console.log(to)

       



 
    }, [amount])



    return (
 
        <div>

        <h2 className="text-activated font-bold text-5xl  mt-6 ml-6"><span className="text-accent font-extrabold">U</span>Convert</h2>
        <div className=" h-fit w-fit flex flex-col items-baseline justify-center ml-6 gap-25 mt-50 ">
            

            <div className="w-fit flex items-center justify-baseline transition ">
            <span className=" font-bold text-4xl text-activated ">{getCurrencySymbol(from)}</span>
            <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="peer w-sm pl-2 text-4xl border-b-5 border-secondary focus:outline-none focus:border-activated font-bold focus:text-activated  placeholder:text-unfocused focus:caret-transparent transition-all duration-200"
            />
            <a onClick={(e) => setCurrencyChange(true)}>
                <h1 className="text-4xl text-unfocused font-semibold ml-2 hover:text-activated transition duration-200 "  >{from}</h1>
            </a>
            </div>


            <div className="w-fit flex items-center justify-baseline transition ">
            <span className=" font-bold text-4xl text-activated ">{getCurrencySymbol(to)}</span>
            <input 
                type="number"
                readOnly
                value={result}
                onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9.]/g, ' ');
                  }}
                className="peer w-sm pl-2 text-4xl border-b-5 border-secondary focus:outline-none text-accent/50  font-bold  focus:text-accent  placeholder:text-accent/50 focus:caret-transparent transition-all duration-200"
            />
            <a  onClick={(e) => setCurrencyChange(true)}>
                <h1 className="text-4xl text-unfocused font-semibold ml-2 hover:text-activated transition duration-200 ">{to}</h1>
            </a>
            </div>
            
        </div>
        </div>
        
        


    )
 }