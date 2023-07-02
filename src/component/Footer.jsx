import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
    <Wrapper>
    <p style={{textAlign:"center"}}> All &copy; Copyright are reserved. {new Date().getUTCFullYear()            } </p>

    </Wrapper>
    </>
  )
}

export default Footer
const Wrapper= styled.section`
    background-color: rgba(248, 249, 250);
`