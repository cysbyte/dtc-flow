import styled from 'styled-components'
import icon1 from '@/assets/home/grow-your-brand/icon1.svg'
import icon2 from '@/assets/home/grow-your-brand/icon2.svg'
import icon3 from '@/assets/home/grow-your-brand/icon3.svg'
import icon4 from '@/assets/home/grow-your-brand/icon4.svg'
import StepCard from './StepCard'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5.5rem;
    gap: 2.5rem;
    @media screen and (max-width: 800px) {
        margin-top: 3.5rem;
    }
    & > h3:nth-child(1) {
        display: block;
        font-family: Ubuntu;
        font-size: 40px;
        font-weight: 700;
        line-height: 53px;
        letter-spacing: 0.02em;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #1A0C84;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    & > h3:nth-child(2) {
        display: none;
        font-family: Ubuntu;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #1A0C84;
        width: 100%;
        @media screen and (max-width: 1200px) {
            display: block;
        }
    }
    .steps-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 0rem;
        gap: 1.5rem;
        
        @media screen and (max-width: 800px){
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-top: -1.2rem;
        }
    }
`
const GrowYourBrand = () => {
    const data = [
        {
            id: 1,
            icon: icon1,
            title: 'Target Audience',
            desc: 'Share your niche, and our AI will find organic followers who truly engage with your brand!'
        },
        {
            id: 2,
            icon: icon2,
            title: 'Your Content',
            desc: "Create compelling social media content to easily capture your audience's attention!"
        },
        {
            id: 3,
            icon: icon3,
            title: 'AI Delivery',
            desc: "100K+ publishers use DTC Matrix's AI to share content with followers and optimize as our data grows!"
        },
        {
            id: 4,
            icon: icon4,
            title: 'Boost Your Brand Following',
            desc: "Get real, high-quality followers who engage with your content and grow your audience over time!"
        },
    ]
  return (
    <Wrapper id='grow-your-brand'>
        <h3>Grow Your Brand In Just 4 Simple Steps</h3>
        <h3>Grow Your Brand<br/> In Just 4 Simple Steps</h3>
        <div className='steps-container'>
            {
                data.map((item)=>(
                    <StepCard 
                    key={item.id}
                    id={item.id}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                    />
                ))
            }
        </div>
    </Wrapper>
  )
}

export default GrowYourBrand