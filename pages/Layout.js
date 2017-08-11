import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: black;
`

export default class Layout extends React.Component {
  static async getInitialProps (req, res) {
    return {}
  }

  render() {
    return (
      <div>
        <StyledTitle>layout</StyledTitle>
        {this.props.children}
      </div>
    )
  }
}