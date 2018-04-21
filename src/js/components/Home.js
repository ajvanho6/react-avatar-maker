import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import ListSwiper from './ListSwiper';

import {
    changeAvatarTop,
    changeAvatarAccessories,
    changeHairColor,
    changeFacialHair,
    changeAvatarClothes,
    changeAvatarEyes,
    changeAvatarEyeBrow,
    changeAvatarMouth,
    changeAvatarSkin,
 } from '../actions/avatarActions';


import '../../scss/components/Home.scss';


class Home extends React.Component {
    static propTypes = {
        data: PropTypes.any,
        top: PropTypes.string,
        changeAvatarTop: PropTypes.func,
        changeAvatarAccessories: PropTypes.func,
        changeHairColor: PropTypes.func,
        changeFacialHair: PropTypes.func,
        changeAvatarClothes: PropTypes.func,
        changeAvatarEyes: PropTypes.func,
        changeAvatarEyeBrow: PropTypes.func,
        changeAvatarMouth: PropTypes.func,
        changeAvatarSkin: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    sumbitAvatar = (e) => {
        e.preventDefault();
        console.log('Some action for saving');
    }

    render() {
        const {
            data,
            top,
        } = this.props;

        return (
            <div className="home">
                <Avatar />
                <ul className="home__choice">
                    <ListSwiper
                        title="top"
                        selectedAvatar={data.top}
                        changeAvatarImage={this.props.changeAvatarTop}
                     />
                    <ListSwiper
                        className={top === 'Eyepatch' ? 'hidden' : 'visible'}
                        title="accessories"
                        selectedAvatar={data.accessories}
                        changeAvatarImage={this.props.changeAvatarAccessories}
                    />
                    <ListSwiper
                        className={
                            top === 'Hat' || top === 'Hijab' ||
                            top === 'Turban' || top === 'WinterHat1' ||
                            top === 'Eyepatch'
                            ? 'hidden' : 'visible'}
                        title="hair color"
                        selectedAvatar={data.hairColor}
                        changeAvatarImage={this.props.changeHairColor}
                    />
                    <ListSwiper
                        title="facial hair"
                        selectedAvatar={data.facialHair}
                        changeAvatarImage={this.props.changeFacialHair}
                    />
                    <ListSwiper
                        title="clothes"
                        selectedAvatar={data.clothes}
                        changeAvatarImage={this.props.changeAvatarClothes}
                    />
                    <ListSwiper
                        title="eyes"
                        selectedAvatar={data.eyes}
                        changeAvatarImage={this.props.changeAvatarEyes}
                    />
                    <ListSwiper
                        title="eyebrow"
                        selectedAvatar={data.eyebrow}
                        changeAvatarImage={this.props.changeAvatarEyeBrow}
                    />
                    <ListSwiper
                        title="mouth"
                        selectedAvatar={data.mouth}
                        changeAvatarImage={this.props.changeAvatarMouth}
                    />
                    <ListSwiper
                        title="skin"
                        selectedAvatar={data.skin}
                        changeAvatarImage={this.props.changeAvatarSkin}
                    />
                </ul>

                <a className="submit" href="#" onClick={this.sumbitAvatar}>Change Avatar</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.avatarReducer.data,
        top: state.avatarReducer.avatar.top,
    };
};

const mapDispatchToProps = {
    changeAvatarTop,
    changeAvatarAccessories,
    changeHairColor,
    changeFacialHair,
    changeAvatarClothes,
    changeAvatarEyes,
    changeAvatarEyeBrow,
    changeAvatarSkin,
    changeAvatarMouth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);