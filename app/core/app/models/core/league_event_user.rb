module Core
  class LeagueEventUser < ActiveRecord::Base
    self.table_name = :league_event_users

    belongs_to :league
    belongs_to :event_user
  end
end
