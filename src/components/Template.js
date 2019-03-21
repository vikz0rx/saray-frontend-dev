import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export class Landing extends React.Component {
    componentDidMount = () => {
        this.props.getNews();
    }

    renderTemplate = () => {
        const { news, isFetching, error } = this.props

        if (error) {
            return <p>Ошибка при загрузке данных!</p>
        }
        
        if (isFetching) {
            return <p>Загрузка...</p>
        } else {
            return news.map((item, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                    <br />
                </div>
            ))
        }
    }

    render() {
        return (
            <div>
                {this.renderTemplate()}
            </div>
        )
    }
}

Landing.propTypes = {
    news: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
}