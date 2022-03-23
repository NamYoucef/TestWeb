import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [donnee, setDonnee] = useState([]);
  const [isPending, setIsPeding] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDonnee(data);
        setIsPeding(false);
      });
  }, [url]);
  return { donnee, isPending };
};
export default useFetch;
