import { StyledLabel, StyledWrapper } from "./Field.styled";

type TProps = {
  label: string;
  children: React.ReactNode;
};

export const Field: React.FC<TProps> = ({ label, children }) => (
  <StyledWrapper>
    <StyledLabel>{label}</StyledLabel>
    {children}
  </StyledWrapper>
);
