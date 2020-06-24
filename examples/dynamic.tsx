import '../assets/index.less';
import '../assets/iconfont.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Steps, { Step } from '../src/index';

class App extends React.Component {
  state = {
    steps: [{
      title: '已完成',
      description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
    }, {
      title: '进行中',
      description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
    }, {
      title: '待运行',
      description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
    }, {
      title: '待运行',
      description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
    }],
  };
  addStep = () => {
    const steps = [...this.state.steps];
    steps.push({
      title: '待运行',
      description: '新的节点',
    });
    this.setState({ steps });
  }
  render() {
    return (
      <div>
        <button onClick={this.addStep}>Add new step</button>
        <Steps>{this.state.steps.map((step, i) => <Step key={i} {...step} />)}</Steps>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
