module Core
  class EventUser < ActiveRecord::Base
    self.table_name = :event_users
    has_many :league_event_users
    belongs_to :event
    belongs_to :user

    scope :for_league, ->(league_id) {
      includes(:league_event_users).
        where(league_event_users: { league_id: league_id })
    }

    def as_json(*args)
      {
        id: id,
        name: user.name,
        email: user.email,
        team: 'N/A',
      }
    end

  end
end
