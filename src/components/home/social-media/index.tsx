import styled from 'styled-components'
import left from '@/assets/home/social-media/left1.svg'
import leftMobile from '@/assets/home/social-media/left-mobile1.svg'
import check from '@/assets/home/social-media/check.svg'
import Plan from './Plan'
import Subscribe from './Subscribe'

const SocialMedia = () => {
    const list = [
        'Weekly Content Creation & Posting ',
        'Engaging posts on TikTok and Instagram designed to connect with your audience.',
        'Guaranteed Follower Growth – Meet set follower growth targets within three months, guaranteed.',
        'In-Depth Engagement Metrics – Receive detailed metrics on likes, comments, and shares to see exactly how your audience responds.'
    ]
    const Wrapper = styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        margin-top: 5rem;
        gap: 1rem;
        @media screen and (max-width: 800px) {
            margin-top: 3rem;
            gap: 0.5rem;
        }
        
        & > h1 {
            font-family: Ubuntu;
            font-size: 40px;
            font-weight: 700;
            line-height: 53px;
            text-align: center;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #1A0C84;
            @media screen and (max-width: 800px) {
                font-family: Ubuntu;
                font-size: 20px;
                font-weight: 700;
                line-height: 30px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                width: 100%;
            }
        }
        & > p {
            font-family: Inter;
            font-size: 18px;
            font-weight: 500;
            line-height: 27px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #505050;
            @media screen and (max-width: 800px) {
                font-family: Inter;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
            }
        }
        .detail-container {
            padding: 1.8rem 1rem 1.8rem 2.3rem;
            border-top: 2px solid #FB3F6C;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 2rem;
            box-shadow: 0px 0px 90px 0px #00000014;
            background-color: white;
            @media screen and (max-width: 800px) {
                padding: 0rem 0.5rem;
                margin-top: 1rem;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
            }
            .left-img {
                display: block;
                width: auto;
                @media screen and (max-width: 800px) {
                    display: none;
                }
            }
            .left-img-mobile {
                display: none;
                width: auto;
                @media screen and (max-width: 800px) {
                    display: block;
                }
            }
            .right-box {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
                gap: 1rem;
                margin-left: 5rem;
                @media screen and (max-width: 800px) {
                    margin-left: 0rem;
                }
                h5 {
                    font-family: Inter;
                    font-size: 18px;
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
                .list-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: start;
                    gap: 1rem;
                    margin-top: 1rem;
                    @media screen and (max-width: 800px) {
                        gap: 1rem;
                        margin-top: 0.6rem;
                    }
                    .item-box {
                        display: flex;
                        justify-content: center;
                        align-items: start;
                        gap: 0.5rem; 
                        img {
                            width: auto;
                            @media screen and (max-width: 800px) {
                                margin-top: 0.1rem;
                                width: 18px;
                            }
                        }
                        
                        p {
                            font-family: Inter;
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 27px;
                            text-align: left;
                            text-underline-position: from-font;
                            text-decoration-skip-ink: none;
                            color: #6A6A6A;
                            @media screen and (max-width: 800px) {
                                font-family: Inter;
                                font-size: 14px;
                                font-weight: 400;
                                line-height: 20px;
                                text-align: left;
                                text-underline-position: from-font;
                                text-decoration-skip-ink: none;
                            }
                        }
                    }
                }
            }
        }
    `
    return (
        <Wrapper>
            <h1>Social Media Growth Package</h1>
            <p>Build Buzz and Attract New Customers on TikTok and Instagram.</p>
            <div className='detail-container'>
                <div className='back-div'></div>
                <img className='left-img' src={left} alt="" />
                <img className='left-img-mobile' src={leftMobile} alt="" />
                <div className='right-box'>
                    <div>
                        <h5>What you get</h5>
                        <div className='list-box'>
                            {
                                list.map((item, index) => (
                                    <div className='item-box' key={index}>
                                        
                                            <img src={check} alt="" />
                                        
                                        <p>{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <Plan/>
                    <Subscribe/>
                </div>
            </div>
        </Wrapper>
    )
}

export default SocialMedia