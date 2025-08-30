import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/f2c12f4ece91b95a7e9979ae/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res && res.conversion_rates) {
          setData(res.conversion_rates);
        }
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
