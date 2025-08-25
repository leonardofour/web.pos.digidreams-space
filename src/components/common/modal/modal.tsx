import React from "react";
import {
  IconContainer,
  OuterCircle,
  InnerCircle,
  Title,
  Message,
  ButtonContainer,
  Button,
  Modal,
  Overlay,
} from "./modal.styled";
import Text from "../text/text";
import CheckIcon from "@/assets/icons/success.svg";
import CloseIcon from "@/assets/icons/close.svg";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message?: string;
  boldTexts?: string[];
  primaryText?: string;
  secondaryText?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  showSecondary?: boolean;
  variant?: "success" | "error";
}

const highlightTexts = (
  message: string,
  boldTexts: string[] = []
): React.ReactNode => {
  if (!boldTexts.length) return message;

  let result = message;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  const sortedBoldTexts = [...boldTexts].sort((a, b) => b.length - a.length);

  sortedBoldTexts.forEach((boldText, index) => {
    const regex = new RegExp(
      `\\b${boldText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "gi"
    );
    result = result.replace(
      regex,
      `<BOLD_${index}>${boldText}</BOLD_${index}>`
    );
  });

  const finalRegex = /<BOLD_(\d+)>(.*?)<\/BOLD_\d+>/g;
  let match;

  while ((match = finalRegex.exec(result)) !== null) {
    if (match.index > lastIndex) {
      parts.push(result.substring(lastIndex, match.index));
    }
    parts.push(
      <span key={`bold-${match.index}`} className="bold">
        {match[2]}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < result.length) {
    parts.push(result.substring(lastIndex));
  }

  return parts.length > 0 ? parts : message;
};

export const Modals: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  boldTexts = [],
  primaryText = "Done",
  secondaryText = "Secondary",
  onPrimary,
  onSecondary,
  showSecondary = false,
  variant = "success",
}) => {
  const handlePrimary = () => {
    onPrimary?.();
    onClose();
  };

  const handleSecondary = () => {
    onSecondary?.();
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderIcon = () => {
    if (variant === "error") {
      return <Image src={CloseIcon} alt="Error" width="24" height="24" />;
    }
    return <Image src={CheckIcon} alt="Success" width="24" height="24" />;
  };

  return (
    <Overlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <Modal>
        <IconContainer>
          <OuterCircle $variant={variant} />
          <InnerCircle $variant={variant}>{renderIcon()}</InnerCircle>
        </IconContainer>

        <Title>
          <Text variant="title" level={1}>
            {title}
          </Text>
        </Title>
        {message && (
          <Message>
            <Text variant="body" level={4}>
              {highlightTexts(message, boldTexts)}
            </Text>
          </Message>
        )}

        <ButtonContainer>
          {showSecondary && (
            <Button $variant="secondary" onClick={handleSecondary}>
              {secondaryText}
            </Button>
          )}
          <Button $variant="primary" onClick={handlePrimary}>
            {primaryText}
          </Button>
        </ButtonContainer>
      </Modal>
    </Overlay>
  );
};

export default Modals;
