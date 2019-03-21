import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import Loader from 'react-loader-spinner'
import Skeleton from 'react-skeleton-loader';
import { connect } from 'react-redux';

import Text from '../assets/Text';
import Theme from '../utils/style';
import { getArticle } from '../actions/articleAction';
import { media } from '../utils/style';

const Section = styled.section`
    width: 100%;
`;

const Welcome = styled.div`
    padding: 50px 5%;
    min-height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    ${ media.landscape`
        padding: 50px 5%;
    `}

    ${ media.desktop`
        padding: 50px 25%;
    `}
`;

const CoverImage = styled.div`
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const Content = styled.div`
    padding: 50px 5%;

    ${ media.landscape`
        padding: 50px 5%;
    `}

    ${ media.desktop`
        padding: 50px 25%;
    `}
`;

class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getArticleAction(this.props.match.params.id);
    }

    renderArticle = () => {
        const { article } = this.props

        if (article.error) {
            return (
                <CoverImage>
                    <Text selector={'H1'} medium black uppercase>При загрузке страницы возникла ошибка! =С</Text>
                </CoverImage>
            )
        }
        
        if (article.isFetching) {
            return (
                <>
                    <CoverImage>
                        <Loader type={'Triangle'} color={Theme.black} height={'75'} width={'75'} />
                    </CoverImage>
                    <Content>
                        <Text selector={'P'} thin black><Skeleton count={10} /></Text>
                    </Content>
                </>
            )
        }
        else {
            return (
                <>
                    <Welcome>
                        <Text selector={'H2'} mb={'15px'} medium black uppercase>{article.title}</Text>
                        {/* <Text selector={'P'} mb={'50px'} thin black>{article.desc}</Text> */}
                        <Text selector={'P'} mb={'5px'} thin black>{article.author_name}</Text>
                        <Text selector={'P'} thin black>{article.created_at}</Text>
                    </Welcome>
                    <CoverImage style={{backgroundImage: 'url(' + article.image + ')'}} />
                    <Content className='news-body'>{parse(String(article.text))}</Content>
                </>
            )
        }
    }

    render() {
        return (
            <Section>
                {this.renderArticle()}
            </Section>
        )
    }
}

const mapStateToProps = store => {
    return {
        article: store.article,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArticleAction: id => dispatch(getArticle(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);