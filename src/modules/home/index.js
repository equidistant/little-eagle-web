import React from 'react'
import styled from 'styled-components'
import Cover from './Cover'
import About from './About'
import GetToKnowMe from './GetToKnowMe'
import Services from './Services'
import { ScrollToTop } from '../../hooks'

const Home = ({ showDrawer, homeRef, aboutRef, servicesRef }) => {
  return (
    <RootContainer>
      <ScrollToTop />
      <Cover showDrawer={showDrawer} homeRef={homeRef} aboutRef={aboutRef}/>
      <About aboutRef={aboutRef}/>
      <GetToKnowMe />
      <Services servicesRef={servicesRef} />
    </RootContainer>
  )
}

const RootContainer = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
`

export default Home
