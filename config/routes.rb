Rails.application.routes.draw do
  mount Core::Engine => '/api', as: 'core'
  mount Admin::Engine => '/admin', as: 'admin'
  mount Site::Engine => '/', as: 'site'
end
