module Admin
  class Team < ::Team
    has_many :articles, as: :item
  end
end
