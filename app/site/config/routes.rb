Site::Engine.routes.draw do
  resources :events, only: [:index], path: '/' do
    resources :leagues
    resources :users
    resources :teams
  end


end
