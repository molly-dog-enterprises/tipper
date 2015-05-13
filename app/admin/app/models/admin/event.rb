module Admin
  class Event < ::Event
    has_many :articles, as: :item
  end
end
