class AddGroupFieldToEventTeam < ActiveRecord::Migration
  def change
    remove_column :teams, :image

    add_column :event_teams, :image_class, :string
    add_column :event_teams, :group, :string
  end
end
