class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.integer :admin_id, null: false
      t.string :invite_code, null: false
      t.timestamps
    end
  end
end
