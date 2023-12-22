import { useEffect, useState } from "react";  // designing custom hooks


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://community-neutrino-currency-conversion.p.rapidapi.com/convert`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data;
}


export default useCurrencyInfo;