class AddIndexToServerAdminId < ActiveRecord::Migration[5.2]
  def change
    add_index :servers, :admin_id
  end
end
