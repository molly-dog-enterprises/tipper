module Core
  class Match < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :matches

    belongs_to :event
    has_many :sides

    has_one :home_side, -> { where(location: 'home') }, class_name: 'Side'
    has_one :away_side, -> { where(location: 'away') }, class_name: 'Side'

    has_one :home_team, through: :home_side, class_name: 'Team', source: :event_team
    has_one :away_team, through: :away_side, class_name: 'Team', source: :event_team

    def name
      "#{home_team.name} v #{away_team.name}"
    end

    def result
      if home_side.score && away_side.score
        "#{home_side.score} v #{away_side.score}"
      else
        "pending"
      end
    end
  end
end
