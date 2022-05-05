import { StyledLabel, StyledWrapper } from "./Field.styled";

type TProps = {
  label: string;
  children: React.ReactNode;
};

export const Field = ({ label, children }: TProps) => (
  <StyledWrapper>
    <StyledLabel>{label}</StyledLabel>
    {children}
  </StyledWrapper>
);
