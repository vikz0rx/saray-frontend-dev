import React from 'react';
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Text from '../assets/Text';
import Theme from '../utils/style';
import { getPhotographs } from '../actions/photographsAction';

class Photographs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 0,
        }
    }

    componentDidMount = () => {
        this.props.getPhotographsAction()

        window.onscroll =()=>{
            const newScrollHeight = Math.ceil(window.scrollY / 10) * 10;
            if (this.state.currentScrollHeight != newScrollHeight){
                this.setState({currentScrollHeight: newScrollHeight})
            }
        }
    }
    
    renderPhotographs = () => {
        const { photographs } = this.props

        if (photographs.error) {
            return (
                <article className='grid-scroll'>
                    <div className='grid-item'>
                        <Text selector={'H3'} mb={'15px'} medium white uppercase>Ошибка загрузки сервера</Text>
                    </div>
                </article>
            )
        }

        if (photographs.isFetching) {
            return (
                <article className='grid-scroll'>
                    <div className='grid-item'>
                        <Loader type={'Triangle'} color={Theme.black} height={'75'} width={'75'} />
                    </div>
                    <div className='grid-item'>
                        <Loader type={'Triangle'} color={Theme.black} height={'75'} width={'75'} />
                    </div>
                    <div className='grid-item'>
                        <Loader type={'Triangle'} color={Theme.black} height={'75'} width={'75'} />
                    </div>
                    <div className='grid-item'>
                        <Loader type={'Triangle'} color={Theme.black} height={'75'} width={'75'} />
                    </div>
                </article>
            )
        }
        else {
            return (
                <article className='grid-scroll'>
                    {
                        photographs.list.map((item, index) => (
                            <Link to={'/photograph/' + item.id} key={index}>
                                <div className='grid-item' style={{backgroundImage: 'url(' + item.image + ')'}}>
                                    <div className='grid-item-overlay' />
                                    <div className='grid-item-info'>
                                        <Text className='grid-item-title' selector={'H2'} mb={'15px'} bold white uppercase>{item.first_name} {item.last_name}</Text>
                                        <Text selector={'P'} mb={'5px'} thin white>{item.desc}</Text>
                                        <Text selector={'P'} mb={'5px'} medium white>{item.link}</Text>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </article>
            )
        }
    }

    render() {
        const opacity = Math.min(75 / this.state.currentScrollHeight, 1)

        return (
            <section className='video-preview-page'>
                <header className='video-header'>
                    <video loop autoPlay playsInline muted>
                        <source src='https://drive.google.com/uc?export=download&id=1NkccKUvvyaMbKeEfH-qzssCDo9KaKLSm' />
                    </video>
                    <div className='video-info' style={{opacity}}>
                        <Text selector={'H1'} mb={'15px'} extrabold white uppercase>Наши Фотографы</Text>
                        <Text selector={'H6'} medium white uppercase>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Curabitur luctus dolor pellentesque mauris imperdiet.</Text>
                    </div>
                </header>
                {this.renderPhotographs()}
            </section>
        )
    }
}

const mapStateToProps = store => {
    return {
        photographs: store.photographs,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotographsAction: () => dispatch(getPhotographs()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Photographs);