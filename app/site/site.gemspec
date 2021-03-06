$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "site/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "site"
  s.version     = Site::VERSION
  s.authors     = ["David Henry", "Philip Stevens"]
  s.email       = ["david@decoybecoy.com", "cokofreedom@gmail.com"]
  # s.homepage    = "TODO"
  s.summary     = "Main site implementation."
  # s.description = "TODO: Description of Site."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "slim"
  s.add_dependency "rails", "~> 4.2.0"
  s.add_dependency "react-rails", '~> 1.0'

  s.add_development_dependency "sqlite3"
end
