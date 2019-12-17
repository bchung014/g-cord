// export const fetchChannel = channelId => (
//   $.ajax({
//     url: `/api/channels/${channelId}`,
//   })
// );

export const createChannel = channel => (
  $.ajax({
    method: 'post',
    url: `/api/servers/${channel.server_id}/channels`,
    data: { channel }
  })
);