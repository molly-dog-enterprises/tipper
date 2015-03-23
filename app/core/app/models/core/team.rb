module Core
  class Team < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :teams

    def as_json(*args)
      {
        id: id,
        name: name,
        description: name
      }
    end

  end
end
