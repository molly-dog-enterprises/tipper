Site::Engine.routes.draw do
  root 'home#index'

  resources :events, only: [:index], path: '/' do
    resources :leagues
    resources :users
    resources :teams
  end

end
