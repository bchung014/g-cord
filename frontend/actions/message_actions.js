import * as MessageAPIUtil from '../util/message_api_util';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
});


// Action Thunk Creators

export const fetchMessages = (serverId, channelId) => dispatch => (
    MessageAPIUtil.fetchMessages(serverId, channelId)
        .then(messages => dispatch(receiveMessages(messages)))
);