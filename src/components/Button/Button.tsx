import React from 'react';
import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export enum ButtonVariant {
  labelButton = 'labelButton',
  primary = 'primary',
  secondary = 'secondary',
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  backgroundColor?: string;
  labelColor?: string;
  variant?: ButtonVariant;
}

const getMuiVariant = (variant?: ButtonVariant) => {
  switch (variant) {
    default:
    case ButtonVariant.primary:
    case ButtonVariant.secondary:
      return 'contained';
    case ButtonVariant.labelButton:
      return undefined;
  }
};

const StyledButton = styled(MuiButton)<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledTypography = styled(Typography)<{ textColor?: string }>`
  color: ${({ textColor }) => textColor};
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  isDisabled,
  isLoading,
  backgroundColor,
  labelColor,
  variant,
}) => {
  const buttonVariant = getMuiVariant(variant);
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      variant={buttonVariant}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      <StyledTypography textColor={labelColor} variant="subtitle1">
        {label}
      </StyledTypography>
    </StyledButton>
  );
};
