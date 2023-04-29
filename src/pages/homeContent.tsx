import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { BeerList } from "@/component/BeerList/BeerList.component";
import { RandomCards } from "@/component/RandomCards/RandomCards";

const inter = Inter({ subsets: ["latin"] });

export default function HomeContent() {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers?per_page=10");
    const data = await res.json();
    setBeers(data);
    console.log(beers);
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
      <RandomCards beerData={beers} />
      <BeerList items={beers} />
    </div>
  );
}
