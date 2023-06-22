import { TransparentButtonStyled } from "../../assets/styles/common";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const TransparentButton: React.FC<ButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <TransparentButtonStyled onClick={onClick}>
      {children}
    </TransparentButtonStyled>
  );
};
