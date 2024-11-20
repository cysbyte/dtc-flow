import styled from 'styled-components'
import FaqItem from './FaqItem'

const Faq = () => {
    
    const data = [
        {
            id: 1,
            question: "What services does DTCFlow offer in its growth packages?",
            answer: "D2CFlow provides tailored social media and YouTube growth solutions. Our packages include content creation, engagement optimization, and targeted strategies designed to grow your audience and enhance engagement on platforms like Instagram, TikTok, and YouTube.",
        },
        {
            id: 2,
            question: "How does DTCFlow ensure real engagement and audience growth?",
            answer: "We use a combination of expert strategy, AI-driven tools, and advanced analytics to ensure your content reaches a relevant and engaged audience. Our approach is focused on organic growth, helping you connect with real users interested in your content or brand",
        },
        {
            id: 3,
            question: "What is the refund policy for DTCFlow packages?",
            answer: "If you’re not satisfied with the results after the first month, you can cancel your package and receive a full refund. This policy applies to all our plans, both quarterly and annual.",
        },
        {
            id: 4,
            question: "What can I expect from the AI-powered tools included in the packages?",
            answer: "Our AI-driven tools assist with optimizing your content for search and engagement. This includes SEO enhancements for video content, strategic post timing, and audience analysis, ensuring your content is discoverable and highly engaging for the intended audience.",
        },
        {
            id: 5,
            question: "Who are these growth packages best suited for?",
            answer: "Our packages are ideal for creators, brands, and businesses looking to expand their social presence, increase engagement, and reach new audiences. Whether you're an aspiring YouTuber aiming for monetization or a brand targeting growth on Instagram and TikTok, D2CFlow offers tools and strategies to meet your goals.",
        },
        {
            id: 6,
            question: "Why should I choose DTCFlow over other growth services?",
            answer: "D2CFlow’s focus on organic, data-driven growth and personalized support sets us apart. We partner with our clients every step of the way, offering not just services but a genuine growth partnership that aims to drive measurable results and build a sustainable online presence.",
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
        <Wrapper id='faq'>
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