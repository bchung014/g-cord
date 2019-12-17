export const fetchServers = () => (
  $.ajax({
    url: '/api/servers'
  })
);

export const fetchServer = serverId => (
  $.ajax({
    url: `/api/servers/${serverId}`
  })
);

export const createServer = server => (
  $.ajax({
    url: '/api/servers',
    method: 'post',
    data: {
      server
    }
  })
);

export const joinServer = inviteCode => (
  $.ajax({
    url: '/api/servers/join',
    method: 'post',
    data: {
      inviteCode
    }
  })
);

export const leaveServer = serverId => (
  $.ajax({
    url: `/api/servers/${serverId}/leave`,
    method: 'delete'
  })
);

export const deleteServer = serverId => (
  $.ajax({
    url: `/api/servers/${serverId}`,
    method: 'delete'
  })
);