export const fetchChannels = serverId => (
  $.ajax({
    url: `/api/servers/${serverId}/channels`,
  })
);

export const fetchChannel = channel => (
  $.ajax({
    url: `/api/servers/${channel.server_id}/channels/${channel.id}`,
  })
);

export const createChannel = channel => (
  $.ajax({
    method: 'post',
    url: `/api/servers/${channel.server_id}/channels`,
    data: { channel }
  })
);

//edit channel

//delete channel