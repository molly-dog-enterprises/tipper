module Core
  class Team < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :teams
  end
end
