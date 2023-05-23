import React, {useState} from "react";
import PredictInput from "../components/predict-input.js";
import FileLoader from "../components/fileloader.js";
import DiscoverStatistics from "../components/discoverstatistics.js";
import NgramWords from "../components/ngramwords.js";
import ContextWords from "../components/contextwords.js";

function Predict() {
    const [ngramSize, setNgramSize] = useState(1);
    const [inputValue, setInputValue] = useState("");
    const [wordsToPredict, setWordsToPredict] = useState(1);
    const [statistics, setStatistics] = useState(1);
    const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };

    return (
        <>
            <PredictInput inputValue={inputValue} setInputValue={setInputValue} ngramSize={ngramSize}
                          wordsToPredict={wordsToPredict} statistics={statistics}/>
            <FileLoader onSuccess={onSuccess}/>
            <DiscoverStatistics setStatistics={setStatistics}/>
            <NgramWords range={ngramSize} setRange={setNgramSize}/>
            <ContextWords range={wordsToPredict} setRange={setWordsToPredict}/>
        </>
    );
}

export default Predict;
