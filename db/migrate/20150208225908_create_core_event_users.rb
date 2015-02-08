class CreateCoreEventUsers < ActiveRecord::Migration
  def change
    create_table :event_users do |t|
      t.references :event, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :event_users, :events
    add_foreign_key :event_users, :users
  end
end
