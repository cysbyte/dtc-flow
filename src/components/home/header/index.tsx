import styled from 'styled-components'
import logo from '@/assets/home/header/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    const Wrapper = styled.header`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.3rem 0rem;
        @media screen and (max-width: 1080px) {
            padding: 0.5rem;
        }
        /*background-color: rgba(255,255,255, 0.9);
        position: sticky;
        top: 0;
        backdrop-filter: blur(4px);*/
        .img-box {
            flex: 1;
            /*opacity: 90%;*/
        }
        .menu-box {
            flex: 1;
            display: flex;
            justify-content: end;
            align-items: center;
            gap: 2.5rem;
            .menu-item {
                color: #747582;
                font-family: Ubuntu;
                font-size: 16px;
                font-weight: 400;
                line-height: 18.38px;
                text-align: left;
                text-wrap: nowrap;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                text-decoration: none;
                padding: 0;
                border: none;
                background: none;
                cursor: pointer;
            }
            @media screen and (max-width: 1080px) {
                display: none;
            }
        }
        .signin-box {
            flex: 1;
            display: flex;
            justify-content: end;
            align-items: center;
            gap: 1.3rem;
            .signin-button {
                font-family: Ubuntu;
                font-size: 16px;
                font-weight: 700;
                line-height: 18.38px;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #282C4B;
                padding: 0;
                border: none;
                background: none;
                text-wrap: nowrap;
                border-width: 0px;
                cursor: pointer;
            }
            .start-button {
                border: 1px solid #593FFB;
                border-radius: 80px;
                padding: 1rem 2rem;
                color: #282C4B;
                font-family: Ubuntu;
                font-size: 14px;
                font-weight: 500;
                line-height: 16.09px;;
                text-underline-position: none;
                text-decoration-skip-ink: none;
                text-decoration: none;
                text-wrap: nowrap
            }
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    `

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return (
        <Wrapper>
            <div className='img-box'>
                <img src={logo} alt="" />
            </div>
            <div className='menu-box'>
                <button className='menu-item' onClick={()=>handleScroll('trusted-by')}>How it work</button>
                <button className='menu-item' onClick={()=>handleScroll('social-media')} >Pricing</button>
                <button className='menu-item' onClick={()=>handleScroll('faq')} >FAQ</button>
            </div>
            <div className='signin-box'>
                <button className='signin-button'>Sign In</button>
                <Link className='start-button' to=''>Start Your Growth</Link>
            </div>
        </Wrapper>
    )
}

export default Header