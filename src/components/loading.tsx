import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress, active } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: 14,
        color: "#F1F1F1",
        fontWeight: 800,
        marginTop: 40,
      }}
    >
      {/* <span className="canvas-loader" /> */}

      {active && `${progress.toFixed(2)}% loaded`}
    </Html>
  );
};

export default CanvasLoader;
