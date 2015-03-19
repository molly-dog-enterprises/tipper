Core::Engine.routes.draw do
  # resources :guesses
  #
  # resources :event_users
  #
  # resources :users

  resources :results

  resources :leagues, only: [] do
    resources :event_users, only: [:index]
  end

  get 'status', to: "status#index"
end
