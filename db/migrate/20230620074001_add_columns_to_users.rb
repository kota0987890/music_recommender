class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :token, :string
    add_column :users, :refresh_token, :string
    add_column :users, :expires_at, :integer
    add_column :users, :expires, :boolean
  end
end
