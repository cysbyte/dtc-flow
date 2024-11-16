import styled from 'styled-components'
import hero from '@/assets/home/hero/hero.svg'
import heroMoblie from '@/assets/home/hero/hero-mobile.svg'
import heroText from '@/assets/home/hero/hero-text.svg'
import heroTextMobile from '@/assets/home/hero/hero-text-mobile.svg'

const Hero = () => {
    const Wrapper = styled.section`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        gap: 0rem;
        margin-top: 3.5rem;
        @media screen and (max-width: 800px) {
            flex-direction: column;
            align-items: center;
            width: 100%;
            align-items: start;
            margin-top: 2rem;
        }
        
        .left-box {
            width: 50%;
            @media screen and (max-width: 800px) {
                width: 100%;
            }
            .hero-text {
                width: auto;
                display: block;
                @media screen and (max-width: 800px) {
                    display: none;
                }
            }
            .hero-text-mobile {
                width: auto;
                display: none;
                @media screen and (max-width: 800px) {
                    display: block;
                }
            }
            & > h1 {
                font-family: Ubuntu;
                font-size: 58px;
                font-weight: 700;
                line-height: 80px;
                letter-spacing: 0.02em;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #282C4B;
            }
            & > h6 {
                font-family: Ubuntu;
                font-size: 16px;
                font-weight: 500;
                line-height: 18.38px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #1A0C84;
                margin-top: 1rem;
                @media screen and (max-width: 800px) {
                    font-family: Ubuntu;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 13.79px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                }
            }
            & > p {
                font-family: Ubuntu;
                font-size: 20px;
                font-weight: 400;
                line-height: 36px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #747582;
                margin-top: 1rem;
                @media screen and (min-width: 800px) and (max-width: 1240px) {
                    font-size: 18px;
                    line-height: 30px;
                }
                @media screen and (max-width: 800px) {
                    font-family: Ubuntu;
                    font-size: 10px;
                    font-weight: 400;
                    line-height: 18px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                }
            }
            .supercharge-box {
                display: inline-block;
                margin-top: 1.8rem;
                width: auto;
                & > button {
                    background-image: linear-gradient(to right, #FF698D, #FB3F6C);
                    padding: 1rem 2rem;
                    border: 1px solid #FFFFFFCC;
                    border-radius: 192px;
                    font-family: Ubuntu;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 18.38px;
                    letter-spacing: 0.02em;
                    text-align: center;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF;
                    text-wrap: nowrap;
                    @media screen and (max-width: 800px) {
                        font-family: Ubuntu;
                        font-size: 12px;
                        font-weight: 400;
                        line-height: 13.79px;
                        letter-spacing: 0.02em;
                        text-align: center;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                    }
                }
                & > p {
                    font-family: Ubuntu;
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    margin: auto;
                    color: #999999;
                    text-align: center;
                    margin-top: 0.3rem;
                    @media screen and (max-width: 800px) {
                        font-family: Ubuntu;
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 20px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        text-align: center;
                        margin-top: 0.1rem;
                    }
                }
            }
        }
        .right-img {
            display: block;
            width: auto;
            margin-top: -5rem;
            @media screen and (max-width: 800px) {
                display: none;
            }
        }
        .right-img-mobile {
            display: none;
            width: auto;
            margin-top: 2rem;
            @media screen and (max-width: 800px) {
                display: block;
            }
        }
    `
    return (
        <Wrapper>
            <div className='left-box'>
                {/* <h1>AI Powered Digital Marketing</h1> */}
                <img className='hero-text' src={heroText} alt="" />
                <img className='hero-text-mobile' src={heroTextMobile} alt="" />
                <h6>Target Audience. Organic Growth. Guaranteed Results.</h6>
                <p>With AI precision, D2CFlow delivers your social posts directly to the people who matter most—driving consistent growth and amplifying your brand’s impact, one targeted post at a time.</p>
                <img className='right-img-mobile' src={heroMoblie} alt="" />
                <div className='supercharge-box'>
                    <button>Supercharge Your Brand!</button>
                    <p>*No Risk Money Back Guarantee </p>
                </div>
            </div>

            <img className='right-img' src={hero} alt="" />

        </Wrapper>
    )
}

export default Hero