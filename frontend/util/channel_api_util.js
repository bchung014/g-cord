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

export const editChannel = channel => (
  $.ajax({
    url: `/api/servers/${channel.server_id}/channels/${channel.id}`,
    method: 'patch',
    data: {
      channel
    }
  })
);

export const deleteChannel = channel => (
  $.ajax({
    url: `/api/servers/${channel.server_id}/channels/${channel.id}`,
    method: 'delete'
  })
);