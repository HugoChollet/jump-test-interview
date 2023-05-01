import { Inter } from "next/font/google";
import { BeerList } from "@/component/BeerList/BeerList.component";
import { RandomCards } from "@/component/RandomCards/RandomCards";
import { useQuery } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function HomeContent() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.punkapi.com/v2/beers?per_page=10").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;

  return (
    <div>
      <RandomCards beerData={data} />
      <BeerList items={data} />
    </div>
  );
}
