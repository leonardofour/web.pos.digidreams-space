import React from "react";
import { TabsContainer, TabButton } from "./tabs.styled";
import Text from "../text/text";

export interface Tab {
  id: string;
  label: string;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: "separated" | "contained";
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "separated",
}) => {
  return (
    <TabsContainer $variant={variant}>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          $isActive={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          $variant={variant}
        >
          <Text variant="subtitle" level={4}>{tab.label}</Text>
        </TabButton>
      ))}
    </TabsContainer>
  );
};
