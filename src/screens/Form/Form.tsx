import React, { useState } from "react";
import PoemStepOne from "../../components/PoemStepOne/PoemStepOne";
import PoemStepTwo from "../../components/PoemStepTwo/PoemStepTwo";
import PoemStepThree from "../../components/PoemStepThree/PoemStepThree";
import { usePoemContext } from "../../contexts/PoemContext";

const Form: React.FC = () => {
  const { addPoem } = usePoemContext();

  const [step, setStep] = useState(1);
  const [poemData, setPoemData] = useState({
    title: "",
    author: "",
    lines: [] as string[],
    category: "",
  });

  const handleStep1Next = (title: string, author: string) => {
    setPoemData({ ...poemData, title, author });
    setStep(2);
  };

  const handleStep2Next = (lines: string[]) => {
    setPoemData({ ...poemData, lines });
    setStep(3);
  };

  const handleStep3Finish = (category: string) => {
    setPoemData({ ...poemData, category });
    addPoem({ ...poemData, category });
    setStep(1);
  };

  return (
    <>
      {step === 1 && <PoemStepOne onNext={(title, author) => handleStep1Next(title, author)} />}
      {step === 2 && <PoemStepTwo onNext={lines => handleStep2Next(lines)} onBack={() => setStep(1)} />}
      {step === 3 && <PoemStepThree onFinish={category => handleStep3Finish(category)} onBack={() => setStep(2)} />}
    </>
  );
};

export default Form;
