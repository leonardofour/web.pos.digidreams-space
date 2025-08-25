"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Radio from "@/components/common/radio/radio";
import Toggle from "@/components/common/toggle/toggle";
import Checkbox from "@/components/common/checkbox/checkbox";
import Text from "../common/text/text";

const ExampleContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background: var(--background);
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: var(--text);
  margin-bottom: 20px;
`;

const Demo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background: var(--background);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--border);
`;

const StateDisplay = styled.div`
  margin-left: 20px;
  padding: 10px;
  background: var(--card-bg);
  border-radius: 4px;
`;

const TogglesPage = () => {
  const [radioValue, setRadioValue] = useState("option1");
  const [toggleChecked, setToggleChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <ExampleContainer>
      <Section>
        <Title>
          <Text variant="title" level={1}>
            Radio
          </Text>
        </Title>
        <Demo>
          <Radio
            name="example"
            value="option1"
            checked={radioValue === "option1"}
            onChange={setRadioValue}
          />
          <Radio
            name="example"
            value="option2"
            checked={radioValue === "option2"}
            onChange={setRadioValue}
          />
          <StateDisplay>
            <Text variant="body" level={2}>
              Selected: {radioValue}
            </Text>
          </StateDisplay>
        </Demo>
      </Section>

      <Section>
        <Title>
          <Text variant="title" level={1}>
            Toggle
          </Text>
        </Title>
        <Demo>
          <Toggle checked={toggleChecked} onChange={setToggleChecked} />
          <Toggle
            checked={!toggleChecked}
            onChange={(checked) => setToggleChecked(!checked)}
          />
          <StateDisplay>
            <Text variant="body" level={2}>
              Toggle 1: {toggleChecked ? "ON" : "OFF"} | Toggle 2:{" "}
              {!toggleChecked ? "ON" : "OFF"}
            </Text>
          </StateDisplay>
        </Demo>
      </Section>

      <Section>
        <Title>
          <Text variant="title" level={1}>
            Checkbox
          </Text>
        </Title>
        <Demo>
          <Checkbox checked={checkboxChecked} onChange={setCheckboxChecked} />
          <Checkbox
            checked={!checkboxChecked}
            onChange={(checked) => setCheckboxChecked(!checked)}
          />
          <StateDisplay>
            <Text variant="body" level={2}>
              Checkbox 1: {checkboxChecked ? "Checked" : "Unchecked"} | Checkbox
              2: {!checkboxChecked ? "Checked" : "Unchecked"}
            </Text>
          </StateDisplay>
        </Demo>
      </Section>
    </ExampleContainer>
  );
};

export default TogglesPage;
