import '../assets/index.less';
import '../assets/iconfont.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Steps, { Step } from '../src/index';

const container = document.getElementById('__react-content');
const description = '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';

const CustomStep = (props) => (
  <Step style={{ fontWeight: 'bold', fontStyle: 'italic' }} {...props} />
);

ReactDOM.render(
  <Steps current={1}>
    <Step title="已完成" description={description} />
    <Step title="进行中" description={description} />
    <CustomStep title="进行中" description={description} />
    <Step title="待运行" description={description} />
  </Steps>
, container);
