import Confetti from 'react-confetti';

type IConfetti = {
  height: number;
  width: number;
  numberOfPieces?: number;
  recycle?: boolean;
};

export const ConfettiContainer = (props: IConfetti) => {
  return <Confetti {...props} />;
};
