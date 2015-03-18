Site::Engine.routes.draw do
  resources :event, only: [], path: '/' do
    resources :leagues
  end
end
