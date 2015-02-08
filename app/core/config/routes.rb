Core::Engine.routes.draw do
  resources :guesses

  resources :event_users

  resources :users

  get 'status', to: "status#index"
end
