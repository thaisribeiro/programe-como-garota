import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Pills from '../components/pills'
import SEO from '../components/seo'
import { formatPostDate, formatReadingTime } from '../utils/dates'
import Section from '../components/section'
import HEADER from '../components/header'
import HeaderBlog from '../components/header-blog'

export default function Blog() {
  const { allMdx } = useStaticQuery(
    graphql`
    query BlogsIndex {
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
  )

  return (
    <Layout>
      <SEO />
      <Section name="menu-header">
        <HEADER />
      </Section>
      <HeaderBlog/>
      <div className='blog'>
        {

          allMdx.nodes.map(post => (
            <Section key={post.fields.slug} name={post.fields.slug} centered>
              <Link to={post.fields.slug} className="blog-listing">
                <h1>{post.frontmatter.title}</h1>
                <p>
                  {formatPostDate(post.frontmatter.date)}
                  {` • ${formatReadingTime(post.timeToRead)}`}
                </p>
                <Pills items={post.frontmatter.categories} />
                <p>{post.frontmatter.description}</p>
              </Link>
            </Section>
          ))
        }
      </div>


    </Layout >
  )
}

