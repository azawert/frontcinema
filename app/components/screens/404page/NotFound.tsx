import React from 'react';
import styles from "@/screens/home/Home.module.scss";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
    return (
        <Layout className={styles.container}>
            <h1>Page is not found.</h1>
        </Layout>
    );
};

export default NotFound;