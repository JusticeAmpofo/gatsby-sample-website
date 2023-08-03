import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Modal from '../components/Modal';
import GlobalContext from '../context/GlobalContext';
import * as styles from './index.module.css';
import Tabs from '../components/Tabs';

const ModalContentA = () => {
    return (
        <>
            <h2 className='h2 mb5'>
                My modal
                <br className='mobile-only-block' /> content here
            </h2>
            <p className='mb5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                voluptatem eos doloribus cum doloremque omnis deserunt
                recusandae architecto dicta reprehenderit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                saepe.
            </p>
        </>
    );
};

const tabA = [
    {
        id: 1,
        label: 'Tab 1',
        content: (
            <>
                <h2 className='h1 mb5'>Tab 1 content</h2>
                <p className='mb5'>This is content for when tab 1 is active.</p>
                <p className='mb5'>This is content for when tab 1 is active.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam soluta eius aliquid nulla. Minima sequi et assumenda
                    cupiditate, nobis, harum temporibus natus consectetur soluta
                    deleniti reiciendis molestiae quaerat quis dolore.
                </p>
            </>
        ),
    },
    {
        id: 2,
        label: 'Tab 2',
        content: (
            <>
                <h2 className='h1 mb5'>Tab 2 content</h2>
                <p className='mb5'>This is content for when tab 2 is active.</p>
                <p className='mb5'>This is content for when tab 2 is active.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus sapiente tenetur laudantium fugiat? Adipisci
                    quis atque velit ullam assumenda pariatur officiis quos sit,
                    temporibus ipsum labore eum blanditiis nam amet nostrum
                    culpa enim harum eius dicta itaque expedita! Iste id vero
                    rerum delectus iure quas illo, quasi doloremque distinctio
                    molestias.
                </p>
            </>
        ),
    },
    {
        id: 3,
        label: 'Tab 3',
        content: (
            <>
                <h2 className='h1 mb5'>Tab 3 content</h2>
                <p className='mb5'>This is content for when tab 3 is active.</p>
                <p className='mb5'>This is content for when tab 3 is active.</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque tempora alias corrupti non aliquam officia, maiores
                    laudantium aspernatur enim, repellendus voluptates. Rem
                    fugit recusandae aut dolorem ipsam enim aspernatur! Iste
                    voluptatum rerum ea repellendus minima? Consequuntur
                    adipisci esse doloribus, et alias inventore molestiae
                    aliquid quidem accusamus nemo illum odio distinctio
                    voluptatum, rerum, sed corporis obcaecati. Vero velit hic
                    consequatur dolor mollitia! Beatae nulla atque ab. Ducimus
                    incidunt neque eveniet iste necessitatibus! Delectus ipsum
                    iusto quae tenetur ratione libero dolores consequatur
                    voluptates quas ex, aperiam eos quaerat nostrum! At a non
                    similique, esse labore, error praesentium deleniti veritatis
                    vero possimus molestiae.
                </p>
            </>
        ),
    },
];

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <GlobalContext.Consumer>
                {(context) => (
                    <div>
                        <div className={`${styles.home} container`}>
                            <p className='mb5'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris vitae laoreet ligula.
                                Quisque tempor nunc vel ante rutrum, ut mollis
                                ipsum scelerisque. Sed in consectetur erat.
                                Quisque neque leo, efficitur et pretium at,
                                elementum in augue. Aenean vel ex pretium,
                                sodales dolor sit amet, varius massa. Donec
                                gravida sapien purus. Nullam volutpat faucibus
                                fermentum. Nam et tortor id massa vestibulum
                                tincidunt. Vivamus at diam vel nisl ornare
                                ullamcorper at quis neque. Aliquam sit amet
                                neque facilisis sem bibendum porta. Nullam sed
                                dapibus leo, scelerisque egestas purus. In ut
                                velit eget ex dapibus mollis eget et sapien.
                                Quisque consequat lacus a ipsum porta, eget
                                fermentum purus elementum.
                            </p>
                            <button
                                onClick={() => {
                                    context.openModal(<ModalContentA />);
                                }}
                                className='btn mb5'
                            >
                                Open Modal
                            </button>
                            <ModalContentA />
                            <p className='mb5'>
                                Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas.
                                Phasellus ornare tortor dignissim, viverra
                                tellus vitae, cursus risus. Curabitur accumsan
                                augue tempus, molestie massa quis, rhoncus nibh.
                                Integer auctor neque eu elit vulputate
                                malesuada. Proin id mattis risus, ut dictum
                                ligula. Morbi eget tristique dui. Pellentesque
                                habitant morbi tristique senectus et netus et
                                malesuada fames ac turpis egestas. Cras ac
                                volutpat leo. Maecenas cursus sapien eget leo
                                aliquam bibendum. Sed porta ante ante, in varius
                                erat interdum eget. Proin finibus diam quis
                                aliquet ultricies. Etiam sed velit id eros
                                laoreet congue sit amet non magna. Sed in
                                dapibus nisl. Cras velit orci, viverra a diam
                                eget, lacinia pulvinar eros.
                            </p>
                            <p className='mb5'>
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Nulla euismod nunc arcu, in
                                venenatis risus fermentum non. Duis blandit
                                nulla eu arcu consequat, vel malesuada nibh
                                varius. Aenean consectetur interdum metus eu
                                sagittis. Nulla sit amet leo in quam lacinia
                                malesuada. Suspendisse potenti. Sed nec turpis
                                eu enim ornare auctor non id augue. Integer
                                consectetur porta turpis sit amet finibus. Cras
                                rhoncus pharetra magna nec mollis.
                            </p>
                            <Tabs tabs={tabA} />
                            <p className='mb5'>
                                Mauris sed mauris sapien. Donec diam ex,
                                ultrices vel blandit vel, porta nec nisi. Nulla
                                ornare nibh orci, non lobortis arcu elementum a.
                                Aliquam neque ex, hendrerit id eros eu, pharetra
                                gravida nisi. In hac habitasse platea dictumst.
                                Sed commodo mauris sit amet justo tincidunt,
                                mattis mollis eros laoreet. In justo leo,
                                tincidunt nec sagittis quis, commodo at ligula.
                                Duis consectetur dictum orci.
                            </p>
                            <p className='mb5'>
                                Integer eu nisl laoreet, fermentum enim non,
                                iaculis eros. Quisque hendrerit luctus nulla,
                                sit amet convallis enim pharetra in. Donec dolor
                                massa, ultrices vitae ultricies id, efficitur
                                eget mauris. Sed laoreet blandit ex, quis
                                sodales nibh egestas accumsan. Nunc porta eros
                                viverra consequat bibendum. Donec vestibulum
                                turpis sed sodales maximus. Duis faucibus
                                viverra dapibus. Maecenas pellentesque libero
                                sed est blandit, nec efficitur mi dapibus. In
                                hendrerit tortor orci, sed porttitor velit
                                laoreet posuere. Donec varius leo eget tincidunt
                                semper. Suspendisse at elementum felis, eget
                                pellentesque libero. Suspendisse interdum tempus
                                odio finibus efficitur. Vestibulum ut nisi
                                tellus. Etiam rutrum volutpat est quis
                                porttitor.
                            </p>
                            {/* Gastby Image */}
                            {data.allFile.edges.map(({ node }) => (
                                <GatsbyImage
                                    image={getImage(node)}
                                    alt={node.name}
                                    key={node.id}
                                    className='mb5'
                                />
                            ))}
                            <p className='mb5'>
                                Sed massa risus, feugiat vel neque sed,
                                facilisis elementum eros. Proin vestibulum
                                lobortis sem nec varius. Aenean congue nibh
                                nisi. Sed in libero neque. Vestibulum consequat
                                congue ex, eu finibus ligula sodales a.
                                Vestibulum semper, magna eu dapibus accumsan,
                                sem velit efficitur est, sed bibendum orci dolor
                                at urna. Duis elit metus, vehicula et mattis
                                dictum, euismod venenatis metus. Nulla sapien
                                dui, consectetur et volutpat tincidunt,
                                elementum et purus. Suspendisse mauris odio,
                                dignissim eget egestas id, accumsan at nisi. Sed
                                facilisis, urna quis fringilla tincidunt, turpis
                                risus faucibus ante, id maximus massa augue a
                                est. Proin tristique justo id dolor gravida, a
                                eleifend purus mollis. Suspendisse laoreet nisl
                                ut nulla accumsan tincidunt. Aenean a mi a
                                sapien faucibus ultricies non varius elit.
                            </p>
                            <p className='mb5'>
                                Quisque vitae augue id risus pulvinar tincidunt
                                a eu turpis. Maecenas nec dolor in lorem
                                molestie tincidunt eget et ipsum. Mauris et mi
                                nec orci posuere pulvinar quis a purus.
                                Phasellus et rhoncus massa. Curabitur id auctor
                                ligula. Cras ornare arcu sit amet porta
                                sollicitudin. Aliquam a eros finibus, elementum
                                sem vitae, posuere nisi. Duis dignissim vitae
                                elit at accumsan. Cras ut dolor vitae felis
                                euismod sagittis sit amet ut eros. Sed ut ante
                                nec lacus euismod volutpat vel laoreet massa.
                                Nam malesuada vulputate sem, ut commodo enim
                                elementum quis. Morbi mollis dolor eu dolor
                                auctor, eu tempus risus laoreet.
                            </p>
                            <p className='mb5'>
                                Sed in cursus ipsum. Vivamus lacus turpis,
                                lobortis aliquet posuere non, fermentum in enim.
                                Pellentesque et ligula tincidunt, faucibus dolor
                                id, molestie turpis. Praesent dolor dolor,
                                aliquet vel sodales eget, mollis et lacus.
                                Suspendisse non urna nibh. Nullam et eleifend
                                est, ac faucibus nisl. Nullam at elit vel magna
                                consequat sagittis. Sed ultricies suscipit
                                luctus. In porttitor viverra elementum. Ut
                                varius arcu in dui interdum dignissim.
                                Suspendisse nec dictum urna. Fusce a lorem at
                                nunc dictum efficitur ut quis enim. Integer vel
                                nisl a dolor consectetur faucibus. In porta
                                lorem sit amet eros hendrerit rutrum.
                            </p>
                            <p className='mb5'>
                                Curabitur a rutrum turpis. Aliquam facilisis
                                luctus ornare. Mauris varius, enim ac vehicula
                                gravida, neque mauris dictum neque, quis tempor
                                quam nisl ultricies libero. Pellentesque nunc
                                mauris, volutpat ut turpis sed, scelerisque
                                eleifend nisi. Phasellus efficitur mattis orci.
                                Duis orci metus, faucibus eget enim et, placerat
                                sollicitudin nibh. Vestibulum ut auctor est, sit
                                amet consectetur nibh. Etiam luctus ultricies
                                tempus. Duis nec aliquet magna. In aliquam vitae
                                mauris ut finibus. Phasellus gravida, nibh sed
                                lacinia molestie, lorem enim viverra massa, nec
                                vehicula massa eros vitae turpis. Nulla neque
                                nunc, convallis ac interdum sit amet, blandit eu
                                erat. In et mauris id diam laoreet pretium et
                                quis urna. Aliquam eu egestas odio. Donec non
                                ultricies est.
                            </p>
                            <p className='mb5'>
                                Cras finibus eros metus, eget eleifend metus
                                interdum vitae. Aliquam auctor sapien sit amet
                                est eleifend ullamcorper. Donec viverra ligula
                                nec mi posuere lobortis ac sed orci. Etiam
                                egestas ipsum quis libero ullamcorper, eget
                                consectetur eros eleifend. Vestibulum maximus
                                suscipit neque, faucibus facilisis erat interdum
                                in. Suspendisse lacinia, neque non maximus
                                ornare, sem diam vulputate sapien, quis
                                pellentesque est eros eu magna. Aliquam pulvinar
                                molestie lacus, nec auctor nulla aliquet sed.
                                Duis sed magna pretium, posuere eros quis,
                                tincidunt justo. Fusce laoreet mauris lorem. In
                                hac habitasse platea dictumst. Nulla facilisi.
                            </p>
                        </div>
                        <Modal
                            isOpen={context.modalIsOpen}
                            closeModal={() => context.closeModal()}
                            content={context.modalContent}
                        />
                    </div>
                )}
            </GlobalContext.Consumer>
        </Layout>
    );
};

export const query = graphql`
    query HomePageQuery {
        allFile(
            filter: {
                sourceInstanceName: { eq: "images" }
                name: { eq: "cat" }
            }
        ) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData
                    }
                    name
                    id
                }
            }
        }
    }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
