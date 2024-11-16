import styled from 'styled-components'

interface CustomerCardProps {
    avatar: string;
    text: string;
    name: string;
    role: string;
}
const CustomerCard = (props: CustomerCardProps) => {
    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 2rem;
        
        .right-box {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            gap: 1rem;
            & > p {
                font-family: Ubuntu;
                font-size: 16px;
                font-weight: 400;
                line-height: 28px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #151439;
                opacity: 70%;
            }
            .person-box {
                & > h6 {
                    font-family: Ubuntu;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 26px;
                    letter-spacing: 2px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #1E0E62;
                }
                & > p {
                    font-family: Ubuntu;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 26px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #15143966;
                }
            }

        }
    `
  return (
    <Wrapper>
        <img src={props.avatar} alt="" />
        <div className='right-box'>
            <p>{props.text}</p>
            <div className='person-box'>
                <h6>{props.name}</h6>
                <p>{props.role}</p>
            </div>
        </div>
    </Wrapper>
  )
}

export default CustomerCard