# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'warreng', email: 'warreng@gmail.com', password: 'hunter2')
User.create!(username: 'natedogg', email: 'natedogg@regulate.com', password: 'hunter2')
User.create!(username: 'fatlip', email: 'fatlip@regulate.com', password: 'hunter2')
User.create!(username: 'macdre', email: 'macdre@regulate.com', password: 'hunter2')

Server.create!(name: 'oakland', admin_id: 1)
Server.create!(name: 'thebay', admin_id: 1)
Server.create!(name: 'sanjose', admin_id: 4)

ServerMembership.create!(server_id: 1, user_id: 1)
ServerMembership.create!(server_id: 2, user_id: 1)
ServerMembership.create!(server_id: 3, user_id: 4)

ServerMembership.create!(server_id: 1, user_id: 2)
ServerMembership.create!(server_id: 1, user_id: 3)
ServerMembership.create!(server_id: 1, user_id: 4)