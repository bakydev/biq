import React, { useState, useEffect, useCallback } from 'react';
import { APP_CONSTRAINTS, FIRST_LOAN_OFFER, LOAN_PARAMS } from '../../constants';
import { Loader } from '../Loader';
import {
  Container,
  Wrap,
  Flex,
  Label,
  Input,
  Line,
  List,
  Item,
  Title,
  Amount,
  Select,
} from './styled';

const LoanCalculator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loanConfig, setLoanConfig] = useState(null);
  const [loanData, setLoanData] = useState(null);

  const [amountVal, setAmountVal] = useState(0);
  const [termVal, setTermVal] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      getLoanConfig();
    }, 1500);
  }, []);

  useEffect(() => {
    if (loanConfig) {
      const { amountInterval, termInterval } = loanConfig;

      const amount = amountInterval.defaultValue;
      const term = termInterval.defaultValue;

      setAmountVal(() => {
        return amount;
      });
      setTermVal(() => {
        return term;
      });

      getData(amount, term);
    }
  }, [loanConfig]);

  useEffect(() => {
    getData(amountVal, termVal)
  }, [amountVal, termVal]);

  const getLoanConfig = async () => {
    setIsLoading(true);

    const res = await fetch(`${APP_CONSTRAINTS}`);
    const json = await res.json();

    setLoanConfig(() => {
      return json;
    })

    setIsLoading(false);
  };

  const getData = async (amountVal, termVal) => {
    const res = await fetch(`${FIRST_LOAN_OFFER}?${LOAN_PARAMS.AMOUNT}=${amountVal}&${LOAN_PARAMS.TERM}=${termVal}`);
    const json = await res.json();

    setLoanData(() => {
      return json;
    });
  };

  const handleAmountVal = useCallback((val) => {
    setAmountVal(val);
  }, []);

  const handleTermVal = useCallback((val) => {
    setTermVal(val);
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  return (
    <Container>
      <Wrap>
        <Flex>
          <Label>Amount</Label>
          <Select
            value={amountVal}
            onChange={e => handleAmountVal(e.target.value)}
          />
        </Flex>
        <Flex>
          <Input
            type="range"
            name="amount"
            min={loanConfig?.amountInterval?.min}
            max={loanConfig?.amountInterval?.max}
            step={loanConfig?.amountInterval?.step}
            value={amountVal}
            onChange={e => handleAmountVal(e.target.value)}
          />
        </Flex>
        <Flex>
          <Label>Number of Loan</Label>
          <Select
            value={termVal}
            onChange={e => handleTermVal(e.target.value)}
          />
        </Flex>
        <Flex>
          <Input
            type="range"
            name="term"
            min={loanConfig?.termInterval?.min}
            max={loanConfig?.termInterval?.max}
            step={loanConfig?.termInterval?.step}
            value={termVal}
            onChange={e => handleTermVal(e.target.value)}
          />
        </Flex>
        <Line/>
        <List>
          {loanData ? Object.keys(loanData).map((obj, idx) => (
            <Item key={idx}>
              <Title>{obj}</Title>
              <Amount>{loanData[obj]}</Amount>
            </Item>
          )) : <div>Loan data are empty</div>}
        </List>
      </Wrap>
    </Container>
  );
};

export default LoanCalculator;
