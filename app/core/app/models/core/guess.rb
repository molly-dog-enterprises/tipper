module Core
  class Guess < ActiveRecord::Base
    self.table_name = :guesses
    belongs_to :user
    belongs_to :match
    belongs_to :team
  end
end
