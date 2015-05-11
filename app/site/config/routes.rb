Site::Engine.routes.draw do
  root 'home#index'

  scope ':event_slug' do
    resources :leagues
    resources :users
    resources :teams
  end

  resources :events
  resource :user, controller: :user

  post '/login' => 'sessions#login'
end
