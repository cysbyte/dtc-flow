import { useState } from 'react'
import styled from 'styled-components'
import GoButton from './GoButton'

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [selected, setSelected] = useState(false)
  const Wrapper = styled.div`
        padding: 2rem 3rem;
        @media screen and (max-width: 800px) {
             padding: 0.5rem 0.2rem; 
        }
        gap: 1rem;
        width: 100%;
        border-radius: 18px;
        border: 2px solid ${selected?'#407BFF':'#FFFFFF'};
        margin-top: ${selected?'1rem':'0rem'};
        box-shadow: 0px 5px 16px 0px ${selected ? '#407BFF30':'#080F340F'};
        @media screen and (max-width: 800px) {
            border: 0px solid ${selected?'#407BFF':'#FFFFFF'};
        }
        .question-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          @media screen and (max-width: 800px) {
              padding: 0rem 0rem; 
          }
          & > p {
              font-family: Ubuntu;
              font-size: 22px;
              font-weight: 500;
              line-height: 28px;
              text-align: left;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
              color: #170F49;
              @media screen and (max-width: 800px) {
                  font-family: Ubuntu;
                  font-size: 10px;
                  font-weight: 400;
                  line-height: 16px;
                  text-align: left;
                  text-underline-position: from-font;
                  text-decoration-skip-ink: none;
              }
          }
          
        
        }
        .answer {
          font-family: Ubuntu;
          font-size: 22px;
          font-weight: 400;
          line-height: 28px;
          text-align: left;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          color: #170F49;
          opacity: 50%;
          margin-top: 1rem;
          @media screen and (max-width: 800px) {
              font-family: Ubuntu;
              font-size: 10px;
              font-weight: 400;
              line-height: 16px;
              text-align: left;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
              margin-top: 0.25rem;
          }
        }
    `
  return (
    <Wrapper>
      <div className='question-box'>
        <p>{question}</p>
        <GoButton selected={selected} setSelected={setSelected} />
      </div>
      {
        selected && <p className='answer'>{answer}</p>
      }
    </Wrapper>
  )
}

export default FaqItem

