import { useEffect, useState } from "react";
import { Card } from "../Card/Card.component";
import { useRouter } from "next/router";

export const RandomCards = ({ beerData }: any) => {
  const [selectedCards, setSelectedCards] = useState<number[]>();
  const router = useRouter();

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
            description={beerData[selectedCards[0]].description}
            updateContext={() => {
              router.push(
                {
                  pathname: "/details",
                  query: {
                    data: JSON.stringify(beerData[selectedCards[0]]),
                  },
                },
                "/details"
              );
            }}
          />
          <Card
            title={beerData[selectedCards[1]].name}
            description={beerData[selectedCards[1]].description}
            updateContext={() => {
              router.push(
                {
                  pathname: "/details",
                  query: {
                    data: JSON.stringify(beerData[selectedCards[1]]),
                  },
                },
                "/details"
              );
            }}
          />
        </>
      )}
    </div>
  );
};
