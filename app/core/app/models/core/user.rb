module Core
  class User < ActiveRecord::Base
    self.table_name = :users
    has_many :guesses
  end
end
