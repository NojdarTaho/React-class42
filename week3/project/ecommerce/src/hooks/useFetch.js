import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = (url) => {
    setIsPending(true);
    setData([]);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Soooo sorry, could not fetch the data for that resource"
          );
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  };

  return { data, isPending, error, fetchData };
};

export default useFetch;
