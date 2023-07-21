Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'homes#index'
  resources :homes do
    collection {get "search"}
  end
  get '/auth/:provider/callback' => 'sessions#create'
  post '/playlists' => 'playlists#create'
  get '/logout' => 'sessions#destroy', :as => :logout
end
