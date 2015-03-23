module Core
  class Guess < ActiveRecord::Base
    self.table_name = :guesses
    belongs_to :user
    belongs_to :match
    belongs_to :team

    def as_json(*)
      {
        id:     id,
        match:  match.name,
        result: match.result,
        guess:  guess,
        score:  score,
      }
    end

    def guess
      "#{team.name} by #{by}"
    end
  end
end
