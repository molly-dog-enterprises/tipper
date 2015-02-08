module Core
  class EventTeam < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :event_teams
    belongs_to :team
    belongs_to :event
  end
end
