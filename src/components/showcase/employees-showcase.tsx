"use client";

import styled from "styled-components";
import EmployeeShiftDropdown, {
  Employee,
  EmployeeData,
} from "../common/employees/employees";
import Text from "../common/text/text";

const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
  padding: 40px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.div`
  color: var(--text);
  margin-bottom: 8px;
`;

const Subtitle = styled.div`
  color: var(--netral-600);
  margin-bottom: 40px;
`;

const ExampleSection = styled.div`
  background: var(--background);
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
`;

const SectionTitle = styled.div`
  color: var(--text);
  margin-bottom: 16px;
`;

const ExamplePage: React.FC = () => {
  const employeeData: EmployeeData = {
    employees: [
      {
        id: 1,
        displayName: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/40?u=1",
        shift: "morning",
      },
      {
        id: 2,
        displayName: "Michael Chen",
        avatar: "https://i.pravatar.cc/40?u=2",
        shift: "afternoon",
      },
      {
        id: 3,
        displayName: "Emma Williams",
        avatar: "https://i.pravatar.cc/40?u=3",
        shift: "night",
      },
      {
        id: 4,
        displayName: "David Rodriguez",
        avatar: "https://i.pravatar.cc/40?u=4",
        shift: "morning",
      },
      {
        id: 5,
        displayName: "Lisa Anderson",
        avatar: "https://i.pravatar.cc/40?u=5",
        shift: "afternoon",
      },
      {
        id: 6,
        displayName: "James Wilson",
        avatar: "https://i.pravatar.cc/40?u=6",
        shift: "night",
      },
    ],
  };

  const handleEmployeeSelect = (employee: Employee): void => {
    console.log("Selected employee:", employee);
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <Title>
          <Text variant="title" level={1}>
            Employee Shift Dropdown
          </Text>
        </Title>
        <Subtitle>
          <Text variant="subtitle" level={3}>
            Reusable component untuk memilih employee berdasarkan shift kerja
          </Text>
        </Subtitle>

        <ExampleSection>
          <SectionTitle>
            <Text variant="title" level={1}>
              Basic Usage
            </Text>
          </SectionTitle>
          <EmployeeShiftDropdown
            data={employeeData}
            onSelect={handleEmployeeSelect}
            placeholder="Pilih Employee"
          />
        </ExampleSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ExamplePage;
