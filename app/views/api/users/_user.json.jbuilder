json.extract! user, :id, :username
json.server_memberships user.servers.pluck(:id)
json.admined_servers user.admined_servers.pluck(:id)