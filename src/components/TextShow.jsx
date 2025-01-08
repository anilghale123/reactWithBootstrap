import SplitText from "./SplitText";
import BlurText from "./BlurText";

function TextShow() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <SplitText
        text="Hello, Welcome to Anil's Folio!"
        className="text-2xl font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
    </>
  );
}
export default TextShow;
