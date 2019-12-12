class CreateServerMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :server_memberships do |t|
      t.integer :server_id, null: false
      t.integer :user_id, null: false
      t.index :server_id
      t.index :user_id
      t.timestamps
    end
  end
end
