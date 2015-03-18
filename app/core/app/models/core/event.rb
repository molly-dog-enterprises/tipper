module Core
  class Event < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :events

    has_many :event_users
    has_many :users, through: :event_users

    def self.json
      # TODO: delete this
      all.map(&:as_json).to_json
    end

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
