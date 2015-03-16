module Admin
  class Match < ActiveRecord::Base
    self.table_name = :matches
    belongs_to :event

    has_many :sides
  end
end
