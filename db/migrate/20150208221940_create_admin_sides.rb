class CreateAdminSides < ActiveRecord::Migration
  def change
    create_table :sides do |t|
      t.references :event_team, index: true
      t.references :match, index: true
      t.string :location
      t.integer :score

      t.timestamps null: false
    end
    add_foreign_key :sides, :event_teams
    add_foreign_key :sides, :matches
  end
end
