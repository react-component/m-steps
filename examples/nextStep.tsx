import '../assets/index.less';
import '../assets/iconfont.less';
import './nextStep.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Steps, { Step } from '../src/index';

const container = document.getElementById('__react-content');

function generateRandomSteps() {
  const n = Math.floor(Math.random() * 3) + 3;
  const arr: Array<{}> = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      title: `步骤${(i + 1)}`,
    });
  }
  return arr;
}
const steps = generateRandomSteps();

class MyForm extends React.Component {
  stepsRefs: any;

  state = {
    currentStep: Math.floor(Math.random() * steps.length),
  };
  /*
  componentDidMount() {
    // You can dynamically set tail's left position based on main's width for each step.
    this.stepsRefs.forEach(s => {
      if (s.refs.tail) {
        s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
      }
    });
  }
  */
  nextStep = () => {
    let s = this.state.currentStep + 1;
    if (s === steps.length) {
      s = 0;
    }
    this.setState({
      currentStep: s,
    });
  }
  render() {
    const cs = this.state.currentStep;
    this.stepsRefs = [];
    return (
      <form className="my-step-form">
        <div>这个demo随机生成3~6个步骤，初始随机进行到其中一个步骤</div>
        <div>当前正在执行第{cs + 1}步</div>
        <div className="my-step-container">
          <Steps current={cs}>
            {
              steps.map((s: any, i) => {
                return (
                  <Step ref={c => this.stepsRefs[i] = c}
                    key={i}
                    title={s.title}
                  />
                );
              })
            }
          </Steps>
        </div>

        <div><button type="button" onClick={this.nextStep}>下一步</button></div>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, container);
