module Admin
  class Article < ActiveRecord::Base
    self.table_name = :articles

    belongs_to :item, polymorphic: true
  end
end
