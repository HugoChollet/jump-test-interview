import { BeerList } from "@/component/BeerList/BeerList.component";
import { RandomCards } from "@/component/RandomCards/RandomCards";
import { useQuery } from "react-query";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function HomeContent() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.punkapi.com/v2/beers?per_page=20").then((res) =>
      res.json()
    )
  );
  const [filterSearch, setFilterSearch] = useState("");

  if (isLoading) return <div>Loading...</div>;

  if (error) return <>An error has occurred: {error}</>;

  return (
    <div>
      <RandomCards beerData={data} />
      <TextField
        id="filled-basic"
        label="Searched beer"
        variant="standard"
        placeholder="BLONDE"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFilterSearch(event.target.value);
        }}
      />
      <BeerList items={data} filter={filterSearch} />
    </div>
  );
}
