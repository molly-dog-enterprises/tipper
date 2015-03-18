class CreateLeagueEventUsers < ActiveRecord::Migration
  def change
    create_table :league_event_users do |t|
      t.references :league, index: true
      t.references :event_user
      t.boolean :admin

      t.timestamps null: false
    end
    add_foreign_key :league_event_users, :leagues
  end
end
