module Core
  class EventUsersController < ApplicationController
    def index
      league = Core::League.find(params[:league_id])
      render json: league.event_users
    end
  end
end
