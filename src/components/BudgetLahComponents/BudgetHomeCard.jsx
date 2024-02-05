import { useState, useContext } from "react";
import { Card, Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { ThemeContext, ThemeProvider } from "../../styles/ThemeContext";

export default function BudgetHomeCard() {
  const [currency, setCurrency] = useState("USD");
  const [incomeTitle, setIncomeTitle] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [allocationTitle, setAllocationTitle] = useState("");
  const [allocationAmount, setAllocationAmount] = useState("");

  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <Card style={{ backgroundColor: theme.background, color: theme.primary }}>
        <Card.Body>
          <Form>
            {/* Currency Dropdown */}
            <Form.Group className="mb-3 d-flex align-items-center lh-lg">
              <Form.Label
                className="fw-bold me-2"
                style={{ lineHeight: "1.5" }}
              >
                Currency:
              </Form.Label>
              <DropdownButton
                title={currency}
                onSelect={(key) => setCurrency(key)}
                className="btn btn-sm"
              >
                <Dropdown.Item key="MYR" eventKey="MYR">
                  MYR
                </Dropdown.Item>
                <Dropdown.Item key="USD" eventKey="USD">
                  USD
                </Dropdown.Item>
                <Dropdown.Item key="EUR" eventKey="EUR">
                  EUR
                </Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            {/* Display Balance */}
            <div className="mb-3">
              <strong>Your Balance:</strong> {currency} 5000
            </div>

            {/* Display Monthly Income */}
            <div className="mb-3">
              <strong>Monthly Income:</strong> {currency} 3200
            </div>

            {/* Display Monthly Expenses */}
            <div className="mb-3">
              <strong>Monthly Expenses:</strong> {currency} 2100
            </div>

            {/* Display Monthly Budget Allocation */}
            <div className="mb-5">
              <strong>Monthly Budget Allocation:</strong> {currency} 1100
            </div>

            {/* Add Income Form */}
            <Form.Group className="mb-3">
              <Form.Label>Enter income title:</Form.Label>
              <Form.Control
                type="text"
                value={incomeTitle}
                onChange={(e) => setIncomeTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter income amount:</Form.Label>
              <Form.Control
                type="number"
                value={incomeAmount}
                onChange={(e) => setIncomeAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Choose Category:</Form.Label>
              <Form.Control as="select">
                <option>Gift</option>
                <option>Salary</option>
                <option>Bonus</option>
              </Form.Control>
            </Form.Group>
            <Button className="mb-5" variant="success">
              Submit
            </Button>

            {/* Add Expense Form */}
            <Form.Group className="mb-3">
              <Form.Label>Enter expense title:</Form.Label>
              <Form.Control
                type="text"
                value={expenseTitle}
                onChange={(e) => setExpenseTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter expense amount:</Form.Label>
              <Form.Control
                type="number"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Choose Category:</Form.Label>
              <Form.Control as="select">
                <option>Entertainment</option>
                <option>Necessities</option>
              </Form.Control>
            </Form.Group>
            <Button className="mb-5" variant="danger">
              Submit
            </Button>

            {/* Budget Allocation Form */}
            <Form.Group className="mb-3">
              <Form.Label>Enter allocation title:</Form.Label>
              <Form.Control
                type="text"
                value={allocationTitle}
                onChange={(e) => setAllocationTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter allocation amount:</Form.Label>
              <Form.Control
                type="number"
                value={allocationAmount}
                onChange={(e) => setAllocationAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Choose Category:</Form.Label>
              <Form.Control as="select">
                <option>Saving</option>
                <option>Investments</option>
                <option>Insurance</option>
              </Form.Control>
            </Form.Group>
            <Button className="mb-5" variant="primary">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </ThemeProvider>
  );
}
