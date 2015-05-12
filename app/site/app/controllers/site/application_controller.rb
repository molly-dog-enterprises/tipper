module Site
  class ApplicationController < ActionController::Base
    helper 'site/events'
    helper_method :current_user, :current_event

    def current_user
      if session[:current_user_id]
        Core::User.find(session[:current_user_id])
      else
        nil
      end
    end

    def current_event
      if params[:event_slug]
        event = Core::Event.find_by(slug: params[:event_slug])
        session[:event_id] = event.id
        event
      elsif session[:event_id]
        Core::Event.find(session[:event_id])
      else
        Core::Event.last
      end
    end
  end
end
