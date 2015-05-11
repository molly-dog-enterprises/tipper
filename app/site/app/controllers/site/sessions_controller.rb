module Site
  class SessionsController < ApplicationController
    def login
      render json: { status: 'success', token: 'aaa' }
    end
  end
end
