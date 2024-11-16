import styled from 'styled-components'
import copyright from '@/assets/home/footer/copyright.svg'
import bg from '@/assets/home/footer/bg.svg'

const Footer = () => {
  const Wrapper = styled.section`
    .container {
      position: relative;
      display: block;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
    .container-mobile {
      position: relative;
      display: none;
      @media screen and (max-width: 800px) {
        display: block;
      }
    }
    .bg-img {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    width: 100%;
    margin-top: 6rem;
    @media screen and (max-width: 800px) {
      margin-top: 3rem;
    }
    background-image: url('${bg}');
    .footer-container {
        max-width: 1440px;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2.5rem 14.5rem 2.5rem 8.5rem;
        @media screen and (max-width: 800px) {
            flex-direction: column;
            padding: 1rem 1rem;
            gap: 0.7rem;
            align-items: start;
        }
        
        .copyright-box {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0rem;
          @media screen and (max-width: 800px) {
            gap: 0.1rem;
          }
          img {
              width: auto;
              @media screen and (max-width: 800px) {
                width: 11px;   
              }
          }
          p {
            font-family: Ubuntu;
            font-size: 16px;
            font-weight: 400;
            line-height: 18.38px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            @media screen and (max-width: 800px) {
              font-family: Ubuntu;
              font-size: 10px;
              font-weight: 400;
              line-height: 11.49px;
              text-align: left;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
          }
          }
        }
        a {
          font-family: Ubuntu;
          font-size: 16px;
          font-weight: 700;
          line-height: 18.38px;
          text-align: left;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          text-decoration: none;
          color: white;
          @media screen and (max-width: 800px) {
              font-family: Ubuntu;
              font-size: 10px;
              font-weight: 400;
              line-height: 11.49px;
              text-align: left;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
          }
        }
      
      }
    `
  return (
    <Wrapper>
      <div className='container'>
        <img className='bg-img' src={bg} alt="" />
        <div className='footer-container'>
          <div className='copyright-box'>
            <img src={copyright} alt="" />
            <p>DTC MATRIX | All rights reserved - 2022</p>
          </div>
          <a href="mailto:dtcmatrixsupport1@gmail.com">dtcmatrixsupport1@gmail.com</a>
        </div>
      </div>
      <div className='container-mobile'>
        <img className='bg-img' src={bg} alt="" />
        <div className='footer-container'>
          <a href="mailto:dtcmatrixsupport1@gmail.com">dtcmatrixsupport1@gmail.com</a>
          <div className='copyright-box'>
            <img src={copyright} alt="" />
            <p>DTC MATRIX | All rights reserved - 2022</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer