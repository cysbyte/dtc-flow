import { FC, useState } from "react";
import styled from "styled-components";
import OpacityOption from "@/components/barrage-setting/opacity-option";
import SpeedOption from "@/components/barrage-setting/speed-option";
import PositionOption from "@/components/barrage-setting/position-option";
import FontSizeOption from "@/components/barrage-setting/fontsize-option";

const Wrapper = styled.div`
  width: 375px;
  min-height: 325px;
  background-color: rgba(255, 255, 255, 1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  .title-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid rgba(224, 229, 238, 1);

    & > p {
      color: rgba(32, 36, 45, 1);
      font-size: 16px;
      font-weight: 500;
      font-family: PingFang SC;
      line-height: 22px;
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      & > p {
        color: rgba(80, 91, 113, 1);
        font-size: 12px;
        font-weight: 500;
        font-family: PingFang SC;
        line-height: 16px;
        margin-right: 3px;
      }
    }
  }

  .option-box {
    padding: 10px 0px 20px;
  }

  .action-box {
    display: flex;
    padding: 10px 20px;
    gap: 10px;
    & > button {
      flex: 1;
      padding: 11px;
      border-radius: 10px;
      border-width: 0px;
      font-size: 14px;
      font-weight: 400;
      font-family: PingFang SC;
      line-height: 20px;
    }
    & > button:first-child {
      background-color: rgba(224, 229, 238, 1);
      color: rgba(116, 130, 155, 1);
    }
    & > button:last-child {
      background-color: rgba(217, 40, 40, 1);
      color: rgba(255, 255, 255, 1);
    }
  }
`;

interface SettingProps {
  opacity: number;
  speed: number;
  positionOfScreen: "top" | "roll" | "bottom";
  fontSize: "small" | "normal" | "large" | "xlarge";
}

const BarrageSetting: FC<SettingProps> = (props) => {
  const [isSetting, setIsSetting] = useState(true);

  const handleClick = () => {
    setIsSetting(!isSetting);
  };
  return (
    <>
      {isSetting && (
        <Wrapper>
          <div className="title-box">
            <p>弹幕设置</p>
            <div onClick={handleClick}>
              <p>屏蔽词</p>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.00098 2.5L8.00098 6.5L4.00098 10.5"
                  stroke="#505B71"
                />
              </svg>
            </div>
          </div>
          <div className="option-box">
            <OpacityOption opacity={props.opacity} />
            <SpeedOption speed={props.speed} />
            <PositionOption position={props.positionOfScreen} />
            <FontSizeOption fontSize={props.fontSize} />
          </div>

          <div className="action-box">
            <button>取消</button>
            <button>确定</button>
          </div>
        </Wrapper>
      )}
      {!isSetting && (
        <Wrapper>
          <div className="title-box">
            <div onClick={handleClick}>
              <p>屏蔽词</p>
            </div>
            <button>添加</button>
          </div>
          <div className="action-box">
            <button>取消</button>
            <button>确定</button>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default BarrageSetting;
