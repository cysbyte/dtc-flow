import styled from 'styled-components'

const Wrapper = styled.div<{
    marginTop?: number,
}>`
    width: 100%;
    label {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        @media screen and (max-width: 800px) {
            font-family: Ubuntu;
            font-size: 12px;
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
        margin-top: ${({ marginTop }) => marginTop}rem;   
        @media screen and (max-width: 800px) {
            margin-top: ${({ marginTop }) => marginTop ? marginTop - 2 : 0}rem; 
        }
    }
    input:focus {
        border-bottom-color: #007BFF;
    }
    input::placeholder {
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        opacity: 70%;
        @media screen and (max-width: 800px) {
            font-family: Inter;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
        }
    }
`
const Input = ({ title, placeholder, marginTop }:
    { title: string, placeholder: string, marginTop?: number }) => {
    return (
        <Wrapper marginTop={marginTop}>
            <label htmlFor="name">{title}</label>
            <input type="text" placeholder={placeholder} />
        </Wrapper>
    )
}

export default Input