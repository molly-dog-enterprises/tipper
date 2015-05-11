Site::Engine.routes.draw do
  root 'home#index'

  scope ':event_slug' do
    resources :leagues
    resources :users
    resources :teams
  end

  resources :events

  post '/login' => 'sessions#login'
end
