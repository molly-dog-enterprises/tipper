module Core
  class EventUser < ActiveRecord::Base
    self.table_name = :event_users
    belongs_to :event
    belongs_to :user
  end
end
