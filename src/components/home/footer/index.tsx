import styled from 'styled-components'
import FooterMobile from './FooterMobile'
import FooterComponent from './Footer'

const Wrapper = styled.section`
  width: 100%;
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
const Footer = () => {
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