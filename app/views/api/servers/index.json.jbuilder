@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :admin_id
  end
end