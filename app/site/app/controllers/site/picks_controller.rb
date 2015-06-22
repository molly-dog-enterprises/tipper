module Site
  class PicksController < Site::ApplicationController
    def index
      @picks = current_user.guesses
        .includes(:team, match: [{home_side: {event_team: :team}}, {away_side: {event_team: :team}}])
        .references(:team, match: [:home_team, :away_team])
        .where(matches: {event_id: current_event.id})
        .map do |guess|
          {
            id: guess.id,
            home: guess.match.home_side.event_team.team.name,
            home_score: guess.match.home_side.score,
            away: guess.match.away_side.event_team.team.name,
            away_score: guess.match.away_side.score,
            pick_id: guess.team.try(:id),
            pick_name: guess.team.try(:name),
            by: guess.by,
            location: guess.match.location,
            start_time: guess.match.start_time.strftime('%d %b @ %I%P'),
            match_id: guess.match_id,
          }

        end
      @matches = current_event.matches
    end
  end
end
