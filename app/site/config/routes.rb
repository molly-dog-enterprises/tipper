Site::Engine.routes.draw do
  resources :event, only: [], path: '/' do
    resources :leagues
    resources :users
    resources :teams
  end
end
