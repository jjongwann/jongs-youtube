import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import ScrollTo from '../../utils/scrollTo'

const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet 
                titleTemplate="%s | Jongs Youtube" 
                defaultTitle="Jongs Youtube" 
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
                <meta property="og:img" content="https://yt3.googleusercontent.com/PVbwh8OLmp3dTofJ7vmv6zfoRKiFgIvL9SsTYaermGxW3Ga6vONSfC7ymrgpO6gUCd9nKcZp0Sc=s176-c-k-c0x00ffffff-no-rj"/>
            </Helmet>

            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>

        
            
       
    )
}

export default Main