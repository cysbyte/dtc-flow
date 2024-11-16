"use client";

import React, { FC, useState } from "react";
import styled from "styled-components";

const SettingOptionWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
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
    & > div:nth-child(1) {
      position: relative;
      width: 100%;
      height: 4px;
      background-color: rgba(224, 229, 238, 1);
      border-radius: 10px;
      border-radius: 10%;

      & > span:first-child {
        position: absolute;
        height: 100%;
        border-radius: 4px;
        width: 60%;
        background-color: rgba(217, 40, 40, 1);
      }
      & > span:last-child {
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 8px;
        background-color: #0b0125;
        left: 60%;
        -ms-transform: translate(-25%, -35%);
        transform: translate(-25%, -35%);
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

interface SpeedProps {
  speed: number;
}

const SpeedOption: FC<SpeedProps> = (props) => {
  const [percent, setPercent] = useState(props.speed || 50);
  const [enableDrag, setEnableDrag] = useState(false);
  const [left, setLeft] = useState(props.speed || 50);
  const [width, setWidth] = useState(props.speed || 50);

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
    setPercent(Number(percent1.toFixed()));
    setLeft(Number(percent1.toFixed()));
    setWidth(Number(percent1.toFixed()));
  };

  const onMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setEnableDrag(false);
  };

  const onBlur = () => {
    setEnableDrag(false);
  };

  return (
    <SettingOptionWrapper>
      <p>弹幕速度</p>
      <div
        className="progress-box"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onBlur={onBlur}
      >
        <div>
          <span style={{ width: `${width}%` }}></span>
          <span style={{ left: `${left}%` }}></span>
        </div>
      </div>
      <p>{percent}%</p>
    </SettingOptionWrapper>
  );
};

export default SpeedOption;
