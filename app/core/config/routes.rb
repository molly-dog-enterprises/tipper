Core::Engine.routes.draw do
  resources :leagues, only: [] do
    resources :event_users, only: [:index]
  end

  resources :users, only: [] do
    resources :guesses, only: [:index]
  end

  get 'status', to: "status#index"
end
