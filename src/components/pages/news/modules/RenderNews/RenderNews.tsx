import React, { useMemo, useState } from "react";
import FlexContainer from "../../../../UI/FlexContainer";
import CardNew from "./component/CardNew";

export default function RenderNews() {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [activePage, setActivePage] = useState<number>(1);

  const itemsPerPage: number = 6;
  const paginatedNews: number[] = useMemo(() => {
    const indexOfLastNews = activePage * itemsPerPage;
    const indexOfFirstNews = indexOfLastNews - itemsPerPage;

    return arr.slice(indexOfFirstNews, indexOfLastNews);
  }, [activePage, arr]);
  return (
    <FlexContainer gap="25px" margin="0 auto 30px auto" flexWrap="wrap">
      {paginatedNews.map((item: number) => (
        <CardNew key={item}></CardNew>
      ))}
    </FlexContainer>
  );
}
