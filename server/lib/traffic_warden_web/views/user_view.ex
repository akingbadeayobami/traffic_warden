defmodule TrafficWardenWeb.UserView do
  use TrafficWardenWeb, :view

  def render("user.json", %{user: user}) do
    %{id: user.id, display_name: user.display_name}
  end

end
