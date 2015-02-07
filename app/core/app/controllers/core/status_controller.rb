module Core
  class StatusController < Core::ApplicationController
    def index
      render json: { version: Core::VERSION, status: 'Green', issues: [] }
    end
  end
end
