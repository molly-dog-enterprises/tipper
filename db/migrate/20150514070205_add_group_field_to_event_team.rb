class AddGroupFieldToEventTeam < ActiveRecord::Migration
  def change
    add_column :event_teams, :group, :string
  end
end
