module Core
  class Event < ::Event
    include Shared::ReadOnly

    has_many :event_users
    has_many :users, through: :event_users
    has_many :event_teams
    has_many :teams, through: :event_teams
    has_many :articles, as: :item

    def as_json(*args)
      {
        id: id,
        name: name,
        description: name,
        player_count: users.count,
        password_protected: false
      }
    end
  end
end
