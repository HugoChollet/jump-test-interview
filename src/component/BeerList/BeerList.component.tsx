import { Button, ButtonGroup } from "@mui/material";

export const BeerList = ({ items }: any) => {
  return (
    <ButtonGroup orientation="vertical">
      {items.map((item: any) => (
        <Button key={item.id} variant={"outlined"}>
          {item.name}
        </Button>
      ))}
    </ButtonGroup>
  );
};
