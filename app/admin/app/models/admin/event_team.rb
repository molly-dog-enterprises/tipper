module Admin
  class EventTeam < ActiveRecord::Base
    self.table_name = :event_teams
    belongs_to :team
    belongs_to :event
  end
end
