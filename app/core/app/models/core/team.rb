module Core
  class Team < ::Team
    include Shared::ReadOnly
    has_many :articles, as: :item

    def as_json(*args)
      {
        id: id,
        name: name,
        description: name
      }
    end

  end
end
