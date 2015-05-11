module Site
  class SessionsController < ApplicationController
    def login
      user = Core::User.find_by(name: params[:name])
      if user
        session[:current_user_id] = user.id
        render json: { status: 'success', token: user.name }
      else
        session[:current_user_id] = nil
        render json: { status: 'error', errors: ['Invalid username or password'] }
      end
    end
  end
end
