Admin::Engine.routes.draw do
  resources :sides

  resources :matches

  resources :event_teams

  resources :teams

  resources :events

end
