require_dependency "admin/application_controller"

module Admin
  class SidesController < ApplicationController
    before_action :set_side, only: [:show, :edit, :update, :destroy]

    # GET /sides
    def index
      @sides = Side.all
    end

    # GET /sides/1
    def show
    end

    # GET /sides/new
    def new
      @side = Side.new
    end

    # GET /sides/1/edit
    def edit
    end

    # POST /sides
    def create
      @side = Side.new(side_params)

      if @side.save
        redirect_to @side, notice: 'Side was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /sides/1
    def update
      if @side.update(side_params)
        redirect_to @side, notice: 'Side was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /sides/1
    def destroy
      @side.destroy
      redirect_to sides_url, notice: 'Side was successfully destroyed.'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_side
        @side = Side.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def side_params
        params.require(:side).permit(:event_team_id, :match_id, :score)
      end
  end
end
