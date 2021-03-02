import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrap = styled.div`
  display: flex;
  margin: -10px;

  & > a {
    margin: 10px;
    font-size: 24px;
  }
`

const Component = () => {
  return (
    <Wrap>
      <Link to='/'>Home page</Link>
      <Link to='/page2'>Page 2</Link>
    </Wrap>
  )
}

export default Component
