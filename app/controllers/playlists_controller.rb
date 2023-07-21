class PlaylistsController < ApplicationController
  before_action :set_user

  def create
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
