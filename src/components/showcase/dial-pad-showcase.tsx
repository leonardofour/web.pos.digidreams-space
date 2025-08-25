"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { PinInput } from "../common/input/input-pin";
import DialPad from "../common/dial-pad/dial-pad";
import Text from "../common/text/text";

const PinLoginPage = () => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePinChange = (newPin: string) => {
    setPin(newPin);
  };

  const handlePinComplete = async (completedPin: string) => {
    setIsLoading(true);
    console.log("PIN completed:", completedPin);

    try {
      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNumberClick = (number: string) => {
    if (pin.length < 6) {
      const newPin = pin + number;
      setPin(newPin);

      if (newPin.length === 6) {
        handlePinComplete(newPin);
      }
    }
  };

  const handleDeleteClick = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleDotClick = () => {
    setPin("");
  };

  return (
    <PageContainer>
      <LoginContainer>
        <Title>
          <Text variant="body" level={5}>
            Please input your PIN to validate yourself.
          </Text>
        </Title>

        <PinInput
          length={6}
          value={pin}
          onChange={handlePinChange}
          onComplete={handlePinComplete}
          disabled={isLoading}
          autoFocus
          mask
        />

        <DialPad
          onNumberClick={handleNumberClick}
          onDeleteClick={handleDeleteClick}
          onDotClick={handleDotClick}
          disabled={isLoading}
        />
      </LoginContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  padding: 20px;
`;

const Title = styled.div`
  color: var(--netral-600);
  text-align: center;
  margin-bottom: 32px;
`;

export default PinLoginPage;
