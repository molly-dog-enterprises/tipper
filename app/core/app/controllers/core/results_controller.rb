module Core
  class ResultsController < Core::ApplicationController
    skip_before_action :protect_from_forgery
    def index
      # TODO: delete this code it is for POC only
      results = Match.includes(:home_team, :away_team).where.not(sides: {score: nil})
      results = results.map do |result|
        {
          homeTeam: result.home_team.name,
          awayTeam: result.away_team.name,
          score: result.sides.map(&:score).join(' v '),
        }
      end
      render json: results, content_type: 'application/javascript', callback: params[:callback]
    end
  end
end
