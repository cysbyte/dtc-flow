import styled from 'styled-components'

const Input = ({title, marginTop}:{title: string, marginTop?: number}) => {
    const Wrapper = styled.div`
        width: 100%;
        label {
            font-family: Ubuntu;
            font-size: 24px;
            font-weight: 400;
            line-height: 36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            @media screen and (max-width: 800px) {
                font-family: Ubuntu;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #000000;
                opacity: 70%;
            }
        }
        input {
            width: 100%;
            border: none;         
            border-bottom: 1px solid #CACACA;  
            outline: none;        
            padding: 8px 0;     
            margin-top: ${marginTop}rem;   
            @media screen and (max-width: 800px) {
                margin-top: ${marginTop?marginTop-2:0}rem; 
            }
        }
        input:focus {
            border-bottom-color: #007BFF;
        }
    `
  return (
    <Wrapper>
         <label htmlFor="name">{title}</label>
         <input type="text" />
    </Wrapper>
  )
}

export default Input