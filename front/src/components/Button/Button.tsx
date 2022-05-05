import { StyledButton } from "./Button.styled";

type TProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button: React.FC<TProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
