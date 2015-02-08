module Core
  class Event < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :events
  end
end
