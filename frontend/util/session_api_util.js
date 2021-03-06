export const register = user => (
  $.ajax({
    method: 'post',
    url: '/api/users',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'post',
    url: '/api/session',
    data: { user }
  })
);

export const logout = user => (
  $.ajax({
    method: 'delete',
    url: '/api/session',
    data: { user }
  })
);

export const fetchServerMembers = serverId => (
  $.ajax({
    method: 'get',
    url: '/api/users',
    data: { serverId }
  })
);