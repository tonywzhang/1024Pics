json.user do
    json.partial! "api/users/user", user: @user

end
json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.photoUrl url_for(photo.file)
    end
  end
end
