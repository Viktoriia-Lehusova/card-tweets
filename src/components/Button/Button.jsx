import { StyledButton } from './Button.styled';

export const Button = ({ loadMore }) => (
  <div>
    <StyledButton onClick={loadMore}>Load More</StyledButton>
  </div>
);
