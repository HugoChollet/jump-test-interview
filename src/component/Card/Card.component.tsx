import { padding } from "@mui/system";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { Button, IconButton } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

type CardProps = {
  title: string;
  link: string;
  description: string;
};

export const Card = ({ title, link, description }: CardProps) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 className={inter.className}>
          {title} <span>-&gt;</span>
        </h2>
        <p className={inter.className}>{description}</p>
      </a>
    </>
  );
};
