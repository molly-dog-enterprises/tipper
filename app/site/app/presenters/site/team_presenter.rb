module Site
  class TeamPresenter
    delegate :group, :team,
      to: :@event_team
    delegate :id, :name, :image,
      to: :team

    def initialize(event_team)
      @event_team = event_team
    end

    def news
      team.articles.first.try(:copy)
    end
  end
end
