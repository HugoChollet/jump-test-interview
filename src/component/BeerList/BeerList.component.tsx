import { Button, ButtonGroup } from "@mui/material";
import { useRouter } from "next/router";

export const BeerList = ({ items }: any) => {
  const router = useRouter();

  return (
    <ButtonGroup orientation="vertical">
      {items.map((item: any) => (
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
      ))}
    </ButtonGroup>
  );
};
