import '../assets/index.less';
import '../assets/iconfont.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Steps, { Step } from '../src/index';

const container = document.getElementById('__react-content');
const Icon = ({ type }) => <i className={`rcicon rcicon-${type}`} />;

ReactDOM.render(
  <div>
    <Steps size="small" current={1}>
      <Step title="已完成" />
      <Step title="进行中" />
      <Step title="待运行" />
      <Step title="待运行" />
    </Steps>
    <Steps size="small" current={1} style={{ marginTop: 40 }}>
      <Step title="步骤1" icon={<Icon type="cloud" />} />
      <Step title="步骤2" icon="apple" />
      <Step title="步骤3" icon="github" />
    </Steps>
  </div>
, container);
