import React from 'react'
import styled from 'styled-components'

const StepCard = ({id, icon, title, desc}: {
    id: number,
    icon: string,
    title: string,
    desc: string
}) => {
    const Wrapper = styled.article`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        gap: 1.3rem;
        padding: 2rem 3rem 2rem 1rem;
        border: 1px solid white;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
        height: auto;
        @media screen and (max-width: 800px){
            justify-content: space-between;
            padding: 0.6rem 1rem 0.6rem 0.6rem;
            border: 1px solid #E6E6E6;
            border-radius: 10px;
            padding-bottom: 1rem;
            height: 133px;
            gap: 0rem;
        }
        &:hover {
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1); 
        }
        & > img {
            width: 40px;
            @media screen and (max-width: 800px){
                width: 20px;
            }
        }
        & > h5 {
            font-family: Ubuntu;
            font-size: 20px;
            font-weight: 500;
            line-height: 25px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #14183E;
            @media screen and (max-width: 800px){
                font-family: Ubuntu;
                font-size: 14px;
                font-weight: 500;
                line-height: ${id===4?'17px':'25px'};
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
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
            @media screen and (max-width: 800px){
                font-family: Ubuntu;
                font-size: 10px;
                font-weight: 400;
                line-height: 16px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
            }
        }

    `
  return (
    <Wrapper>
        <img src={icon} alt="" />
        <h5>{title}</h5>
        <p>{desc}</p>
    </Wrapper>
  )
}

export default StepCard