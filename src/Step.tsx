import React from 'react';
import classNames from 'classnames';

function isString(str) {
  return typeof str === 'string';
}

export interface IStepProps {
  className?: string;
  prefixCls?: string;
  style?: any;
  wrapperStyle?: any;
  itemWidth?: number | string;
  status?: string;
  iconPrefix?: string;
  icon?: React.ReactNode;
  adjustMarginRight?: number | string;
  stepNumber?: number;
  description?: any;
  title?: any;
  progressDot?: boolean | Function;
}

export default class Step extends React.Component<IStepProps, any> {
  renderIconNode() {
    const {
      prefixCls, progressDot, stepNumber, status, title, description, icon,
      iconPrefix,
    } = this.props;
    let iconNode;
    const iconClassName = classNames(`${prefixCls}-icon`, `${iconPrefix}icon`, {
      [`${iconPrefix}icon-${icon}`]: icon && isString(icon),
      [`${iconPrefix}icon-check`]: !icon && status === 'finish',
      [`${iconPrefix}icon-cross`]: !icon && status === 'error',
    });
    const iconDot = <span className={`${prefixCls}-icon-dot`}></span>;
    // `progressDot` enjoy the highest priority
    if (progressDot) {
      if (typeof progressDot === 'function') {
        iconNode = (
          <span className={`${prefixCls}-icon`}>
            {progressDot(iconDot, { index: stepNumber! - 1, status, title, description })}
          </span>
        );
      } else {
        iconNode = <span className={`${prefixCls}-icon`}>{iconDot}</span>;
      }
    } else if (icon && !isString(icon)) {
      iconNode = <span className={`${prefixCls}-icon`}>{icon}</span>;
    } else if (icon || status === 'finish' || status === 'error') {
      iconNode = <span className={iconClassName} />;
    } else {
      iconNode = <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
    }
    return iconNode;
  }
  render() {
    const {
      className, prefixCls, style, itemWidth,
      status = 'wait', iconPrefix, icon, wrapperStyle,
      adjustMarginRight, stepNumber,
      description, title, progressDot, ...restProps,
    } = this.props;

    const classString = classNames(
      `${prefixCls}-item`,
      `${prefixCls}-item-${status}`,
      className,
      { [`${prefixCls}-item-custom`]: icon },
    );
    const stepItemStyle = { ...style };
    if (itemWidth) {
      stepItemStyle.width = itemWidth;
    }
    if (adjustMarginRight) {
      stepItemStyle.marginRight = adjustMarginRight;
    }
    return (
      <div
        {...restProps}
        className={classString}
        style={stepItemStyle}
      >
        <div className={`${prefixCls}-item-tail`} />
        <div className={`${prefixCls}-item-icon`}>
          {this.renderIconNode()}
        </div>
        <div className={`${prefixCls}-item-content`}>
          <div className={`${prefixCls}-item-title`}>
            {title}
          </div>
          {description && <div className={`${prefixCls}-item-description`}>{description}</div>}
        </div>
      </div>
    );
  }
}
