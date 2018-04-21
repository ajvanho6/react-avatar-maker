import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';


class ListSwiper extends React.Component {
    static propTypes = {
        selectedAvatar: PropTypes.any,
        title: PropTypes.string,
        changeAvatarImage: PropTypes.func,
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    afterChange = (index) => {
        this.props.changeAvatarImage(index);
    }

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: false,
            afterChange: this.afterChange,
        };

        const {
            selectedAvatar,
            title,
            className,
        } = this.props;

        return (
            <li className={className}>
                <div className="home__choice__title"><h4>{title}</h4></div>
                    <Slider {...settings}>
                        {
                        selectedAvatar.map((avatar, i) => {
                            return (
                                <div className="item" key={i}>
                                    {avatar}
                                </div>
                                );
                            })
                        }
                    </Slider>
            </li>
        );
    }
}

export default ListSwiper;