defmodule TrafficWardenWeb do
  @moduledoc """
  The entrypoint for defining your web interface, such
  as controllers, views, channels and so on.

  This can be used in your application as:

      use TrafficWardenWeb, :controller
      use TrafficWardenWeb, :view

  The definitions below will be executed for every view,
  controller, etc, so keep them short and clean, focused
  on imports, uses and aliases.

  Do NOT define functions inside the quoted expressions
  below. Instead, define any helper function in modules
  and import those modules here.
  """

  def model do
    quote do
      use Ecto.Schema

      import Ecto
      import Ecto.Changeset
      import Ecto.Query
    end
  end

  def controller do
    quote do
      use Phoenix.Controller, namespace: TrafficWardenWeb

      alias TrafficWarden.Repo
      import Ecto
      import Ecto.Query

      import Plug.Conn
      import TrafficWardenWeb.Router.Helpers
      import TrafficWardenWeb.Gettext
    end
  end

  def view do
    quote do
      use Phoenix.View, root: "lib/traffic_warden_web/templates",
                        namespace: TrafficWardenWeb

      # Import convenience functions from controllers
      import Phoenix.Controller, only: [get_flash: 2, view_module: 1]

      import TrafficWardenWeb.Router.Helpers
      import TrafficWardenWeb.ErrorHelpers
      import TrafficWardenWeb.Gettext
    end
  end

  def router do
    quote do
      use Phoenix.Router
      import Plug.Conn
      import Phoenix.Controller
    end
  end

  def channel do
    quote do
      alias TrafficWarden.Repo
      import Ecto
      import Ecto.Query #todo move this away from here and controllers

      use Phoenix.Channel
      import TrafficWardenWeb.Gettext
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
