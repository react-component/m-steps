import '../assets/index.less';
import '../assets/iconfont.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Steps, { Step } from '../src/';

const container = document.getElementById('__react-content');
const description = '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';

ReactDOM.render(
  <div>
    <Steps current={1}>
      <Step title="已完成" />
      <Step title="进行中" />
      <Step title="待运行" />
      <Step title="待运行" />
    </Steps>
    <Steps current={1} style={{ marginTop: 40 }}>
      <Step title="已完成" description={description} />
      <Step title="进行中" description={description} />
      <Step title="待运行" description={description} />
      <Step title="待运行" description={description} />
    </Steps>
    <Steps current={1} style={{ marginTop: 40 }} status="error">
      <Step title="已完成" description={description} />
      <Step title="进行中" description={description} />
      <Step title="待运行" description={description} />
      <Step title="待运行" description={description} />
    </Steps>
  </div>
, container);
