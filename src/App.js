import React, { Component } from 'react';
import styled from 'styled-components';
import Button, { ButtonGroup } from './components/Button';
import Pill from './components/Pill';
import Container from './components/Container';

const Header = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const BillingButtonGroup = styled(ButtonGroup)`
  max-width: 500px;
  margin: 20px auto 60px;
  button {
    position: relative;
  }
`;

const BillingButton = styled(Button)`
  position: relative;
  font-weight: 600;
`;

const BillingPill = styled(Pill)`
  position: absolute;
  z-index: 1;
  text-transform: uppercase;
  width: 150px;
  bottom: -18px;
  left: 50%;
  margin-left: -84px;
`;

const PricingPlan = styled.div`
  display: flex;
  .plan {
    flex-grow: 1;
    border: 1px solid #e1e1e1;
    background-color: #ffffff;
    margin-bottom: 30px;
    width: 33.33%;
    @media (min-width: 768px) {
      width: 25%;
    }
    &:not(:last-child) {
      border-right: none;
    }
    &:last-child {
      border-left: none;
    }
    &__table {
      @media (max-width: 991px) {
        display: none;
      }
    }
    &--active {
      position: relative;
      border-right: 2px solid ${props => props.theme.primary.brandColor} !important;
      border-left: 2px solid ${props => props.theme.primary.brandColor} !important;
      border-bottom: 2px solid ${props => props.theme.primary.brandColor} !important;
      border-color: ${props => props.theme.primary.brandColor} !important;
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.18);
      h2, h4 {
        color: ${props => props.theme.primary.brandColor};
      }
      .plan__header {
        position: absolute;
        width: calc(100% + 4px);
        top: -20px;
        margin-left: -2px;
        background-color: ${props => props.theme.primary.brandColor};
        color: #ffffff;
      }
    }
    &__header {
      padding: 6px 0px;
      background-color: #e1e1e1;
      @media (max-width: 767px) {
        font-size: 8px;
      }
    }
    &__box {
      padding: 12px 20px;
      &:not(:first-child) {
        border-top: none;
      }
      &:not(:last-child) {
        border-bottom: 1px solid #e1e1e1
      }

    }
    &__image {
      height: 33px;
      margin-bottom: 10px;
      margin-top: 10px;
      @media (min-width: 768px) {
        height: 100px;
        margin-bottom: 10px;
        margin-top: 15px;
      }
    }
    &__table--spacing {
      padding: 51px 0px;
    }
    &__table__account-type {
      height: 136px;
    }
    &__table__price {
      height: 104px;
    }
  }
  .title-head, .title-row {
    font-size: 13px;
    @media (max-width: 767px) {
      font-size: 8px;
    }
  }
  .title-head {
    font-weight: bold;
    display: flex;
    height: 20px;
    @media (max-width: 767px) {
      justify-content: center;
      align-items: center;
    }
    &--center {
      justify-content: center;
      align-items: center;
    }
  }
  .title-row {
    background-color: #fafafa;
  }
  h2, h4 {
    font-weight: bold;
    @media (max-width: 767px) {
      font-weight: 400;
      margin: 10px 0px;
    }
  }
  h4 {
    @media (min-width: 768px) {
      font-size: 1.3em;
    }
  }
  h2 {
    @media (min-width: 768px) {
      font-size: 2.8em;
      margin: .7em 0;
    }
  }
  p {
    text-transform: lowercase;
    margin-bottom: 15px;
    @media (max-width: 767px) {
      font-size: 8px;
    }
  }
  ul {
    @media (max-width: 767px) {
      font-size: 8px;
    }
    @media (min-width: 768px) {
      margin: 0px 0px 50px;
    }
    li {
      padding: 6px 0px;
      :not(:last-child) {
        border-bottom: 1px solid #e1e1e1
      }
    }
  }
  button {
    margin-bottom: 15px;
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePricingPlan: 'ANNUALLY',
      pricingPlans: {
        MONTHLY: 15,
        ANNUALLY: 12,
      },
    };
  }

  handleButtonClick = (pricingPlan) => {
    this.setState({
      activePricingPlan: pricingPlan,
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <h1>
            Pricing Plans
          </h1>
          <p>
            Try any plan free for 30 days. Upgrade, downgrade or cancel at anytime
          </p>
        </Header>
        <BillingButtonGroup className="BillingButtonGroup" block>
          <BillingButton
            onClick={this.handleButtonClick.bind(this, 'MONTHLY')}
            active={this.state.activePricingPlan === 'MONTHLY'}
          >
            Billed Monthly
          </BillingButton>
          <BillingButton
            active={this.state.activePricingPlan === 'ANNUALLY'}
            onClick={this.handleButtonClick.bind(this, 'ANNUALLY')}
          >
            Billed Annually
            <BillingPill>
              save up to 25%
            </BillingPill>
          </BillingButton>
        </BillingButtonGroup>
        <PricingPlan>
          <div className="plan plan__table">
            <div className="plan__box">
              <div className="font-bold plan__table__account-type plan__table--spacing">
                Account Type
              </div>
            </div>
            <div className="plan__box">
              <div className="font-bold plan__table__price plan__table--spacing">
                Price
              </div>
            </div>
            <div className="plan__box title-head">
              Data
            </div>
            <div className="plan__box title-row">
              Data Uploading
            </div>
            <div className="plan__box title-row">
              Data Uploading
            </div>
            <div className="plan__box title-row">
              Data Uploading
            </div>
            <div className="plan__box title-row">
              Data Uploading
            </div>
            <div className="plan__box title-row">
              Data Uploading
            </div>
            <div className="plan__box title-head">
              Administration
            </div>
            <div className="plan__box title-row">
              Data Uploading
            </div>
            <div className="plan__box title-row">
              Data Uploading
            </div>
            <div className="plan__box title-row">
              Data Uploading
            </div>
            <div className="plan__box title-head">
              Administration
            </div>
            <div className="plan__box title-row">
              Data Uploading
            </div>
          </div>
          <div className="plan text-center">
            <div className="plan__box">
              <h4>Free</h4>
              <ul>
                <li>For occasional auditing</li>
                <li>Limited functionality</li>
                <li>Up to 5 users</li>
              </ul>
            </div>
            <div className="plan__box">
              <h2>$0</h2>
              <p className="font-italic font-small">per month, billed {this.state.activePricingPlan}</p>
              <Button>Start Free Trial</Button>
            </div>
            <div className="plan__box title-head title-head--center">
              Free $0 per/user/month
            </div>
            <div className="plan__box title-row">
              10MB per month
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-row">
              ✖
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-head hidden-xs">
              &nbsp;
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-row">
              ✖
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-head hidden-xs">
              &nbsp;
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
          </div>
          <div className="plan plan--active text-center">
            <div className="plan__header">✔ Most Popular</div>
            <div className="plan__box">
              <h4>Premium</h4>
              <ul>
                <li>Unlimited Data</li>
                <li>Epic Shit</li>
                <li>For 10 to 10,000 users</li>
              </ul>
            </div>
            <div className="plan__box">
              <h2>${this.state.pricingPlans[this.state.activePricingPlan]}</h2>
              <p className="font-italic font-small">per month, billed annually</p>
              <Button primary>Start Free Trial</Button>
            </div>
            <div className="plan__box title-head title-head--center">
              Premium $12 per/user/month
            </div>
            <div className="plan__box title-row">
              Unlimited Data
            </div>
            <div className="plan__box title-row">
              ✔<span className="visible-xs">&nbsp;Data Uploading</span>
            </div>
            <div className="plan__box title-row">
              ✔<span className="visible-xs">&nbsp;Data Uploading</span>
            </div>
            <div className="plan__box title-row">
              ✔<span className="visible-xs">&nbsp;Data Uploading</span>
            </div>
            <div className="plan__box title-row">
              ✔<span className="visible-xs">&nbsp;Data Uploading</span>
            </div>
            <div className="plan__box title-head hidden-xs">
              &nbsp;
            </div>
            <div className="plan__box title-row">
              ✔<span className="visible-xs">&nbsp;Data Uploading</span>
            </div>
            <div className="plan__box title-row">
              ✔<span className="visible-xs">&nbsp;Data Uploading</span>
            </div>
            <div className="plan__box title-row">
              ✔<span className="visible-xs">&nbsp;Data Uploading</span>
            </div>
            <div className="plan__box title-head hidden-xs">
              &nbsp;
            </div>
            <div className="plan__box title-row">
              ✔<span className="visible-xs">&nbsp;Data Uploading</span>
            </div>
          </div>
          <div className="plan text-center">
            <div className="plan__box">
              <h4>Enterprise</h4>
              <ul>
                <li>Unlimited Data</li>
                <li>Cool Stuff</li>
                <li>more than 10,000 users</li>
              </ul>
            </div>
            <div className="plan__box">
              <img className="plan__image" src="/images/building.png" alt="plan-building" />
              <p className="font-italic font-small">per month, billed {this.state.activePricingPlan}</p>
              <Button>Contact Us</Button>
            </div>
            <div className="plan__box title-head title-head--center">
              Custom Pricing
            </div>
            <div className="plan__box title-row">
              Unlimited Data
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-head hidden-xs">
              &nbsp;
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
            <div className="plan__box title-head hidden-xs">
              &nbsp;
            </div>
            <div className="plan__box title-row">
              ✔
            </div>
          </div>
        </PricingPlan>
      </Container>
    );
  }
}

export default App;
