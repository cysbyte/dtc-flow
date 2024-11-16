import styled from 'styled-components'
import copyright from '@/assets/home/footer/copyright.svg'
import bg from '@/assets/home/footer/bg.svg'

const FooterComponent = () => {
  const Wrapper = styled.section`
    position: relative;
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
    background-image: url('${bg}');
    .footer-container {
        max-width: 1440px;
        height: 98px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2.5rem 14.5rem 2.5rem 8.5rem;
        
        .copyright-box {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0rem;
          img {
              width: auto;
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
        }
      
      }
    `
  return (
    <Wrapper>
        <img className='bg-img' src={bg} alt="" />
        <div className='footer-container'>
          <div className='copyright-box'>
            <img src={copyright} alt="" />
            <p>DTC MATRIX | All rights reserved - 2022</p>
          </div>
          <a href="mailto:dtcmatrixsupport1@gmail.com">dtcmatrixsupport1@gmail.com</a>
        </div>
    </Wrapper>
  )
}

export default FooterComponent