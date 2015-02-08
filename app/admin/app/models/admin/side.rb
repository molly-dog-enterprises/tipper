module Admin
  class Side < ActiveRecord::Base
    self.table_name = :sides
    belongs_to :event_team
    belongs_to :match
  end
end
