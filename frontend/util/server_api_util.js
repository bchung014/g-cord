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

// $.ajax({
//   url: `/api/servers/`,
//   method: 'post',
//   data: {
//     server: {
//       name: 'pasadena'
//     }
//   }
// })