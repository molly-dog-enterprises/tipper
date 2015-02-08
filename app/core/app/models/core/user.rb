module Core
  class User < ActiveRecord::Base
    self.table_name = :users
  end
end
