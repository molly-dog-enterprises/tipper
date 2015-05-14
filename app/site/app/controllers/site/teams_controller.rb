module Site
  class TeamsController < Site::ApplicationController
    def index
      event_teams = current_event.event_teams.includes(:team).order(:group, 'teams.name')

      @teams_by_group = event_teams.map { |et| Site::TeamPresenter.new(et) }.group_by(&:group)
    end

    def show

    end
  end
end
