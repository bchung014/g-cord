import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const removeChannel = channel => ({
  type: REMOVE_CHANNEL,
  channel
})

const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const clearChannelErrors = () => ({
  type: CLEAR_CHANNEL_ERRORS
});


// Action Thunk Creators

export const fetchChannels = serverId => dispatch => (
  ChannelAPIUtil.fetchChannels(serverId)
    .then(channels => dispatch(receiveChannels(channels)))
);

export const fetchChannel = channel => dispatch => (
  ChannelAPIUtil.fetchChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = channel => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(
      channel => dispatch(receiveChannel(channel)),
      errors => dispatch(receiveChannelErrors(errors.responseJSON))
    )
);

export const editChannel = channel => dispatch => (
  ChannelAPIUtil.editChannel(channel)
    .then(
      channel => dispatch(receiveChannel(channel)),
      errors => dispatch(receiveChannelErrors(errors.responseJSON))
    )
);

export const deleteChannel = channel => dispatch => (
  ChannelAPIUtil.deleteChannel(channel)
    .then(
      channel => dispatch(removeChannel(channel)),
      errors => dispatch(receiveChannelErrors(errors.responseJSON))
    )
);