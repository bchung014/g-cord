@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :admin_id, :invite_code
    json.channels server.channels.pluck(:id)
    json.members server.members.pluck(:id)
  end
end