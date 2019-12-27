import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HEADER from '../components/header'
import Section from '../components/section'
import MainBio from '../components/main-bio'
import Sdk from '../components/sdk-bot'

import './blog-listing.css'

const BlogIndexPage = () => (
  <Layout>
    <SEO />
    <Section name="menu-header">
      <HEADER/>
    </Section>
    <Section centered name="main-bio">
      <MainBio />
    </Section>
    <Section name="sdk-bot">
      <Sdk/>
    </Section>
  </Layout>
)

export default BlogIndexPage

export const query = graphql`
  query BlogIndex {
    allMdx(
      filter: { fields: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          description
          categories
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
