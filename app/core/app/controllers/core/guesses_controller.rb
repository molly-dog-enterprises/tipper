module Core
  class GuessesController < ApplicationController
    def index
      user = Core::User.find(params[:user_id])
      render json: user.guesses, content_type: 'application/javascript', callback: params[:callback]
    end
  end
end
