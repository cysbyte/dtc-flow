import styled from 'styled-components'
import logo1 from '@/assets/home/trusted-by/logo1.svg'
import logo2 from '@/assets/home/trusted-by/logo2.svg'
import logo3 from '@/assets/home/trusted-by/logo3.svg'
import logo4 from '@/assets/home/trusted-by/logo4.svg'
import logo5 from '@/assets/home/trusted-by/logo5.svg'
import logoMobile1 from '@/assets/home/trusted-by/logo-mobile1.svg'
import logoMobile2 from '@/assets/home/trusted-by/logo-mobile2.svg'
import logoMobile3 from '@/assets/home/trusted-by/logo-mobile3.svg'
import logoMobile4 from '@/assets/home/trusted-by/logo-mobile4.svg'
import logoMobile5 from '@/assets/home/trusted-by/logo-mobile5.svg'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 1rem 0rem 1rem;
  gap: 2rem;
  @media screen and (max-width: 800px) {
    margin: 3rem 0rem 0rem 0rem;
  }
  & > h3 {
    font-family: Ubuntu;
    font-size: 20px;
    font-weight: 500;
    line-height: 36px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #1A0C84;
    margin: 0rem 1rem;
    @media screen and (max-width: 800px) {
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
    }
  }
  .logos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 1210px) {
        justify-content: center;
        gap: 2rem;
    }
    @media screen and (min-width: 800px) and (max-width:1210px){
        display: none;
        gap: 2rem;
    }
    @media screen and (max-width: 800px) and (max-width:1210px){
        display: none;
    }
  }
  .logos-container-mobile {
    display: none;
    
    @media screen and (max-width: 800px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 1rem;
    }
  }
`
const TrustedBy = () => {
  return (
    <Wrapper id='trusted-by'>
      <h3>Trusted by 100,000+ agencies and influencers, featured at:</h3>
      <div className='logos-container'>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
      </div>
      <div className='logos-container-mobile'>
        <img src={logoMobile1} alt="" />
        <img src={logoMobile2} alt="" />
        <img src={logoMobile3} alt="" />
        <img src={logoMobile4} alt="" />
        <img src={logoMobile5} alt="" />
      </div>
    </Wrapper>
  )
}

export default TrustedBy