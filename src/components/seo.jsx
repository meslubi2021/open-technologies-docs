/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 import Helmet from 'react-helmet';
 import { useStaticQuery, graphql } from 'gatsby';

 function SEO({
   lang, meta, title, slug, lastModifiedTime, pathPrefix, updated
 }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
             pathPrefix
           }
         }   
       }
     `,
   );
   {console.log(site.siteMetadata.pathPrefix, 'path')}
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={`%s | ${site.siteMetadata.title}`}
       meta={[
         {
           name: 'google-site-verification',
           content: '58TM3lGyGn6c2Bj0PvPQSNzrd9_yBsHs2BjJ6KMHlRU',
         },
         {
           property: 'og:url',
           content: `https://learning.postman.com${slug}`,
         },
         {
           property: 'og:description',
           content: `${title}: documentation for Postman, the collaboration platform for API development. Create better APIs—faster.`,
         },
         {
           property: 'og:title',
           content: `${title} | Postman Open Tech`,
         },
         {
           property: 'og:site_name',
           content: 'Postman Open Tech',
         },
         {
          property: 'article:publisher',
          content: 'https://www.facebook.com/getpostman/',
         },
         {
          property: 'article:modified_time',
          content: lastModifiedTime
         },
         {
           property: 'og:image',
           content: '"https://voyager.postman.com/illustration/ventura-abled.png"',
         },
         {
           property: 'og:type',
           content: 'website',
         },
         {
           name: 'twitter:card',
           content: 'summary_large_image',
         },
         {
           name: 'twitter:creator',
           content: site.siteMetadata.author,
         },
         {
           name: 'twitter:title',
           content: `${title} | Postman Open Technologies`,
         },
         {
           property: 'twitter:description',
           content: `${title}: documentation for Postman Open Technologies, the collaboration platform for API development. Create better APIs—faster.`,
         },
         {
           property: 'twitter:domain',
           content: 'https://learning.postman.com/open-technologies',
         },
         {
           property: 'twitter:image',
           content: '"https://voyager.postman.com/illustration/ventura-abled.png"',
         },
         {
           property: 'twitter:site',
           content: '@getpostman',
         },
       ].concat(meta)}
     >
       <link rel="preconnect" href="https://voyager.postman.com" crossorigin />
       <link href="https://voyager.postman.com/font/fonts.css" rel="stylesheet" />
       {/* OneTrust */}
       <script type="text/javascript" src="https://cdn.cookielaw.org/consent/1cef3369-6d07-4928-b977-2d877eb670c4/OtAutoBlock.js" />
       <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="1cef3369-6d07-4928-b977-2d877eb670c4" />
       {console.log(pathPrefix, 'path')}
       <link rel="canonical" href={`https://learning.postman.com${site.siteMetadata.pathPrefix}${slug}`} />
     </Helmet>
   );
 }
 
 SEO.defaultProps = {
   lang: 'en',
   meta: [],
 };
 
 SEO.propTypes = {
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
   pathPrefix: PropTypes.string
 };
 
 export default SEO;
 