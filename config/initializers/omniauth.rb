Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, ENV['SPOTIFY_CLIENT_ID'], ENV['SPOTIFY_CLIENT_SECRET'], redirect_uri: 'http://localhost:8888/callback', scope: 'user-read-private playlist-modify-public'
end
