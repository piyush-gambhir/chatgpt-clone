import { useState } from "react";
import Typewriter from "typewriter-effect";

type Props = {
  children: React.ReactNode;
};

export default function TypewriterEffect({ children }: Props) {
  const [on, setOn] = useState(true);
  return on ? (
    <Typewriter
      options={{
        delay: 45,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(children as string)
          .start()
          .callFunction(() => {
            setOn(false);
          });
      }}
    />
  ) : (
    children
  );
}
