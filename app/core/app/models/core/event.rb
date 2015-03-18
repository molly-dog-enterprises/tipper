module Core
  class Event < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :events

    has_many :event_users
    has_many :users, through: :event_users
  end
end
