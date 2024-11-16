import styled from 'styled-components'

interface CustomerCardProps {
    avatar: string;
    text: string;
    name: string;
    role: string;
}
const CustomerCardMobile = (props: CustomerCardProps) => {
    const Wrapper = styled.div`
        flex: 1;
        min-width: 324px;
        height: 156px;
        box-shadow: 0px 0px 16px 0px #00000026;
        border-radius: 4px;
        background-color: white;
        padding: 0.7rem 0.6rem;
        .upper-box-mobile {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 1rem;

            img {
                width: 36px;
            }
            .person-box-mobile {
                height: 100%;
                & > h6 {
                    font-family: Ubuntu;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 16px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #1E0E62;
                }
                & > p {
                    font-family: Ubuntu;
                    font-size: 11px;
                    font-weight: 400;
                    line-height: 16px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #15143966;
                    margin-top: 0.1rem;
                }
            }
        }
        .text {
            height: 100%;
            margin-top: 0.5rem;
            font-family: Ubuntu;
            font-size: 12px;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #151439;
            opacity: 70%;
        }

    `
  return (
    <Wrapper>
        <div className='upper-box-mobile'>
            <img src={props.avatar} alt="" />
            <div className='person-box-mobile'>
                <h6>{props.name}</h6>
                <p>{props.role}</p>
            </div>
        </div>
        <div>
            <p className='text'>{props.text}</p>
        </div>
    </Wrapper>
  )
}

export default CustomerCardMobile