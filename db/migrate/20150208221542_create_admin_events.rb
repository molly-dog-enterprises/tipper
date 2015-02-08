class CreateAdminEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :event_type

      t.timestamps null: false
    end
  end
end
