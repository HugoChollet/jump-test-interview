import { useEffect, useState } from "react";
import { Card } from "../Card/Card.component";

export const RandomCards = ({ beerData }: any) => {
  const [selectedCards, setSelectedCards] = useState<number[]>();

  const shuffleCards = () => {
    return [
      Math.floor(Math.random() * beerData.length),
      Math.floor(Math.random() * beerData.length),
    ];
  };

  useEffect(() => {
    if (beerData.length > 0) {
      setSelectedCards(shuffleCards());
    }
  }, [beerData]);

  setTimeout(() => {
    setSelectedCards(shuffleCards());
  }, 10000);

  return (
    <div>
      {selectedCards && (
        <>
          <Card
            title={beerData[selectedCards[0]].name}
            link="https://www.google.com"
            description={beerData[selectedCards[0]].description}
          />
          <Card
            title={beerData[selectedCards[1]].name}
            link="https://www.google.com"
            description={beerData[selectedCards[1]].description}
          />
        </>
      )}
    </div>
  );
};
