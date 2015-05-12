module Site
  module EventsHelper
    def current_event
      if session[:event_id]
        Core::Event.find(session[:event_id])
      else
        Core::Event.last
      end
    end
  end
end
