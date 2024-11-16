import styled from 'styled-components'
import avatar1 from '@/assets/home/customers/avatar1.svg'
import avatar2 from '@/assets/home/customers/avatar2.svg'
import avatar3 from '@/assets/home/customers/avatar3.svg'
import avatar4 from '@/assets/home/customers/avatar4.svg'
import CustomerCard from './CustomerCard'
import CustomerCardMobile from './CustomCardMobile'

const Customers = () => {
    const data = [
        {
            id: 1,
            avatar: avatar1,
            text: "We're a fitness and health brand, and in our competitive space, followers and engagement are crucial. We went from 5,800 followers to 42,000 in less than 4 months, and our engagement rate is at an all-time high. 1",
            name: 'David Banks',
            role: 'Fitness & Health'
        },
        {
            id: 2,
            avatar: avatar2,
            text: "Thank you for the great customer service, honestly this is the most impactful thing I've done to grow my Instagram followers.",
            name: 'Austin Campbell Jr.',
            role: 'Photographer '
        },
        {
            id: 3,
            avatar: avatar3,
            text: "DTC Matrix is my secret weapon to grow my personal training business. I get thousands of high-quality followers a month, and they convert to paying customers!",
            name: 'Mathew Bishop',
            role: 'Personal Trainer'
        },
        {
            id: 4,
            avatar: avatar4,
            text: "10/10, I got 2700 followers in my first month, and it's just been growing like crazy!",
            name: 'Derek Walker',
            role: 'Photographer'
        },

    ]
    const Wrapper = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 2rem;
        margin-top: 5.2rem;
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
        .container {
            display: block;
            @media screen and (max-width: 800px) {
                display: none;
            }
            .list-container {
                margin-top: 2rem;
                display: grid;
                grid-template-columns: 1fr 1fr;
                row-gap: 4rem;
                column-gap: 14rem;
                @media screen and (max-width: 800px) {
                    width: 1296px;
                    display: flex;
                    justify-content: between;
                    align-items: center;
                    gap: 1rem;
                    overflow: scroll;
                }
            }
        }

        .container-mobile {
            display: none;
            width: 100%;
            overflow: auto;
            @media screen and (max-width: 800px) {
                display: block;
            }
            margin-top: -2.2rem;
            .list-container {
                width: 1300px;
                display: flex;
                justify-content: between;
                align-items: center;
                gap: 0.8rem;
                overflow: scroll;
                padding: 1rem 1rem;
                /* Hide scrollbar for Webkit browsers */
                &::-webkit-scrollbar {
                    display: none;
                }
                /* Hide scrollbar for other browsers (Firefox) */
                scrollbar-width: none; /* For Firefox */
            }
        }
    `
    return (
        <Wrapper>
            <h2>Real Customers. Real Results.</h2>

            <div className='container'>
                <div className='list-container'>
                    {
                        data.map((item) => (
                            <CustomerCard
                                key={item.id}
                                avatar={item.avatar}
                                text={item.text}
                                name={item.name}
                                role={item.role}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='container-mobile'>
                <div className='list-container'>
                    {
                        data.map((item) => (
                            <CustomerCardMobile
                                key={item.id}
                                avatar={item.avatar}
                                text={item.text}
                                name={item.name}
                                role={item.role}
                            />
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default Customers