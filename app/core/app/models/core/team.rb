module Core
  class Team < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :teams

    def self.json
      # TODO: delete this
      all.map(&:as_json).to_json
    end

    def as_json(*args)
      {
        id: id,
        name: name,
        description: name
      }
    end

  end
end
