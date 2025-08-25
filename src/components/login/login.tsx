"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Modals from "../common/modal/modal";
import { Employee } from "../common/employees/employees";
import { PinInput } from "../common/input/input-pin";
import DialPad from "../common/dial-pad/dial-pad";
import { Button } from "../common/button";
import Text from "../common/text/text";
import { SliderIndicator } from "../common/slider/slider";
import EmployeeShiftDropdown from "../common/employees/employees";

import { useLogin } from "@/hooks/useLogin";
import { useUsers } from "@/hooks/useUsers";

import {
  ContainerLogin,
  FormLogin,
  ChooseAccount,
  WrapperPin,
  EnterPin,
  FormContent,
  DialPadWrapper,
  PinWrapper,
  ButtonWrapper,
  Header,
  Title,
  Subtitle,
  Slider,
  SlideWrapper,
  Slide,
  Gradient,
  IndicatorWrapper,
  LogoWrapper,
  Card,
} from "./login.styled";

import MainSlide from "@/assets/login/main-slide.jpg";
import Slide1 from "@/assets/login/slide-1.png";
import Slide2 from "@/assets/login/slide-2.png";
import Slide3 from "@/assets/login/slide-3.png";
import Logo from "@/assets/login/logo.svg";

const SLIDES = [MainSlide, Slide1, Slide2, Slide3];
const PIN_LENGTH = 6;
const SLIDE_INTERVAL = 5000;

interface ModalState {
  show: boolean;
  title: string;
  message: string;
  boldTexts: string[];
  variant: "success" | "error";
}

export default function LoginPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [pin, setPin] = useState("");
  const [modal, setModal] = useState<ModalState>({
    show: false,
    title: "",
    message: "",
    boldTexts: [],
    variant: "success",
  });

  const router = useRouter();

  const {
    users,
    loading: usersLoading,
    error: usersError,
    refetch: refetchUsers,
  } = useUsers();

  const employeeData = {
    users: users || [],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const { mutate: loginUser, isPending: isLoading } = useLogin({
    onSuccess: (data) => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          "loginSuccess",
          JSON.stringify({
            userName: data.user.displayName || data.user.displayName,
            timestamp: new Date().toISOString(),
          })
        );
      }

      resetPin();
      router.push("/pages/dashboard");
    },
    onError: (error) => {
      showModal({
        title: "Login Failed",
        message: error.message || "Something went wrong. Please try again.",
        boldTexts: ["try again"],
        variant: "error",
      });
      resetPin();
    },
  });

  const showModal = (modalData: Omit<ModalState, "show">) => {
    setModal({ ...modalData, show: true });
  };

  const resetPin = () => setPin("");

  const isFormValid = () =>
    selectedEmployee && pin.length === PIN_LENGTH && !isLoading;

  const handlePinComplete = (completedPin: string) => {
    if (selectedEmployee && completedPin.length === PIN_LENGTH && !isLoading) {
      loginUser({ id: selectedEmployee.id, pin: completedPin });
    }
  };

  const handleNumberClick = (number: string) => {
    if (pin.length < PIN_LENGTH && !isLoading) {
      const newPin = pin + number;
      setPin(newPin);

      if (newPin.length === PIN_LENGTH) {
        handlePinComplete(newPin);
      }
    }
  };

  const handleEmployeeSelect = (employee: Employee) => {
    if (!isLoading) {
      setSelectedEmployee(employee);
      resetPin();
    }
  };

  const handleModalClose = () => {
    setModal((prev) => ({ ...prev, show: false }));
  };

  const handleDeleteClick = () => {
    if (!isLoading) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleClearClick = () => {
    if (!isLoading) {
      resetPin();
    }
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      handlePinComplete(pin);
    }
  };

  const handleRetryFetchUsers = () => {
    refetchUsers();
  };

  return (
    <ContainerLogin>
      <Card>
        <Slider>
          <SlideWrapper
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {SLIDES.map((slide, index) => (
              <Slide key={index}>
                <Image src={slide} alt={`Slide ${index + 1}`} />
                <Gradient />
              </Slide>
            ))}
          </SlideWrapper>
          <IndicatorWrapper>
            <SliderIndicator
              total={SLIDES.length}
              current={currentSlide}
              onIndicatorClick={setCurrentSlide}
              size="medium"
            />
          </IndicatorWrapper>
        </Slider>

        <FormLogin>
          <Header>
            <LogoWrapper>
              <Image src={Logo} alt="digidreams" />
            </LogoWrapper>
            <Title>
              <Text variant="heading" level={1}>
                Employee Login
              </Text>
            </Title>
          </Header>

          <FormContent>
            <ChooseAccount>
              <Subtitle>
                <Text variant="body" level={4}>
                  Choose your account to start your shift.
                </Text>
              </Subtitle>

              {usersError ? (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <Text variant="body" level={4}>
                    Failed to load employees: {usersError}
                  </Text>
                  <Button onClick={handleRetryFetchUsers} size="small">
                    Retry
                  </Button>
                </div>
              ) : (
                <EmployeeShiftDropdown
                  data={employeeData}
                  onSelect={handleEmployeeSelect}
                  placeholder="Select Employee"
                  loading={usersLoading}
                />
              )}
            </ChooseAccount>

            <WrapperPin>
              <EnterPin>
                <Text variant="body" level={4}>
                  Enter your PIN to validate yourself.
                </Text>
              </EnterPin>

              <PinWrapper>
                <PinInput
                  length={PIN_LENGTH}
                  value={pin}
                  onChange={setPin}
                  onComplete={handlePinComplete}
                  disabled={isLoading || usersLoading || !selectedEmployee}
                  autoFocus
                  mask
                />
              </PinWrapper>

              <DialPadWrapper>
                <DialPad
                  onNumberClick={handleNumberClick}
                  onDeleteClick={handleDeleteClick}
                  onDotClick={handleClearClick}
                  disabled={isLoading || usersLoading || !selectedEmployee}
                />
              </DialPadWrapper>
            </WrapperPin>

            <ButtonWrapper>
              <Button
                onClick={handleSubmit}
                disabled={!isFormValid() || usersLoading}
                variant="filled"
                size="large"
                className="shift-button"
              >
                {isLoading ? "Verifying..." : "Start Shift"}
              </Button>
            </ButtonWrapper>
          </FormContent>
        </FormLogin>
      </Card>

      {modal.variant === "error" && (
        <Modals
          isOpen={modal.show}
          onClose={handleModalClose}
          title={modal.title}
          message={modal.message}
          boldTexts={modal.boldTexts}
          primaryText="Continue"
          variant={modal.variant}
        />
      )}
    </ContainerLogin>
  );
}
