module Core
  class Guess < ActiveRecord::Base
    self.table_name = :guess
    belongs_to :user
    belongs_to :match
    belongs_to :team
  end
end
