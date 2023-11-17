import { createContext, useState } from "react";
import { data } from "./Data";

const HomeContext = createContext({
    songs: [],
    currentSongIndex: 0,
    setCurrentSongIndex: () => {},
    isPlaying: false,
    setIsPlaying: () => {},
});

const MyProvider = ({ children }) => {
    const [ currentSongIndex, setCurrentSongIndex] = useState(0);
    const [ isPlaying, setIsPlaying ] = useState(false);

    const contextValue = {
        songs: data,
        currentSongIndex,
        setCurrentSongIndex,
        isPlaying,
        setIsPlaying,
    };

    return <HomeContext.Provider value={contextValue} > {children} </HomeContext.Provider>;

};
export { HomeContext, MyProvider};