import styled from 'styled-components'
import right from '@/assets/home/difference/right.svg'
import rightMobile from '@/assets/home/difference/right-mobile.svg'

const Wrapper = styled.section`
    margin-top: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-top: 3rem;
    }
    .right-img {
        display: block;
        margin-right: -2rem;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    .right-img-mobile {
        display: none;
        @media screen and (max-width: 800px) {
            display: block;
        }
    }
    .left-box {
        & > h2 {
            margin-left: 0.5rem;
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
                margin-left: 0rem;
            }
        }
        & > p {
            font-family: Ubuntu;
            font-size: 15px;
            font-weight: 400;
            line-height: 27px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #747582;
            margin-top: 1rem;
            @media screen and (max-width: 800px) {
                font-family: Ubuntu;
                font-size: 12px;
                font-weight: 400;
                line-height: 19px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                margin-top: 0.25rem;
            }
        }
    }
`
const Difference = () => {
    return (
        <Wrapper>
            <div className='left-box'>
                <h2>The D2CFlow Difference</h2>
                <p>D2CFlow doesn’t believe in shortcuts. Our packages focus on authentic growth, tailored strategies, and clear metrics so you know your investment is working. Our commitment to your satisfaction and growth is what sets us apart. With D2CFlow, you’re not just gaining followers or subscribers – you're building an engaged community and a powerful platform</p>
            </div>
            <img className='right-img' src={right} alt="" />
            <img className='right-img-mobile' src={rightMobile} alt="" />
        </Wrapper>
    )
}

export default Difference