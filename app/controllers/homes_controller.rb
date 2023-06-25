class HomesController < ApplicationController
  require 'rspotify'
  RSpotify.authenticate(ENV['SPOTIFY_CLIENT_ID'], ENV['SPOTIFY_CLIENT_SECRET'])

  Faraday.default_adapter = :net_http

  before_action :set_user

  def index
    s_params = {
      limit: params[:limit].to_i,
      seed_genres: params[:genre],
      min_popularity: params[:popularity_min].to_i,
      max_popularity: params[:popularity_max].to_i,
      min_liveness: params[:liveness_min].to_f / 100,
      max_liveness: params[:liveness_max].to_f / 100,
      min_danceability: params[:danceability_min].to_f / 100,
      max_danceability: params[:danceability_max].to_f / 100,
      min_acousticness: params[:acousticness_min].to_f / 100,
      max_acousticness: params[:acousticness_max].to_f / 100,
      min_energy: params[:energy_min].to_f / 100,
      max_energy: params[:energy_max].to_f / 100,
      min_speechiness: params[:speechiness_min].to_f / 100,
      max_speechiness: params[:speechiness_max].to_f / 100,
      min_valence: params[:valence_min].to_f / 100,
      max_valence: params[:valence_max].to_f / 100
    }
    
    # 環境変数からクライアントIDとシークレットを取得する
    client_id = ENV['SPOTIFY_CLIENT_ID']
client_secret = ENV['SPOTIFY_CLIENT_SECRET']

# SpotifyのAPIトークンを取得する
conn = Faraday.new(url: 'https://accounts.spotify.com')
response = conn.post('/api/token', {grant_type: 'client_credentials'}) do |req|
  req.headers['Authorization'] = "Basic #{Base64.encode64("#{client_id}:#{client_secret}").delete("\n")}"
end
access_tokens = JSON.parse(response.body)['access_token']


# SpotifyのAPIにリクエストを送ってレコメンデーションを取得する
conn = Faraday.new(url: 'https://api.spotify.com')
response = conn.get('/v1/recommendations', s_params) do |req|
  req.headers['Authorization'] = "Bearer #{access_tokens}"
end
@songs = JSON.parse(response.body)['tracks']
session[:song_ids] = @songs&.map {|t| t["id"]}
  end

  # プレイリストを作成して保存するメソッドを定義します
  def create_playlist
    song_ids = session[:song_ids]
    @songs = song_ids.map do |id|
      RSpotify::Track.find(id)
    end
    @s_user = RSpotify::User.find(@user.uid)
    playlist_name = params[:playlist_name] || "My Playlist"
    playlist = @s_user.create_playlist!(playlist_name)
    playlist.add_tracks!(@songs)
  end

  private

  def set_user
    if session[:user_id].present?
      @user = User.find(session[:user_id])
    else
      @user = nil
    end
  end
end
