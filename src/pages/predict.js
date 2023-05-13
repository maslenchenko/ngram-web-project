import React from "react";
import PredictInput from "../components/predict-input.js";
import FileLoader from "../components/fileloader.js";
import DiscoverStatistics from "../components/discoverstatistics.js";
import NgramWords from "../components/ngramwords.js";
import ContextWords from "../components/contextwords.js";

function Predict() {
  return (
    <>
      <PredictInput />
      <FileLoader />
      <DiscoverStatistics />
      <NgramWords />
      <ContextWords />
    </>
  );
}

export default Predict;
