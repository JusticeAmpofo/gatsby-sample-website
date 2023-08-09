import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
    return (
        <Layout>
            <div className='container about'>
                <h2 className='mb5'>This is the About page</h2>
                <p className='mb5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vitae laoreet ligula. Quisque tempor nunc vel ante
                    rutrum, ut mollis ipsum scelerisque. Sed in consectetur
                    erat. Quisque neque leo, efficitur et pretium at, elementum
                    in augue. Aenean vel ex pretium, sodales dolor sit amet,
                    varius massa. Donec gravida sapien purus. Nullam volutpat
                    faucibus fermentum. Nam et tortor id massa vestibulum
                    tincidunt. Vivamus at diam vel nisl ornare ullamcorper at
                    quis neque. Aliquam sit amet neque facilisis sem bibendum
                    porta. Nullam sed dapibus leo, scelerisque egestas purus. In
                    ut velit eget ex dapibus mollis eget et sapien. Quisque
                    consequat lacus a ipsum porta, eget fermentum purus
                    elementum.
                </p>
            </div>
        </Layout>
    );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;
