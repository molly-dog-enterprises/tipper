require_dependency "admin/application_controller"

module Admin
  class EventTeamsController < ApplicationController
    before_action :set_event_team, only: [:show, :edit, :update, :destroy]

    # GET /event_teams
    def index
      @event_teams = EventTeam.all
    end

    # GET /event_teams/1
    def show
    end

    # GET /event_teams/new
    def new
      @event_team = EventTeam.new
    end

    # GET /event_teams/1/edit
    def edit
    end

    # POST /event_teams
    def create
      @event_team = EventTeam.new(event_team_params)

      if @event_team.save
        redirect_to @event_team, notice: 'Event team was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /event_teams/1
    def update
      if @event_team.update(event_team_params)
        redirect_to @event_team, notice: 'Event team was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /event_teams/1
    def destroy
      @event_team.destroy
      redirect_to event_teams_url, notice: 'Event team was successfully destroyed.'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_event_team
        @event_team = EventTeam.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def event_team_params
        params.require(:event_team).permit(:team_id, :event_id)
      end
  end
end
