import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import Markdown from 'react-markdown'

const StyledTitle = styled.h1`
  color: black;
`

export default class Docs extends React.Component {
  static async getInitialProps (req, res) {
    const fs = require('fs')
    const markdownFilePath = `docs/${req.params.param1}.md`
    const source = req.params.param1 && fs.existsSync(markdownFilePath) ? fs.readFileSync(markdownFilePath).toString() : ''

    return {source}
  }

  render() {
    return <Markdown source={this.props.source} />
  }
}