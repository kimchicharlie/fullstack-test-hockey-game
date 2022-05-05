import { StyledButton } from "./Button.styled";

type TProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: TProps) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
