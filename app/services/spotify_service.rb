class SpotifyService
  require 'net/http'
  require 'uri'
  require 'json'

  def token
    uri = URI.parse('https://accounts.spotify.com/api/token')
    req = Net::HTTP::Post.new(uri)
    req.set_form_data(grant_type: 'client_credentials')
    req['Authorization'] = "Basic #{Base64.encode64("#{ENV['SPOTIFY_CLIENT_ID']}:#{ENV['SPOTIFY_CLIENT_SECRET']}").gsub("\n", '')}"
    res = Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
      http.request(req)
    end
    JSON.parse(res.body)['access_token']
  end

  def get_recommendations(params, access_token)
    uri = URI.parse('https://api.spotify.com/v1/recommendations')
    uri.query = URI.encode_www_form(params)
    req = Net::HTTP::Get.new(uri)
    req['Authorization'] = "Bearer #{access_token}"
    res = Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
      http.request(req)
    end
    JSON.parse(res.body)['tracks']
  end
end
