module Core
  class User < ActiveRecord::Base
    self.table_name = :users
    has_many :guesses

    has_many :event_users
    has_many :events, through: :event_users
  end
end
