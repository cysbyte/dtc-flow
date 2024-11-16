import Contact from '@/components/home/contact'
import Faq from '@/components/home/faq'
import Customers from '@/components/home/customers'
import Difference from '@/components/home/difference'
import GrowYourBrand from '@/components/home/grow-your-brand'
import Header from '@/components/home/header'
import Hero from '@/components/home/hero'
import SocialMedia from '@/components/home/social-media'
import TrustedBy from '@/components/home/trusted-by'
import Why from '@/components/home/why'
import Youtube from '@/components/home/youtube'
import styled from 'styled-components'
import Footer from '@/components/home/footer'

const Home = () => {
    const Wrapper = styled.main`
        width: 100%;
        overflow: hidden;
        .upper-box {
            background-color: white;
            max-width: 1440px;
            margin: auto auto;
            padding: 0 8.5rem;
            @media screen and (max-width: 800px) {
                padding: 0rem 1rem;
                overflow: hidden;
            }
        }
       
    `
    return (
        <Wrapper>
            <div className='upper-box'>
                <Header />
                <Hero/>
                <TrustedBy/>
                <GrowYourBrand/>
                <Why/>
                <SocialMedia/>
                <Youtube/>
                <Difference/>
                <Customers/>
                <Faq/>
                <Contact/> 
            </div>
            <Footer/>
        </Wrapper>
    )
}

export default Home