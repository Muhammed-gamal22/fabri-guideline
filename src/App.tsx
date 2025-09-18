import "./styles.css";
import { useEffect, useRef } from "react";
import { AlignGuidelines } from "fabric-guideline-plugin";
import { setup } from "./setup";

export default function App() {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;

      const fabricCanvas = setup({
        normalBoxCount: 10,

        rotateBoxCount: 2
      });
      const guideline = new AlignGuidelines({
        canvas: fabricCanvas,
        aligningOptions: {
          lineColor: "#32D10A",
          lineMargin: 8
        }
      });
      guideline.init();
    }
  }, []);

  return <canvas id="myCanvas" width="700" height="400"></canvas>;
}
