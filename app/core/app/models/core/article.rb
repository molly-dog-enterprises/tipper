module Core
  class Article < ActiveRecord::Base
    include Shared::ReadOnly
    self.table_name = :articles

    belongs_to :item, polymorphic: true
  end
end
