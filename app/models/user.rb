class User < ApplicationRecord
  def self.find_or_create_from_auth_hash(auth)
    spotify_user = RSpotify::User.new(auth)
    provider = "spotify"
    uid = spotify_user.id
    nickname = spotify_user.display_name
    if spotify_user.images.present?
      image_url = spotify_user.images.first["url"]
    else
      image_url = nil
    end

    user = self.find_by(provider: provider, uid: uid)

    if user
      user.update(nickname: nickname, image_url: image_url)
    else
      user = self.create(provider: provider, uid: uid, nickname: nickname, image_url: image_url)
    end  
    user ||= self.find_by(provider: provider, uid: uid)
  end
end
