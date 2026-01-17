import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    keywords,
    image = '/hero.webp',
    type = 'website',
    schema
}) => {
    const { pathname } = useLocation();
    const siteUrl = 'https://www.ab-enterprises.co';
    const fullUrl = `${siteUrl}${pathname}`;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    const defaultTitle = 'AB Enterprises | Steel Trading & Manufacturing Partner';
    const defaultDescription = 'India\'s trusted steel trading partner. We supply high-quality TMT bars, angles, beams, and raw materials with express delivery.';
    const defaultKeywords = 'Steel Trading, TMT Bars, Iron Ore, Industrial Coal, Structural Steel, Raipur, India';

    const pageTitle = title ? `${title} | AB Enterprises` : defaultTitle;
    const pageDescription = description || defaultDescription;
    const pageKeywords = keywords || defaultKeywords;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            <meta property="twitter:image" content={fullImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
