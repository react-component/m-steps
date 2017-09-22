import '../assets/index.less';
import '../assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from '../src/index';

const Icon = ({ type }) => <i className={`rcicon rcicon-${type}`} />;

ReactDOM.render(
  <Steps current={1}>
    <Step title="步骤1" icon={<Icon type="cloud" />} />
    <Step title="步骤2" icon="apple" />
    <Step title="步骤3" icon="github" />
  </Steps>
, document.getElementById('__react-content'));
