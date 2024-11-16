import styled from 'styled-components'

const Subscribe = () => {
    const Wrapper = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 800px) {
            flex-direction: column;
            align-items: start;
        }
        .left-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            .desc {
                font-family: Ubuntu;
                font-size: 12px;
                font-weight: 400;
                line-height: 27px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #747582;
                margin-top: 0px;
                @media screen and (max-width: 800px) {
                    font-family: Ubuntu;
                    font-size: 10px;
                    font-weight: 400;
                    line-height: 16px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    margin-top: 0.1rem;
                }
            }
            .price-box {
                & > span:nth-child(1) {
                    font-family: Ubuntu;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 27px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    @media screen and (max-width: 800px) {
                        font-family: Ubuntu;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 16px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                    }
                }
                & > span:nth-child(2) {
                    font-family: Ubuntu;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 27px;
                    text-align: left;
                    text-decoration-line: line-through;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    opacity: 50%;
                    @media screen and (max-width: 800px) {
                        font-family: Ubuntu;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 16px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                    }
                }
                & > span:nth-child(3) {
                    font-family: Ubuntu;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 27px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    @media screen and (max-width: 800px) {
                        font-family: Ubuntu;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 16px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                    }
                }
                & > span:nth-child(4) {
                    font-family: Ubuntu;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 27px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    @media screen and (max-width: 800px) {
                        font-family: Ubuntu;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 16px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                    }
                }
            }
        }
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
            margin-top: 0rem;
            @media screen and (max-width: 800px) {
                font-family: Ubuntu;
                font-size: 12px;
                font-weight: 400;
                line-height: 13.79px;
                letter-spacing: 0.02em;
                text-align: center;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
            }
        }

    `
  return (
    <Wrapper>
        <div className='left-box'>
        <p className='price-box'><span>Annual Plan: </span><span>$2999</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$3999</span></p>
            <p className='desc'>If you're not satisfied within the first month, cancel for a full refund – no questions asked.</p>
        </div>
        <button>Subscribe</button>
    </Wrapper>
  )
}

export default Subscribe