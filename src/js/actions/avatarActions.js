import actionTypes from './actionTypes';

/**
 * Avatar actions
 *
 * @returns {*}
 */
export const changeAvatarTop = (payload = {}) => { return {type: actionTypes.CHANGE_AVATAR_TOP, payload}; };
export const changeAvatarAccessories = (payload = {}) => { return {type: actionTypes.CHANGE_AVATAR_ACCESSORIES, payload}; };
export const changeHairColor = (payload = {}) => { return {type: actionTypes.CHANGE_AVATAR_HAIRCOLOR, payload}; };
export const changeFacialHair = (payload = {}) => { return {type: actionTypes.CHANGE_AVATAR_FACIALHAIR, payload}; };
export const changeAvatarClothes = (payload = {}) => { return {type: actionTypes.CHANGE_AVATAR_CLOTHES, payload}; };
export const changeAvatarEyes = (payload = {}) => { return {type: actionTypes.CHANGE_AVATAR_EYES, payload}; };
export const changeAvatarEyeBrow = (payload = {}) => { return {type: actionTypes.CHANGE_AVATAR_EYEBROW, payload}; };
export const changeAvatarMouth = (payload = {}) => { return {type: actionTypes.CHANGE_AVATAR_MOUTH, payload}; };
export const changeAvatarSkin = (payload = {}) => { return {type: actionTypes.CHANGE_AVATAR_SKIN, payload}; };