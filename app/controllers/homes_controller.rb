class HomesController < ApplicationController
  before_action :set_user

  def index
    spotify_service = SpotifyService.new
    access_token = spotify_service.token
    @songs = spotify_service.get_recommendations(s_params, access_token)
    session[:song_ids] = @songs&.map {|t| t["id"]}
  end

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

  def s_params
    {
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
  end
end
