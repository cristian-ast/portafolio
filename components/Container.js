import { Fragment } from 'react';
import Head from 'next/head';

const Container = (props) => (
    <Fragment>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
        </Head>
        {props.children}
    </Fragment>
);
export default Container;