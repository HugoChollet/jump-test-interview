import { Button } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type CardProps = {
  title: string;
  description: string;
  updateContext: () => void;
};

export const Card = ({ title, description, updateContext }: CardProps) => {
  return (
    <div onClick={updateContext}>
      <h2 className={inter.className}>
        {title} <span>-&gt;</span>
      </h2>
      <p className={inter.className}>{description}</p>
    </div>
  );
};
