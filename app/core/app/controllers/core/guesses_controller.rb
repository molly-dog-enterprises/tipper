module Core
  class GuessesController < ApplicationController
    def index
      user = Core::User.find(params[:user_id])
      render json: user.guesses
    end
  end
end
