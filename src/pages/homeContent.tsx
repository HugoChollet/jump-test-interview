import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card } from "@/component/Card/Card.component";
import { useEffect, useState } from "react";
import { List } from "@mui/material";
import { BeerList } from "@/component/BeerList/BeerList.component";

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
      <BeerList items={beers} />
    </div>
  );
}
