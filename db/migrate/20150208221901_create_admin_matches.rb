class CreateAdminMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.references :event, index: true
      t.string :location
      t.datetime :start_time

      t.timestamps null: false
    end
    add_foreign_key :matches, :events
  end
end
