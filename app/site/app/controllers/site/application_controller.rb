module Site
  class ApplicationController < ActionController::Base
    helper 'site/events'
    helper_method :current_user

    def current_user
      nil # TODO: add user login and credentials
    end
  end
end
