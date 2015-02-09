module Core
  class Match < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :matches

    belongs_to :event
    has_many :sides

  end
end
