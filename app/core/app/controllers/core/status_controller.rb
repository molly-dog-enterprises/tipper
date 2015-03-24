module Core
  class StatusController < Core::ApplicationController
    def index
      render json: { version: Core::VERSION, status: 'Green' }
    end
  end
end
