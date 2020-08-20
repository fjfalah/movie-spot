import Head from 'next/head';
import React from 'react';

type PageDescriptionType = {
  title?: string;
};

const PageDescription: React.FC<PageDescriptionType> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>MovieSpot {title && `| ${title}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
};

export default PageDescription;
