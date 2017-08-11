import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: black;
`

export default class About extends React.Component {
  render() {
    return (
      <div>
        <StyledTitle>about</StyledTitle>
      </div>
    )
  }
}