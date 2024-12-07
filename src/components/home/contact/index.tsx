import styled from 'styled-components'
import Input from './Input'

const Wrapper = styled.section`
    margin-top: 6rem;
    @media screen and (max-width: 800px) {
        margin-top: 3rem;
    }
    & > h2 {
        font-family: Ubuntu;
        font-size: 40px;
        font-weight: 700;
        line-height: 51.88px;
        text-align: left;
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
        }
    }
    & > p {
        margin-top: 1rem;
        @media screen and (max-width: 800px) {
            margin-top: 0.25rem;
        }
        font-family: Ubuntu;
        font-size: 20px;
        font-weight: 400;
        line-height: 25.94px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #000000;
        @media screen and (max-width: 800px) {
            font-family: Ubuntu;
            font-size: 12px;
            font-weight: 400;
            line-height: 15.56px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #505050;
        }
    }
    
    .inputs-box {
        width: 100%;
        margin-top: 4rem;
        @media screen and (max-width: 800px) {
                margin-top: 1.2rem;
            }
        .upper-box1 {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            margin-bottom: 4rem;
            @media screen and (max-width: 800px) {
                flex-direction: column;
                gap: 1rem;
                margin-bottom: 1rem;
            }
        }
        .message-input {
            margin-top: 3rem;
        }
    }
    & > button {
            background-image: linear-gradient(to right, #FF698D, #FB3F6C);
            margin-top: 3rem;
            padding: 1rem 3rem;
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
            @media screen and (max-width: 800px) {
                font-family: Ubuntu;
                font-size: 12px;
                font-weight: 400;
                line-height: 13.79px;
                letter-spacing: 0.02em;
                text-align: center;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                margin-top: 1rem;
                padding: 0.8rem 1.8rem;
            }
        }
`
const Contact = () => {
    return (
        <Wrapper id='contact-us'>
            <h2>Contact Us</h2>
            <p>Our customer support will contact you within 24 hours</p>
            <div className='inputs-box'>
                <div className='upper-box1'>
                    <Input title='Your Name' marginTop={1} placeholder='John Doe'/>
                    <Input title='Email Address' marginTop={1} placeholder='example@domain.com'/>
                    <Input title="What's App" marginTop={1} placeholder='+1-1234567890'/>
                </div>
                <Input title='Message' marginTop={4} placeholder=''/>
            </div>
            <button>Submit</button>
        </Wrapper>
    )
}

export default Contact