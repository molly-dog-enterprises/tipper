module Admin
  class Match < ActiveRecord::Base
    self.table_name = :matches
    belongs_to :event
  end
end
