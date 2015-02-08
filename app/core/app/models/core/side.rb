module Core
  class Side < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :sides
    belongs_to :event_team
    belongs_to :match
  end
end
