import React from 'react'
import styled from 'styled-components'
import FaqItem from './FaqItem'

const Faq = () => {
    const answer = `Unlike Social Media "growth tools", we don't ask for your account password and we don't use any automation or mass following to get you followers and engagement. We only use organic promotion using our proprietary AI targeting platform, so there's no risk to your account. We're a digital marketing agency and a team of strategiests who promote your profile organically through our AI platform.`
    const data = [
        {
            id: 1,
            question: "What services does DTCFlow offer in its growth packages?",
            answer: answer,
        },
        {
            id: 2,
            question: "How does DTCFlow ensure real engagement and audience growth?",
            answer: answer,
        },
        {
            id: 3,
            question: "What is the refund policy for DTCFlow packages?",
            answer: answer,
        },
        {
            id: 4,
            question: "What can I expect from the AI-powered tools included in the packages?",
            answer: answer,
        },
        {
            id: 5,
            question: "Who are these growth packages best suited for?",
            answer: answer,
        },
        {
            id: 6,
            question: "Why should I choose DTCFlow over other growth services?",
            answer: answer,
        },
    ]

    const Wrapper = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 6rem;
        @media screen and (max-width: 800px) {
            margin-top: 2rem;
        }
        & > h2 {
            font-family: Ubuntu;
            font-size: 40px;
            font-weight: 700;
            line-height: 53px;
            letter-spacing: 0.02em;
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
        .list-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            margin-top: 2rem;
            @media screen and (max-width: 800px) {
                margin-top: 1rem;
                gap: 0.5rem;
            }
        }
    `

    return (
        <Wrapper>
            <h2>DTC Flow Growth Packages FAQ</h2>
            <div className='list-box'>
                {
                    data.map((item) => (
                        <FaqItem key={item.id} question={item.question} answer={item.answer}/>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Faq