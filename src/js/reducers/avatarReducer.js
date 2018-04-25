import actionTypes from '../actions/actionTypes';

const initialState = {
    avatar: {
        top: 'LongHairStraight',
        accessories: 'Blank',
        hairColor: 'BrownDark',
        facialHair: 'Blank',
        clothes: 'BlazerShirt',
        eyes: 'Default',
        eyebrow: 'Default',
        mouth: 'Default',
        skin: 'Light',
    },
    data: {
        top: [
            'NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban',
            'WinterHat1', 'LongHairBigHair', 'LongHairBob', 'LongHairBun',
            'LongHairCurly', 'LongHairStraight', 'ShortHairDreads01', 'ShortHairFrizzle',
            'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairTheCaesar',
        ],
        accessories: [
            'Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round',
            'Sunglasses', 'Wayfarers',
        ],
        hairColor: [
            'Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark',
            'PastelPink', 'Platinum', 'Red', 'SilverGray',
        ],
        facialHair: [
            'Blank', 'BeardMedium', 'BeardLight', 'BeardMagestic',
            'MoustacheFancy', 'MoustacheMagnum',
        ],
        clothes: [
            'BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie',
            'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck',
        ],
        eyes: [
            'Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts',
            'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky',
        ],
        eyebrow: [
            'Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural',
            'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural',
            'UnibrowNatural', 'UpDownNatural',
        ],
        mouth: [
            'Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad',
            'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit',
        ],
        skin: [
            'Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black',
        ],
    },
};

const avatarReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_AVATAR_TOP: {
            return {
                ...state,
                avatar: {
                  ...state.avatar,
                  top: state.data.top[action.payload],
                },
            };
        }
        case actionTypes.CHANGE_AVATAR_ACCESSORIES: {
            return {
                ...state,
                avatar: {
                  ...state.avatar,
                  accessories: state.data.accessories[action.payload],
                },
            };
        }
        case actionTypes.CHANGE_AVATAR_HAIRCOLOR: {
            return {
                ...state,
                avatar: {
                  ...state.avatar,
                  hairColor: state.data.hairColor[action.payload],
                },
            };
        }
        case actionTypes.CHANGE_AVATAR_FACIALHAIR: {
            return {
                ...state,
                avatar: {
                  ...state.avatar,
                  facialHair: state.data.facialHair[action.payload],
                },
            };
        }
        case actionTypes.CHANGE_AVATAR_CLOTHES: {
            return {
                ...state,
                avatar: {
                  ...state.avatar,
                  clothes: state.data.clothes[action.payload],
                },
            };
        }
        case actionTypes.CHANGE_AVATAR_EYES: {
            return {
                ...state,
                avatar: {
                  ...state.avatar,
                  eyes: state.data.eyes[action.payload],
                },
            };
        }
        case actionTypes.CHANGE_AVATAR_EYEBROW: {
            return {
                ...state,
                avatar: {
                  ...state.avatar,
                  eyebrow: state.data.eyebrow[action.payload],
                },
            };
        }
        case actionTypes.CHANGE_AVATAR_MOUTH: {
            return {
                ...state,
                avatar: {
                  ...state.avatar,
                  mouth: state.data.mouth[action.payload],
                },
            };
        }
        case actionTypes.CHANGE_AVATAR_SKIN: {
            return {
                ...state,
                avatar: {
                  ...state.avatar,
                  skin: state.data.skin[action.payload],
                },
            };
        }
        default:
            return state;
    }
};

export const selectAvatarTopProperty = ({avatarReducer: state}) => {
    return state.avatar.top;
};

export default avatarReducer;
