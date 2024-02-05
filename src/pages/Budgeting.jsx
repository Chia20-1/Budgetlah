import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from "react";
import BudgetHomeCard from "../components/BudgetLahComponents/BudgetHomeCard";
import StatisticsCard from "../components/BudgetLahComponents/StatisticsCard";
import AskFinnyCard from "../components/BudgetLahComponents/AskFinnyCard";

export default function BudgetPage() {
  const [activeTab, setActiveTab] = useState("budgetHome"); // Initialize to the card you want to show first

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="budgetHome">Budgeting</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="statistics">Statistics</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="askFinny">Ask Finny</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="budgetHome">
                <BudgetHomeCard />
              </Tab.Pane>
              <Tab.Pane eventKey="statistics">
                <StatisticsCard />
              </Tab.Pane>
              <Tab.Pane eventKey="askFinny">
                <AskFinnyCard />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}
