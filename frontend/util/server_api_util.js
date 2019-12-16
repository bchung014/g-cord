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