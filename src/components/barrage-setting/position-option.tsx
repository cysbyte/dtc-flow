"use client";

import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

const SettingOptionWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  margin-top: 10px;
  & > p:first-child {
    width: auto;
    flex: 2;
    font-family: PingFang SC;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: rgba(80, 91, 113, 1);
    text-align: left;
  }
  .progress-box {
    width: 100%;
    height: 15px;
    display: flex;
    align-items: center;
    flex: 5;
    position: relative;
    .position-tip {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 110%;
      -ms-transform: translate(-4%, 100%);
      transform: translate(-4%, 100%);
      & > p {
        color: rgba(155, 167, 189, 1);
        font-size: 12px;
        line-height: 14px;
        text-align: center;
      }
    }
    .progress {
      position: relative;
      width: 100%;
      height: 4px;
      background-color: rgba(224, 229, 238, 1);
      border-radius: 10px;
      border-radius: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > span {
        background-color: rgba(155, 167, 189, 1);
        width: 2px;
        height: 100%;
      }

      .flag {
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 8px;
        background-color: #0b0125;
        left: 0;
        -ms-transform: translate(-25%, 0%);
        transform: translate(-25%, 0%);
      }
    }
  }

  & > p:last-child {
    width: auto;
    flex: 1.5;
    font-family: PingFang SC;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: rgba(80, 91, 113, 1);
    text-align: right;
  }
`;

interface PositionProps {
  position: string;
}

const PositionOption: FC<PositionProps> = (props) => {
  const getPositionTitle = (position: string) => {
    let result = "顶部";
    switch (position) {
      case "top":
        result = "顶部";
        break;
      case "roll":
        result = "滚动";
        break;
      case "bottom":
        result = "底部";
        break;
    }
    return result;
  };

  const getLeft = (position: string): number => {
    let result = 0;
    switch (position) {
      case "top":
        result = 0;
        break;
      case "roll":
        result = 50;
        break;
      case "bottom":
        result = 100;
        break;
    }
    return result;
  };

  useEffect(() => {
    setLeft(getLeft(props.position));
    setPosition(props.position);
  }, []);

  const [position, setPosition] = useState(props.position);
  const [enableDrag, setEnableDrag] = useState(false);
  const [left, setLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setEnableDrag(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!enableDrag) return;
    const left1 = e.currentTarget.getBoundingClientRect().left;
    const x = e.clientX - left1;
    const clientWidth = e.currentTarget.clientWidth;
    if (x < 0 || x > clientWidth) return;
    const percent1 = (x * 100) / clientWidth;
    setLeft(Number(percent1.toFixed()));
  };

  const onMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    const left1 = e.currentTarget.getBoundingClientRect().left;
    const x = e.clientX - left1;
    setEnableDrag(false);
    const clientWidth = e.currentTarget.clientWidth;
    if (x < clientWidth / 4) {
      setLeft(0);
    } else if (x >= clientWidth / 4 && x < (clientWidth * 3) / 4) {
      setLeft(50);
    } else {
      setLeft(100);
    }
  };

  const onBlur = () => {
    setEnableDrag(false);
  };

  return (
    <SettingOptionWrapper>
      <p>屏幕位置</p>
      <div
        className="progress-box"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onBlur={onBlur}
      >
        <div className="progress">
          <span></span>
          <span></span>
          <span></span>

          <span className="flag" style={{ left: `${left}%` }}></span>
        </div>
        <div className="position-tip">
          <p>顶部</p>
          <p>滚动</p>
          <p>底部</p>
        </div>
      </div>
      <p>{getPositionTitle(position)}</p>
    </SettingOptionWrapper>
  );
};

export default PositionOption;
