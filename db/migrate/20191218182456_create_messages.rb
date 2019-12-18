class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :channel_id, null: false
      t.integer :author_id, null: false

      t.index :channel_id
      t.index :author_id
      t.timestamps
    end
  end
end
