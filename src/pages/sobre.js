import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderBlog from '../components/header-blog'
import Footer from '../components/footer'

import './sobre.css'

export default function Blog() {
  const { avatar, photo } = useStaticQuery(
    graphql`
    query SobreIndex {
      avatar: file(absolutePath: {regex: "/about.jpg/"}) {
        childImageSharp {
          fixed(width: 1000, height: 1000, quality: 90) {
            base64
            width
            height
            src
            srcSet
          }
        }
      },
      photo: file(absolutePath: {regex: "/thais-sobre.jpg/"}) {
        childImageSharp {
          fixed(width: 1000, height: 1000, quality: 90) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }`
  )

  return (
    <Layout>
      <SEO />
      <HeaderBlog image={avatar.childImageSharp.fixed.src} mensagemtopo="Quem sou eu?" link="/" />
      <div className='sobre'>
        <Image
          fixed={photo.childImageSharp.fixed}
          style={{
            marginBottom: 0,
            minWidth: 250,
            minHeight: 250,
            maxWidth: 250,
            maxHeight: 250,
            marginBottom: '2px',
            borderRadius: 0
          }}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
        <label style={{ fontSize: '10px' }}>Foto: Thais Ribeiro</label>
        <p style={{ width: '700px' }}>
          Oi, meu nome é Thais do Nascimento Ribeiro, tenho 27 anos e faço parte do canal que cria e entrega valor aos usuários, buscando o novo e o ágil.
          Atualmente sou Engenheira de Software do Luizalabs, atuo na equipe de chat bots da Lu do Magalu, porém tenho uma jornada de 8 anos na área transitando em grandes empresas com grandes projetos e o meu último maior projeto foi no iVendas com a construção do HUB, produto core da empresa.
          Minhas especialidades incluem desenvolvimento em Python e Javascript onde trabalho com a plataforma Node.js.
          Pesquisadora e entusiasta nas vertentes do JS e Inteligência Artificial, tenho como hobbie escrever artigos sobre o que tenho estudado na área de tecnologia e que você consegue encontrar no meu medium @thaisribe e também no meu blog https://thais-ribeiro-blog.netlify.com, inclusive dou palestras baseadas nos artigos que escrevo.
          Sou Community Leader do frontInUdi, uma comunidade voltada para front-ends de Uberlândia e também participo de forma voluntária de um projeto de intervenção e apoio pedagógico na E.M. do bairro Shopping Park, por meio do projeto Escola do Futuro do Instituto Projeto de Vida, dou aula de programação de jogos para crianças do 7° e 8° ano.
          Amante da inovação e tecnologia, comprometida com resultados, altruísta e ativista ambiental, pois todos fazemos partes de um mesmo ecossistema que merece ser respeitado.
        </p>
        <h1 style={{ width: '700px' }}>Minha História</h1>
        <p style={{ width: '700px' }}>
          Nasci em Uberlândia, em 1992 e morei pouco tempo em uma cidade pequena chamada Centralina, construí toda a minha vida aqui.
          Me dedico a área de T.I. desde os 16 anos quando ganhei meu primeiro computador e alguns livros do Visual Studio 2005, decidi então fazer Sistemas de Informação no Pitágoras.
          Moro com a minha mãe e tenho dois cachorros que são como meus filhos, o Fred e a Frida.
        </p>
        <h1 style={{ width: '700px' }}>Projetos</h1>
        <p style={{ width: '700px' }}> 
          <strong>frontInUdi - </strong> O frontInUdi é uma comunidade de tecnologia com foco em front-end, todo mês organizamos meetups nas empresas anfitriãs, um sonho que nasceu há um tempo atrás com outras pessoas e com um grupo de amigos decidimos continuar.
        </p>
        <p style={{ width: '700px' }}> 
          <strong>Citações na Mídia - </strong> Escrevi um artigo sobre JS ano passado, foi citado e elogiado no <a href="https://www.youtube.com/watch?v=SD19IebfrdE&t=27s">BrazilJs</a>
        </p>
      </div>
      <div className="item-footer">
        <Footer />
      </div>
    </Layout >
  )
}

