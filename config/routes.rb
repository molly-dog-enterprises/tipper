Rails.application.routes.draw do
  mount Core::Engine => '/', as: 'core'
  mount Admin::Engine => '/admin', as: 'admin'
end
