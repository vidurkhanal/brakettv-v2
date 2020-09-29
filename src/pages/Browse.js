import React from "react";
import { BrowserContainer } from "../containers/browse";
import useContent from "../hooks/useContent";
import { selectionFilter } from "../utils/selectionFilter";

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });
  return (
    <>
      <BrowserContainer slides={slides} />
    </>
  );
}

export default Browse;
