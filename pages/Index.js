import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: black;
`

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <StyledTitle>index</StyledTitle>
        <ul>
          <li><a href="/docs/intro">Intro</a></li>
          <li><a href="/docs/get-started">Get started</a></li>
        </ul>
      </div>
    )
  }
}