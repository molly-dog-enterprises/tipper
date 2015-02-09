require 'csv'

class LoadHistoricalData
  def run
    @mappings = Hash.new { |h, k| h[k] = {} }
    event = create_event
    create_teams(event)
    create_matches(event)
    create_users(event)
    # create_guesses
  end

  def create_event
    Admin::Event.find_or_create_by!(name: 'RWC 2011', event_type: 'ruby')
  end

  def create_teams(event)
    data('teams.csv').each do |row|
      team = Admin::Team.find_or_create_by!(name: row['name'])
      event_team = Admin::EventTeam.find_or_create_by(event_id: event.id, team_id: team.id)
      @mappings[:teams][row['id']] = event_team
    end
  end

  def create_matches(event)
    data('matches.csv').each do |row|
      match = Admin::Match.find_or_create_by!(
        event_id: event.id,
        location: row['location'],
        # name: row['name'],
        # description: row['description'],
        start_time: Date.parse(row['match_date']).to_time + (3600 * row['lick_odd'].to_i).seconds
      )
      @mappings[:matchs][row['id']] = match
    end

    data('sides.csv').each do |row|
      Admin::Side.find_or_create_by!(
        match_id: lookup(:matchs, row['match_id']),
        event_team_id: lookup(:teams, row['team_id']),
        score: row['score'],
        # team: row['side']
      )
    end
  end

  def create_users(event)
    data('users.csv').each do |row|
      user = Core::User.find_or_create_by!(
        # login: row['login'],
        name: row['name'],
        email: row['email'],
        # team_id: row['team_id'],
      )
      Core::EventUser.find_or_create_by!(
        user_id: user.id,
        event_id: event.id
      )
      @mappings[:users][row['id']] = user
    end
  end

  def create_guesses
    data('picks.csv').each do |row|
      match = lookup(:matchs, row['match_id'], false)
      Core::Guess.find_or_create_by!(
        user_id: lookup(:users, row['user_id']),
        match_id: lookup(:matchs, row['match_id']),
        team: row['pick'] > 0 ? match.sides.first : match.sides.last,
        by: row['pick'].abs,
      )
    end
  end

  def data(filename)
    CSV.read(Rails.root.join("lib/old_data/#{filename}"), headers: true)
  end

  def lookup(key, id, get_id=true)
    if get_id
      @mappings[key][id.to_s].id
    else
      @mappings[key][id]
    end
  end
end