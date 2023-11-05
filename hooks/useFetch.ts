import { useEffect, useState } from "react";

export default function useFetch(title: string) {
  const [data, setData] = useState([]);
  const newUrl: string = process.env.NEXT_PUBLIC_API_URL + title;

  useEffect(() => {
    fetch(newUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [newUrl]);

  return data;
}
