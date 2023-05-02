import { BeerData } from "@/types/BeerDataType";
import { Button, ButtonGroup } from "@mui/material";
import { useRouter } from "next/router";

export const BeerList = ({
  items,
  filter,
}: {
  items: Array<BeerData>;
  filter: string;
}) => {
  const router = useRouter();

  return (
    <ButtonGroup orientation="vertical">
      {items.map((item: BeerData) => {
        if (
          item.name.toLowerCase().search(filter.toLowerCase()) !== -1 ||
          filter === ""
        ) {
          return (
            <Button
              key={item.id}
              variant={"outlined"}
              onClick={() => {
                router.push(
                  {
                    pathname: "/details",
                    query: {
                      data: JSON.stringify(item),
                    },
                  },
                  "/details"
                );
              }}
            >
              {item.name}
            </Button>
          );
        }
      })}
    </ButtonGroup>
  );
};
