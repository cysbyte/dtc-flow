import styled from 'styled-components'
import icon1 from '@/assets/home/grow-your-brand/icon1.svg'
import icon2 from '@/assets/home/grow-your-brand/icon2.svg'
import icon3 from '@/assets/home/grow-your-brand/icon3.svg'
import icon4 from '@/assets/home/grow-your-brand/icon4.svg'
import StepCard from './StepCard'

const GrowYourBrand = () => {
    const data = [
        {
            id: 1,
            icon: icon1,
            title: 'Target Audience',
            desc: 'Leverage agile framework to provide a robust high level synopsys overviews'
        },
        {
            id: 2,
            icon: icon2,
            title: 'Your Content',
            desc: 'Leverage agile framework to provide a robust high level synopsys overviews'
        },
        {
            id: 3,
            icon: icon3,
            title: 'AI Delivery',
            desc: 'Leverage agile framework to provide a robust high level synopsys overviews'
        },
        {
            id: 4,
            icon: icon4,
            title: 'Boost Your Brand Following',
            desc: 'Leverage agile framework to provide a robust high level synopsys overviews'
        },
    ]
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
            margin-top: 2rem;
            gap: 2rem;
            @media screen and (min-width: 800px) and (max-width: 1200px) {
                gap: 0rem;
                flex-direction: column;
            }
            @media screen and (max-width: 800px){
                display: grid;
                grid-template-columns: 1fr 1fr;
                row-gap: 0.6rem;
                column-gap: 0.6rem;
                margin-top: -1.2rem;
            }
        }
    `
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