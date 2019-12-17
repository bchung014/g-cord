class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.integer :server_id, null: false
      
      t.index :server_id
      t.timestamps
    end
  end
end
