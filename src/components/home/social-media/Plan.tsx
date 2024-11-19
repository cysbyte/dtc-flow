import styled from 'styled-components'
import radioChecked from '@/assets/home/social-media/radio-checked.svg'
import radioUnchecked from '@/assets/home/social-media/radio-unchecked.svg'
import { useState } from 'react'

interface PlanProps {
    type: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
}

const Plan = (props: PlanProps) => {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 100%;
        .h5 {
            font-family: Inter;
            font-size: 16px;
            font-weight: 500;
            line-height: 27px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            @media screen and (max-width: 800px) {
                font-family: Inter;
                font-size: 14px;
                font-weight: 500;
                line-height: 27px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
            }
        }
        .buttons-container {
            padding: 1rem 0rem;
            border-bottom: 1px solid #E7E7E7;
            display: flex;
            justify-content: start;
            @media screen and (max-width: 800px) {
                padding: 0.5rem 0rem 1rem 0rem;
                justify-content: space-between;
            }
            align-items: center;
            gap: 0.5rem;
            width: 100%;
            .left-button {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 227px;
                @media screen and (max-width: 800px) {
                    width: 100%;
                }
                padding: 0.3rem 0.6rem;
                border: 1px solid #1A0C84;
                border-radius: 4px;
                .annual-box {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 27px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #000000;
                    padding: 0rem 0rem;
                    @media screen and (max-width: 800px) {
                        font-family: Inter;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 16px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        padding: 0.25rem 0rem;
                    }
                }  
                .best-value {
                    border-radius: 4px;
                    background-color: #74D33A;
                    padding: 0rem 0.3rem;
                    font-family: Inter;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 20px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    @media screen and (max-width: 800px) {
                        font-family: Inter;
                        font-size: 10px;
                        font-weight: 400;
                        line-height: 10px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        border-radius: 2px;
                        padding: 0.2rem 0.2rem;
                    }
                } 
            }

            .right-button {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 227px;
                @media screen and (max-width: 800px) {
                    width: 100%;
                }
                padding: 0.3rem 0.6rem;
                border: 1px solid #C2C2C2;
                border-radius: 4px;
                .annual-box {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 27px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #000000;
                    padding: 0rem 0rem;
                    @media screen and (max-width: 800px) {
                        font-family: Inter;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 16px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        padding: 0.25rem 0rem;
                    }
                }  
            }
        }
    `
    return (
        <Wrapper>
            <h5>Select your plan</h5>
            <div className='buttons-container'>
                <div className='left-button' onClick={()=>props.setType('annual')}>
                    <div className='annual-box'>
                        <img src={props.type==='annual'?radioChecked:radioUnchecked} alt="" />
                        <p>Annual</p>
                    </div>
                    <p className='best-value'>Best Value</p>
                </div>
                <div className='right-button' onClick={()=>props.setType('quarter')}>
                    <div className='annual-box'>
                        <img src={props.type==='quarter'?radioChecked:radioUnchecked} alt="" />
                        <p>Quarterly</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Plan