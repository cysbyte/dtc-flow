import React from 'react'
import styled from 'styled-components'
import why from '@/assets/home/why/why.svg'

const Why = () => {
    const Wrapper = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        margin-left: 2rem;
        margin-top: 0rem;
        @media screen and (max-width: 800px) {
            flex-direction: column;
            align-items: center;
            margin-left: 0rem;
            margin-top: 1rem;
        }
        img {
            display: block;
            @media screen and (max-width: 800px) {
                display: none;
            }
        }
        .right-box {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
            gap: 1rem;
            @media screen and (max-width: 800px) {
                gap: 0.6rem;
            }
            margin-top: 2rem;
            & > h3 {
                font-family: Ubuntu;
                font-size: 40px;
                font-weight: 700;
                line-height: 53px;
                letter-spacing: 0.02em;
                text-align: center;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #1A0C84;
                text-align: left;
                @media screen and (max-width: 800px) {
                    font-family: Ubuntu;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 30px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                }
            }
            & > p {
                font-family: Ubuntu;
                font-size: 18px;
                font-weight: 400;
                line-height: 27px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #747582;
                @media screen and (max-width: 800px) {
                    font-family: Ubuntu;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 19px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                }
            }
        }
    `
    return (
        <Wrapper>
            <img src={why} alt="" />
            <div className='right-box'>
                <h3>Why D2C Flow</h3>
                <p>With AI-powered tools and proven strategies, we optimize the delivery of your content, ensuring it reaches the right audience at the right time. Whether you're looking to increase local business visibility, drive targeted traffic, or monetize your digital presence, we’re your growth partners every step of the way. D2CFlow maximizes your reach through precision targeting, helping you hit key milestones and scale your business effectively.</p>
            </div>
        </Wrapper>
    )
}

export default Why