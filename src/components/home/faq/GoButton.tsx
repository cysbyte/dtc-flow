import React, { FC } from 'react';
import styled from 'styled-components';

interface GoButtonProps {
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}
const Wrapper = styled.div<{ selected: boolean}>`
    transform: rotate(${selected=>selected?'90':'0'}deg);
    width: 51px;
    height: 51px;
    border-radius: 40px;
    @media screen and (max-width: 800px) {
        width: 20px;
        height: 20px;
        border-radius: 10px;
    }
    background-color: ${({ selected }) => selected ? '#407BFF' : 'white'};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 16px 0px #080f340f;
    transition: background-color 500ms ease-in-out; /* Smooth transition */
    cursor: pointer;
    .icon {
        display: block;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    .icon-mobile {
        display: none;
        @media screen and (max-width: 800px) {
            display: block;
        }
    }
`;
const GoButton: FC<GoButtonProps> = ({ selected, setSelected }) => {

    const handleClick = () => {
        setSelected((prev)=>!prev);
    };

    return (
        <Wrapper selected={selected} onClick={handleClick}>
            <svg
                className='icon'
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.37793 17.5879L9.5972 9.3313L1.37793 1.07471"
                    stroke={selected ? '#FFFFFF' : '#407BFF'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"

                />
            </svg>

            <svg
                className='icon-mobile'
                width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L4.73551 5.24753L1 1.49507"
                    stroke={selected ? '#FFFFFF' : '#407BFF'}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>


        </Wrapper>
    );
};

export default GoButton;
