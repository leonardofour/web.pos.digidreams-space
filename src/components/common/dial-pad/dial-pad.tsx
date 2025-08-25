import React from "react";
import {
  Button,
  Container,
  DeleteButton,
  DialPadContainer,
  Grid,
} from "./dial-pad.styled";
import DeleteLight from "@/assets/icons/delete.svg";
import DeleteDark from "@/assets/icons/delete-dark.svg";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
import Image from "next/image";
import Text from "../text/text";

interface PinLoginProps {
  onNumberClick?: (number: string) => void;
  onDotClick?: () => void;
  onDeleteClick?: () => void;
  disabled?: boolean;
}

const DialPad: React.FC<PinLoginProps> = ({
  onNumberClick,
  onDotClick,
  onDeleteClick,
  disabled = false,
}) => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
  const handleClick = (value: string) => {
    if (disabled) return;
    onNumberClick?.(value);
  };

  const handleDotClick = () => {
    if (disabled) return;
    onDotClick?.();
  };

  const handleDeleteClick = () => {
    if (disabled) return;
    onDeleteClick?.();
  };

  return (
    <Container>
      <DialPadContainer>
        <Grid>
          {numbers.map((number) => (
            <Button
              key={number}
              onClick={() => handleClick(number)}
              disabled={disabled}
            >
              <Text variant="title" level={1}>
                {number}
              </Text>
            </Button>
          ))}

          <Button onClick={handleDotClick} disabled={disabled}>
            <Text variant="title" level={1}>
              •
            </Text>
          </Button>

          <Button onClick={() => handleClick("0")} disabled={disabled}>
            <Text variant="title" level={1}>
              0
            </Text>
          </Button>

          <DeleteButton onClick={handleDeleteClick} disabled={disabled}>
            <Image
              src={isDark ? DeleteDark : DeleteLight}
              alt="Delete"
              width={24}
              height={24}
            />
          </DeleteButton>
        </Grid>
      </DialPadContainer>
    </Container>
  );
};
export default DialPad;
