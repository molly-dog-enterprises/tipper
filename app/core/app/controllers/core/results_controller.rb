module Core
  class ResultsController < Core::ApplicationController
    skip_before_action :protect_from_forgery
    def index
      results = Match.includes(sides: {event_team: :team}).where.not(sides: {score: nil})
      results = results.map do |result|
        {
          homeTeam: result.sides.first.event_team.team.name,
          awayTeam: result.sides.last.event_team.team.name,
          score: result.sides.map(&:score).join(' v '),
        }
      end
      render json: results, content_type: 'application/javascript', callback: params[:callback]
    end
  end
end
