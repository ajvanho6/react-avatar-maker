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

    addOrRemove = (array, value) => {
        let index = array.indexOf(value);
        if (index === -1) {
            array.push(value);
        } else {
            array.splice(index, 1);
        }
    }

    render() {
        /* eslint-disable */
        const {
            data,
            top,
            changeAvatarTop,
            changeAvatarAccessories,
            changeHairColor,
            changeFacialHair,
            changeAvatarClothes,
            changeAvatarEyes,
            changeAvatarEyeBrow,
            changeAvatarMouth,
            changeAvatarSkin,
        } = this.props;
        /* eslint-enable */

        let actions = [
            changeAvatarTop, changeAvatarAccessories, changeHairColor, changeFacialHair,
            changeAvatarClothes, changeAvatarEyes, changeAvatarEyeBrow, changeAvatarMouth,
            changeAvatarSkin,
        ];
        let listItems = [];
        let keys = Object.keys(data);
        for (let i = 0; i < keys.length; i += 1) {
            listItems.push(keys[i]);
        }
        if (top === 'Eyepatch') {
            this.addOrRemove(listItems, 'accessories');
            this.addOrRemove(actions, changeAvatarAccessories);
        }
        if (top === 'Eyepatch' || top === 'Hat' || top === 'Hijab' ||
            top === 'Turban' || top === 'WinterHat1' || top === 'NoHair') {
            this.addOrRemove(listItems, 'hairColor');
            this.addOrRemove(actions, changeHairColor);
        }

        return (
            <div className="home">
                <Avatar />
                <ul className="home__choice">
                    {
                        listItems.map((list, i) => {
                        return (
                                <ListSwiper
                                    key={i}
                                    title={list.replace(/([A-Z])/g, ' $1')}
                                    selectedAvatar={data[list]}
                                    changeAvatarImage={actions[i]}
                                    className={list}
                                />
                            );
                        })
                    }
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