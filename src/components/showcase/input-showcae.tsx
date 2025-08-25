"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { TextInput, PinInput } from "@/components/common/input";

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--background);
  padding: 48px 16px;
`;

const MaxWidthWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 16px 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: var(--text-muted);
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Section = styled.div`
  background-color: var(--background);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid var(--border);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 32px 0;
  text-align: center;
`;

const StateGroup = styled.div`
  margin-bottom: 32px;
`;

const StateLabel = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 16px 0;
`;

const InteractiveSection = styled.div`
  padding-top: 16px;
  border-top: 1px solid var(--border);
`;

const InteractiveLabel = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary);
  margin: 0 0 16px 0;
`;

const ValueDisplay = styled.p`
  font-size: 14px;
  color: var(--text-muted);
  margin: 8px 0 0 0;
`;

export default function InputShowcase() {
  const [textValue, setTextValue] = useState("");
  const [pinValue, setPinValue] = useState("");

  return (
    <Container>
      <MaxWidthWrapper>
        <Header>
          <Title>Reusable Input Components</Title>
          <Subtitle>
            Demonstrating Text and PIN input components with various states
            using Styled Components
          </Subtitle>
        </Header>

        <Grid>
          <Section>
            <SectionTitle>Text Form</SectionTitle>

            <StateGroup>
              <StateLabel>Default</StateLabel>
              <TextInput
                label="Label"
                placeholder="Placeholder"
                caption="This is an text caption or error"
              />
            </StateGroup>

            <StateGroup>
              <StateLabel>Filled</StateLabel>
              <TextInput
                label="Label"
                placeholder="Placeholder"
                caption="This is an text caption or error"
                value="Sample filled text"
                onChange={() => {}}
              />
            </StateGroup>

            <StateGroup>
              <StateLabel>Active</StateLabel>
              <TextInput
                label="Label"
                placeholder="Placeholder"
                caption="This is an text caption or error"
                state="active"
              />
            </StateGroup>

            <StateGroup>
              <StateLabel>Disabled</StateLabel>
              <TextInput
                label="Label"
                placeholder="Placeholder"
                caption="This is an text caption or error"
                disabled
              />
            </StateGroup>

            <StateGroup>
              <StateLabel>Error</StateLabel>
              <TextInput
                label="Label"
                placeholder="Placeholder"
                error="This is an text caption or error"
              />
            </StateGroup>

            <InteractiveSection>
              <InteractiveLabel>Interactive Example</InteractiveLabel>
              <TextInput
                label="Type here to see states change"
                placeholder="Start typing..."
                caption="This input responds to your interaction"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
              />
            </InteractiveSection>
          </Section>

          <Section>
            <SectionTitle>PIN Form</SectionTitle>

            <StateGroup>
              <StateLabel>Default</StateLabel>
              <PinInput
                label="Label"
                caption="This is an text caption or error"
              />
            </StateGroup>

            <StateGroup>
              <StateLabel>Filled</StateLabel>
              <PinInput
                label="Label"
                caption="This is an text caption or error"
                value="123456"
                onChange={() => {}}
              />
            </StateGroup>

            <StateGroup>
              <StateLabel>Active</StateLabel>
              <PinInput
                label="Label"
                caption="This is an text caption or error"
                state="active"
              />
            </StateGroup>

            <StateGroup>
              <StateLabel>Error</StateLabel>
              <PinInput
                label="Label"
                error="This is an text caption or error"
                value="123456"
                onChange={() => {}}
              />
            </StateGroup>

            <StateGroup>
              <StateLabel>Disabled</StateLabel>
              <PinInput
                label="Label"
                caption="This is an text caption or error"
                disabled
              />
            </StateGroup>

            <InteractiveSection>
              <InteractiveLabel>Interactive Example</InteractiveLabel>
              <PinInput
                label="Enter PIN to see states change"
                caption="Try typing numbers to see the interaction"
                value={pinValue}
                onChange={setPinValue}
                onComplete={(value) => console.log("PIN Complete:", value)}
              />
              {pinValue && <ValueDisplay>Current PIN: {pinValue}</ValueDisplay>}
            </InteractiveSection>
          </Section>
        </Grid>
      </MaxWidthWrapper>
    </Container>
  );
}
