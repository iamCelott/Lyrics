import { useRef, useState } from "react";
import song from "./assets/OMI - Cheerleader (Felix Jaehn Remix) (Lyrics) (mp3cut.net).mp3";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [lyrics] = useState([
    "She gives me love",
    "And affection,",
    "baby, did I mention?",
    "You're the only girl for me,",
    "No, I don't need a next one",
    "Mama loves you too,",
    "she thinks I made the right selection",
    "Now all that's left to do",
    "is just for me to pop the question",
  ]);

  const [delay] = useState([
    1340, 1200, 2000, 1880, 2300, 1200, 2575, 1600, 1200,
  ]);

  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    let index = 0;
    const playLyrics = () => {
      if (index >= lyrics.length) {
        return;
      }

      setCurrentLyricIndex(index + 1);
      setTimeout(playLyrics, delay[index]);
      index++;
    };

    setTimeout(playLyrics, delay[index]);
  };

  return (
    <div className="w-full min-h-screen bg-[#1e1e1e] flex flex-col justify-center items-center overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.1)] w-[400px] h-[400px] absolute top-3 rounded-[100%] blur-[150px] opacity-75" />
      <div className="absolute p-3 w-[250px] h-[70vh] lg:w-[350px] lg:h-[80vh] top-1/2 bg-[rgba(255,255,255,0.1)] -translate-y-1/2 left-40 -rotate-12 z-10 rounded-xl overflow-hidden">
        <img
          src={img1}
          alt=""
          className="w-full h-full object-cover duration-200 hover:scale-125"
        />
      </div>
      <div className="z-40 sm:hidden bg-[rgba(255,255,255,0.1)] absolute w-[250px] h-[300px] lg:w-[350px] lg:h-[350px] backdrop-blur-sm top-3 rounded-3xl" />
      <div className="absolute p-3 w-[250px] h-[70vh] lg:w-[350px] lg:h-[80vh] object-cover bg-[rgba(255,255,255,0.1)] top-1/2 -translate-y-1/2 right-40 rotate-12 z-30 rounded-xl overflow-hidden">
        <img
          src={img2}
          alt=""
          className="w-full h-full object-cover rounded-xl duration-200 hover:scale-125"
        />
      </div>
      <div className="text-white font-bold text-center bg-red-300 z-50">
        {lyrics.slice(0, currentLyricIndex).map((line, index) => (
          <h1
            key={index}
            className={`text-sm lg:text-xl text-nowrap  ${
              index === currentLyricIndex - 1
                ? "text-yellow-500"
                : "text-white opacity-75"
            }`}
            style={{
              position: "absolute",
              top: `${index * 4.5 + 4.5}%`,
              left: "50%",
              transform: "translateX(-50%)",
              transition: "bottom 0.5s ease-in-out",
            }}
          >
            {line}
          </h1>
        ))}
      </div>
      <button
        type="button"
        onClick={startMusic}
        className="bg-gray-200 z-40 rounded-md px-4 py-2 font-bold hover:bg-gray-800 hover:text-white mt-3"
      >
        Play Song
      </button>
      <audio ref={audioRef} src={song} />
    </div>
  );
}

export default App;
