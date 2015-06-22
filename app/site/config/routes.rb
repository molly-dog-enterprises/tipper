Site::Engine.routes.draw do
  root 'home#index', as: :home

  # causes an error during the migration process..
  # scope ':event_slug', default: { event_slug: Event.last.slug } do
  scope ':event_slug' do
    resources :leagues
    resources :users
    resources :teams
    resources :picks
  end

  resources :events
  resource :user, controller: :user

  post '/login' => 'sessions#login'
end
