import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Details(props: any) {
  console.log(props);
  const router = useRouter();
  const [details, setDetails] = useState<any>();

  useEffect(() => {
    if (router.query.data) setDetails(JSON.parse(router.query.data));
    console.log(details);
  }, [router.query]);

  return (
    <>
      {details ? (
        <div>
          <h2 className={inter.className}>{details.name}</h2>
          Firstly Brewed :{" "}
          <h3 className={inter.className}>{details.first_brewed}</h3>
          <p className={inter.className}>{details.description}</p>
          <Button onClick={() => router.back()}> Back </Button>
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </>
  );
}
