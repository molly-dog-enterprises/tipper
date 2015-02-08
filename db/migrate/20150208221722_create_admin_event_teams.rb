class CreateAdminEventTeams < ActiveRecord::Migration
  def change
    create_table :event_teams do |t|
      t.references :team, index: true
      t.references :event, index: true

      t.timestamps null: false
    end
    add_foreign_key :event_teams, :teams
    add_foreign_key :event_teams, :events
  end
end
