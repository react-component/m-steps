/* eslint react/no-did-mount-set-state: 0 */
import React, { cloneElement, Children, Component } from 'react';
import classNames from 'classnames';

export interface IStepsProps {
  prefixCls?: string;
  className?: string;
  iconPrefix?: string;
  direction?: string;
  labelPlacement?: string;
  status?: string;
  size?: string;
  progressDot?: boolean | Function;
  style?: any;
  current?: number;
}

export default class Steps extends Component<IStepsProps, any> {
  static defaultProps = {
    prefixCls: 'rmc-steps',
    iconPrefix: 'rmc',
    direction: 'horizontal',
    labelPlacement: 'horizontal',
    current: 0,
    status: 'process',
    size: '',
    progressDot: false,
  };

  render() {
    const {
      prefixCls, style = {}, className, children, direction,
      labelPlacement, iconPrefix, status, size, current, progressDot,
      ...restProps,
    } = this.props;

    const filteredChildren = React.Children.toArray(children).filter(c => !!c);
    const adjustedlabelPlacement = !!progressDot ? 'vertical' : labelPlacement;
    const classString = classNames(prefixCls, `${prefixCls}-${direction}`, className, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-label-${adjustedlabelPlacement}`]: direction === 'horizontal',
      [`${prefixCls}-dot`]: !!progressDot,
    });

    return (
      <div className={classString} style={style} {...restProps}>
        {
          Children.map(filteredChildren, (child: any, index) => {
            if (!child) {
              return null;
            }
            const childProps = {
              stepNumber: `${index + 1}`,
              prefixCls,
              iconPrefix,
              wrapperStyle: style,
              progressDot,
              ...child.props,
            };

            // fix tail color
            if (status === 'error' && index === current! - 1) {
              childProps.className = `${prefixCls}-next-error`;
            }
            if (!child.props.status) {
              if (index === current) {
                childProps.status = status;
              } else if (index < current!) {
                childProps.status = 'finish';
              } else {
                childProps.status = 'wait';
              }
            }
            return cloneElement(child, childProps);
          })
        }
      </div>
    );
  }
}
