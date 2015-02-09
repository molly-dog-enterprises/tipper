Core::Engine.routes.draw do
  # resources :guesses
  #
  # resources :event_users
  #
  # resources :users

  resources :results

  get 'status', to: "status#index"
end
