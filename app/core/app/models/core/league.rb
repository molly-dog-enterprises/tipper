module Core
  class League < ActiveRecord::Base
    self.table_name = :leagues

    has_many :league_event_users
    has_many :event_users, through: :league_event_users
    belongs_to :event

    def self.json
      # TODO: delete this
      all.map(&:as_json).to_json
    end

    def as_json(*args)
      {
        id: id,
        name: name,
        description: description,
        player_count: event_users.count,
        password_protected: password.present?
      }
    end

  end
end
