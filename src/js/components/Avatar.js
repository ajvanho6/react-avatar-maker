import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'avataaars';

import '../../scss/components/Avatar.scss';

class AvatarComponent extends Component {
    static propTypes = {
        avatar: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
            avatar: {
                ...this.props.avatar,
            },
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.avatar !== nextProps.avatar) {
            this.setState({
                avatar: {
                    ...nextProps.avatar,
                },
            });
        }
    }

    render() {
        const {
            avatar: {
                top,
                accessories,
                hairColor,
                facialHair,
                clothes,
                eyes,
                eyebrow,
                mouth,
                skin,
            },
        } = this.state;

        return (
            <div className="avatar">
               <h1>Change your avatar</h1>
               <div className="avatar__holder">
                    <div className="avatar__body">
                        <Avatar
                            style={{width: '200px', height: '200px'}}
                            avatarStyle='Circle'
                            topType={top}
                            accessoriesType={accessories}
                            hairColor={hairColor}
                            facialHairType={facialHair}
                            clotheType={clothes}
                            clotheColor={clothes}
                            eyeType={eyes}
                            eyebrowType={eyebrow}
                            mouthType={mouth}
                            skinColor={skin}
                        />
                    </div>
               </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        avatar: state.avatarReducer.avatar,
    };
};


export default connect(mapStateToProps, null)(AvatarComponent);
