import styled from 'styled-components'
import copyright from '@/assets/home/footer/copyright.svg'
import bg from '@/assets/home/footer/bg.svg'
import FooterMobile from './FooterMobile'
import FooterComponent from './Footer'

const Footer = () => {
  const Wrapper = styled.section`
    .container {
      position: relative;
      display: block;
      @media screen and (max-width: 800px) {
        display: none;
        height: 62px;
      }
    }
    .container-mobile {
      position: relative;
      display: none;
      @media screen and (max-width: 800px) {
        display: block;
        height: 62px;
      }
    }
    `
  return (
    <Wrapper>
      <div className='container'>
        <FooterComponent/>
      </div>
      <div className='container-mobile'>
        <FooterMobile/>
      </div>
    </Wrapper>
  )
}

export default Footer